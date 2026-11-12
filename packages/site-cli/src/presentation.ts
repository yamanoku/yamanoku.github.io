import { isCommandNotFoundError } from "gunshi";

import { RenderedCliError, SiteCliError } from "./errors.js";
import { DataValidationError } from "./model.js";

export const CLI_VERSION = "0.1.0";

export type Warning = {
  reason: "deprecated";
  message: string;
};

export type Invocation = {
  json: boolean;
  noColor: boolean;
  debug: boolean;
  nonInteractive: boolean;
  cwd?: string;
  commandPath: string[];
  warnings: Warning[];
};

const defaultInvocation = (): Invocation => ({
  json: false,
  noColor: false,
  debug: false,
  nonInteractive: false,
  commandPath: [],
  warnings: []
});

let invocation = defaultInvocation();

export const beginInvocation = (next: Invocation): void => {
  invocation = next;
};

export const currentInvocation = (): Invocation => invocation;

export const addWarning = (message: string): void => {
  invocation.warnings.push({ reason: "deprecated", message });
};

const takeWarnings = (): Warning[] => {
  const warnings = invocation.warnings;
  invocation.warnings = [];
  return warnings;
};

export const flagValue = (values: object, name: string): unknown => {
  const record = values as Record<string, unknown>;
  if (name in record) return record[name];
  const camel = name.replace(/-([a-z])/g, (_match, char: string) =>
    char.toUpperCase()
  );
  return record[camel];
};

export const quoteArg = (value: string): string => {
  if (/^[A-Za-z0-9_./:@+=,-]+$/.test(value)) return value;
  return `'${value.replaceAll("'", `'\\''`)}'`;
};

export const formatCommand = (args: string[]): string => {
  const cwd = invocation.cwd;
  const parts = ["site", ...args.map(quoteArg)];
  if (cwd) parts.push("--cwd", quoteArg(cwd));
  return parts.join(" ");
};

const isUnsafeDisplay = (code: number): boolean =>
  code <= 0x1f ||
  (code >= 0x7f && code <= 0x9f) ||
  (code >= 0x200b && code <= 0x200f) ||
  (code >= 0x202a && code <= 0x202e) ||
  (code >= 0x2066 && code <= 0x2069);

export const sanitizeDisplay = (value: string): string => {
  let result = "";
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    result += isUnsafeDisplay(code)
      ? `\\u${code.toString(16).padStart(4, "0")}`
      : char;
  }
  return result;
};

const colorEnabled = (stream: NodeJS.WriteStream): boolean => {
  if (invocation.noColor || process.env.NO_COLOR !== undefined) return false;
  if (process.env.FORCE_COLOR !== undefined && process.env.FORCE_COLOR !== "") {
    return true;
  }
  if (process.env.TERM === "dumb") return false;
  return stream.isTTY === true;
};

const paint = (
  text: string,
  code: string,
  stream: NodeJS.WriteStream
): string => (colorEnabled(stream) ? `\u001B[${code}m${text}\u001B[0m` : text);

const writeStdout = (text: string): void => {
  console.log(text);
};

const writeStderr = (text: string): void => {
  console.error(text);
};

const jsonText = (value: unknown, pretty: boolean): string =>
  pretty ? JSON.stringify(value, null, 2) : JSON.stringify(value);

export const presentDocument = (
  human: unknown,
  jsonBody: Record<string, unknown>
): void => {
  const warnings = takeWarnings();
  if (invocation.json) {
    writeStdout(
      jsonText(
        warnings.length > 0 ? { ...jsonBody, warnings } : jsonBody,
        process.stdout.isTTY === true
      )
    );
    return;
  }
  for (const warning of warnings) {
    writeStderr(`! ${sanitizeDisplay(warning.message)}`);
  }
  writeStdout(JSON.stringify(human, null, 2));
};

export const presentLine = (
  line: string,
  jsonBody: Record<string, unknown>
): void => {
  const warnings = takeWarnings();
  if (invocation.json) {
    writeStdout(
      jsonText(
        warnings.length > 0 ? { ...jsonBody, warnings } : jsonBody,
        process.stdout.isTTY === true
      )
    );
    return;
  }
  for (const warning of warnings) {
    writeStderr(`! ${sanitizeDisplay(warning.message)}`);
  }
  writeStdout(line);
};

const OUTCOME_LABEL: Record<string, string> = {
  planned: "予定",
  added: "追加しました",
  updated: "更新しました",
  removed: "削除しました",
  replaced: "置換しました",
  enabled: "表示にしました",
  disabled: "非表示にしました",
  unchanged: "変更はありません"
};

export type MutationView = {
  resource: string;
  id: string;
  outcome: string;
  result: {
    changed: boolean;
    written: boolean;
    displayPath: string;
    diff?: string;
  };
  next?: string[];
  extra?: Record<string, unknown>;
};

export const presentMutation = (view: MutationView): void => {
  const outcome = !view.result.changed
    ? "unchanged"
    : view.result.written
      ? view.outcome
      : "planned";
  const warnings = takeWarnings();
  const changes = view.result.changed
    ? [{ path: view.result.displayPath, change: "updated" as const }]
    : [];
  const next =
    outcome === "planned" && view.next
      ? [{ command: formatCommand(view.next) }]
      : [];
  if (invocation.json) {
    const body: Record<string, unknown> = {
      outcome,
      resource: view.resource,
      id: view.id,
      changes
    };
    if (outcome === "planned" && view.result.diff) body.diff = view.result.diff;
    if (next.length > 0) body.next = next;
    if (view.extra) Object.assign(body, view.extra);
    if (warnings.length > 0) body.warnings = warnings;
    writeStdout(jsonText(body, process.stdout.isTTY === true));
    return;
  }

  for (const warning of warnings) {
    writeStderr(`! ${sanitizeDisplay(warning.message)}`);
  }
  const label = OUTCOME_LABEL[outcome] ?? outcome;
  const mark =
    outcome === "planned"
      ? label
      : `${paint("✓", "32", process.stderr)} ${label}`;
  const lines = [
    `${mark}  ${sanitizeDisplay(view.resource)} ${sanitizeDisplay(view.id)}`,
    `  ファイル  ${view.result.displayPath}`
  ];
  if (outcome === "planned" && view.result.diff) {
    lines.push("", view.result.diff);
  }
  if (next.length === 1) {
    lines.push("", "保存するには:", `  ${next[0].command}`);
  }
  writeStderr(lines.join("\n"));

  const showIdentifier =
    process.stdout.isTTY !== true || invocation.nonInteractive;
  if (showIdentifier) writeStdout(view.id);
};

export const suggestName = (
  input: string,
  candidates: readonly string[]
): string | undefined => {
  let best: { name: string; distance: number } | undefined;
  for (const name of candidates) {
    if (name === input || name.startsWith("(")) continue;
    const distance = levenshtein(input, name);
    if (distance === 0 || distance > 2) continue;
    if (
      !best ||
      distance < best.distance ||
      (distance === best.distance && name < best.name)
    ) {
      best = { name, distance };
    }
  }
  return best?.name;
};

const levenshtein = (left: string, right: string): number => {
  const rows = Array.from(
    { length: left.length + 1 },
    () => new Uint16Array(right.length + 1)
  );
  for (let i = 0; i <= left.length; i += 1) rows[i][0] = i;
  for (let j = 0; j <= right.length; j += 1) rows[0][j] = j;
  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(
        rows[i - 1][j] + 1,
        rows[i][j - 1] + 1,
        rows[i - 1][j - 1] + cost
      );
    }
  }
  return rows[left.length][right.length];
};

type FailureView = {
  message: string;
  exitCode: number;
  reason: string;
  next: string[];
  issues: string[];
  debug?: string;
};

const failureOf = (error: unknown): FailureView => {
  if (error instanceof SiteCliError) {
    return {
      message: error.message,
      exitCode: error.exitCode,
      reason: error.reason,
      next: error.next,
      issues: error.issues,
      debug: invocation.debug ? error.stack : undefined
    };
  }
  if (error instanceof AggregateError) {
    const commandNotFound = error.errors.find((item) =>
      isCommandNotFoundError(item)
    );
    if (commandNotFound) return failureOf(commandNotFound);
    const nested = error.errors.find((item) => item instanceof Error);
    if (nested instanceof Error) {
      const inner = failureOf(nested);
      return { ...inner, message: nested.message || inner.message };
    }
  }
  if (isCommandNotFoundError(error)) {
    const suggestion = canonicalSuggestion(
      suggestName(error.commandName, error.candidates)
    );
    const path = error.commandPath.join(" ");
    const where = path ? `site ${path}` : "site";
    const message = suggestion
      ? `${where} にコマンド ${error.commandName} はありません。${suggestion} ですか？`
      : `${where} にコマンド ${error.commandName} はありません。`;
    return {
      message,
      exitCode: 2,
      reason: "unknown_command",
      next: [`${where} --help`],
      issues: []
    };
  }
  if (error instanceof DataValidationError) {
    return {
      message: `データ検証に失敗しました。${error.issues.length}件が不正です。`,
      exitCode: 1,
      reason: "invalid_config",
      next: ["site validate"],
      issues: error.issues
    };
  }
  if (error instanceof Error) {
    const classified = classifyMessage(error.message);
    return {
      message:
        classified.reason === "internal_error"
          ? `site ${invocation.commandPath.join(" ") || "site"} で予期しないエラーが起きました。これはCLIの不具合です。`
          : error.message,
      exitCode: classified.exitCode,
      reason: classified.reason,
      next: classified.next,
      issues: [],
      debug: invocation.debug ? `${error.stack ?? error.message}` : undefined
    };
  }
  return {
    message: "site で予期しないエラーが起きました。これはCLIの不具合です。",
    exitCode: 1,
    reason: "internal_error",
    next: [],
    issues: []
  };
};

const classifyMessage = (
  message: string
): { reason: string; exitCode: number; next: string[] } => {
  if (message.includes("見つかりません")) {
    return { reason: "not_found", exitCode: 1, next: [] };
  }
  if (
    message.includes("既にあります") ||
    message.includes("使用中の翻訳キー")
  ) {
    return { reason: "conflict", exitCode: 1, next: [] };
  }
  if (
    message.includes("同時に指定") ||
    message.includes("から選んで") ||
    message.includes("形式にして") ||
    message.includes("Unknown") ||
    message.includes("unknown") ||
    message.includes("required")
  ) {
    return { reason: "invalid_arguments", exitCode: 2, next: [] };
  }
  if (message.includes("RSS")) {
    return { reason: "network_error", exitCode: 1, next: [] };
  }
  return { reason: "internal_error", exitCode: 1, next: [] };
};

const GROUP_ALIAS: Record<string, string> = {
  writing: "writings",
  stage: "stages",
  link: "links",
  section: "sections",
  work: "works"
};

const VERB_ALIAS: Record<string, string> = {
  ls: "list",
  rm: "remove"
};

export const canonicalSuggestion = (
  name: string | undefined
): string | undefined => {
  if (!name) return undefined;
  return GROUP_ALIAS[name] ?? VERB_ALIAS[name] ?? name;
};

export const canonicalPath = (commandPath: readonly string[]): string[] =>
  commandPath.map((part, index) => {
    if (index === 0) return GROUP_ALIAS[part] ?? part;
    return VERB_ALIAS[part] ?? part;
  });

export const renderFailure = (
  error: unknown
): { exitCode: number; message: string } => {
  if (error instanceof SiteCliError && error.silent) {
    return { exitCode: error.exitCode, message: "" };
  }
  const failure = failureOf(error);
  if (failure.exitCode === 2 && failure.next.length === 0) {
    const helpPath = canonicalPath(invocation.commandPath);
    failure.next = [
      helpPath.length > 0 ? `site ${helpPath.join(" ")} --help` : "site --help"
    ];
  }
  if (invocation.json) {
    if (failure.debug) writeStderr(failure.debug);
    writeStderr(
      JSON.stringify({
        status: "error",
        reason: failure.reason,
        message: failure.message,
        ...(failure.issues.length > 0
          ? { data: { issues: failure.issues } }
          : {}),
        ...(failure.next.length > 0
          ? { next: failure.next.map((command) => ({ command })) }
          : {})
      })
    );
    return { exitCode: failure.exitCode, message: failure.message };
  }
  const shownIssues = failure.issues.slice(0, 5);
  const lines = [
    `${paint("✗", "31", process.stderr)} ${sanitizeDisplay(failure.message)}`
  ];
  for (const issue of shownIssues) lines.push(`  ${sanitizeDisplay(issue)}`);
  if (failure.issues.length > shownIssues.length) {
    lines.push(`  ほか ${failure.issues.length - shownIssues.length} 件`);
  }
  if (failure.next.length === 1) {
    lines.push("", "次のコマンド:", `  ${failure.next[0]}`);
  }
  writeStderr(lines.join("\n"));
  if (failure.debug) writeStderr(failure.debug);
  return { exitCode: failure.exitCode, message: failure.message };
};

export const exitCodeFor = (error: unknown): number => {
  if (error instanceof RenderedCliError) return error.exitCode;
  if (error instanceof SiteCliError) return error.exitCode;
  return failureOf(error).exitCode;
};
