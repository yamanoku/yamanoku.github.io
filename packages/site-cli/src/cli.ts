#!/usr/bin/env node
import { stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { cli, plugin } from "gunshi";
import { getAgentProfile } from "gunshi/agent";

import {
  commandAt,
  deprecationFor,
  listCommands,
  rootCommand,
  searchCommands
} from "./commands.js";
import { RenderedCliError, SiteCliError } from "./errors.js";
import {
  addWarning,
  beginInvocation,
  CLI_VERSION,
  currentInvocation,
  exitCodeFor,
  flagValue,
  renderFailure,
  type Invocation
} from "./presentation.js";

const GLOBAL_OPTIONS = [
  {
    name: "help",
    short: "h",
    type: "boolean",
    description: "このコマンドのヘルプを出す。作業はしない"
  },
  {
    name: "version",
    short: "v",
    type: "boolean",
    description: "CLIのバージョンを出す"
  },
  {
    name: "json",
    type: "boolean",
    description: "結果を1つのJSONとしてstdoutへ出す"
  },
  {
    name: "write",
    type: "boolean",
    description: "変更をファイルへ保存する。省略時はプレビュー"
  },
  {
    name: "dry-run",
    type: "boolean",
    description: "検証だけ行い、ファイルを変更しない"
  },
  {
    name: "cwd",
    type: "string",
    description: "この実行で使うリポジトリのディレクトリ"
  },
  {
    name: "color",
    type: "boolean",
    description: "色を付ける。--no-color で消す"
  },
  {
    name: "non-interactive",
    type: "boolean",
    description: "確認を求めない。このCLIは元から確認を出さない"
  },
  {
    name: "debug",
    type: "boolean",
    description: "失敗時の診断をstderrへ出す"
  }
] as const;

const sitePlugin = plugin({
  id: "site-global",
  name: "site global options",
  setup(ctx) {
    for (const option of GLOBAL_OPTIONS) {
      if (option.name === "help" || option.name === "version") continue;
      ctx.addGlobalOption(option.name, {
        type: option.type,
        description: option.description,
        ...(option.name === "color"
          ? { negatable: true, default: true }
          : {})
      });
    }
  }
});

const cliOptions = {
  name: "site",
  version: CLI_VERSION,
  description: "yamanoku.netの更新を安全に行うCLI",
  strict: true,
  renderHeader: null,
  subCommands: rootCommand.subCommands,
  plugins: [sitePlugin],
  renderValidationErrors: async (
    _ctx: unknown,
    error: AggregateError
  ): Promise<string> => {
    const detail = error.errors
      .map((item) => (item instanceof Error ? item.message : String(item)))
      .filter((item) => item.length > 0)
      .join("\n");
    const rendered = renderFailure(error);
    throw new RenderedCliError(
      rendered.message || detail || "使い方に問題があります。",
      rendered.exitCode
    );
  },
  onBeforeCommand: async (ctx: { values: object; commandPath: string[] }) => {
    const invocation = resolveInvocation(ctx.values, ctx.commandPath);
    beginInvocation(invocation);
    if (
      flagValue(ctx.values, "help") === true ||
      flagValue(ctx.values, "version") === true
    ) {
      return;
    }
    await applyCwd(ctx.values);
    const warning = deprecationFor(ctx.commandPath);
    if (warning) addWarning(warning);
    if (invocation.debug) {
      console.error(`debug: command ${ctx.commandPath.join(" ") || "site"}`);
    }
  }
};

const argvBeforeEnd = (args: readonly string[]): string[] => {
  const end = args.indexOf("--");
  return args.slice(0, end === -1 ? args.length : end);
};

const hasToken = (args: readonly string[], ...names: string[]): boolean =>
  argvBeforeEnd(args).some((arg) => names.includes(arg));

const wantsJson = (args: readonly string[]): boolean =>
  argvBeforeEnd(args).some(
    (arg) => arg === "--json" || arg === "--json=true"
  ) && !argvBeforeEnd(args).includes("--json=false");

const commandTokens = (args: readonly string[]): string[] =>
  argvBeforeEnd(args).filter((arg) => !arg.startsWith("-"));

const resolveInvocation = (
  values: object,
  commandPath: string[]
): Invocation => {
  const json = flagValue(values, "json") === true;
  const ci = process.env.CI;
  const continuous =
    ci !== undefined && ci !== "" && ci !== "0" && ci !== "false";
  const agent = getAgentProfile().isAgent;
  const stderrTty = process.stderr.isTTY === true;
  const stdinTty = process.stdin.isTTY === true;
  let nonInteractive =
    flagValue(values, "non-interactive") === true ||
    json ||
    continuous ||
    agent ||
    !stderrTty ||
    !stdinTty;
  if (
    flagValue(values, "non-interactive") === false &&
    !json &&
    !continuous &&
    stderrTty &&
    stdinTty
  ) {
    nonInteractive = false;
  }
  return {
    json,
    noColor: flagValue(values, "color") === false,
    debug: flagValue(values, "debug") === true,
    nonInteractive,
    commandPath,
    warnings: []
  };
};

const applyCwd = async (values: object): Promise<void> => {
  const cwd = flagValue(values, "cwd");
  if (typeof cwd !== "string" || cwd.length === 0) return;
  const directory = resolve(cwd);
  const info = await stat(directory).catch(() => undefined);
  if (!info?.isDirectory()) {
    throw new SiteCliError({
      message: `--cwd のディレクトリがありません: ${directory}`,
      exitCode: 2,
      reason: "invalid_arguments"
    });
  }
  process.env.YAMANOKU_SITE_ROOT = directory;
  currentInvocation().cwd = directory;
};

const kebab = (value: string): string =>
  value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);

const MUTATION_VERBS = new Set([
  "add",
  "update",
  "remove",
  "set",
  "enable",
  "disable",
  "sync"
]);

const helpDocument = (path: string[]): Record<string, unknown> => {
  const resolved = commandAt(path);
  if (resolved.kind === "unknown") {
    const parent = resolved.parent.join(" ");
    throw new SiteCliError({
      message: parent
        ? `site ${parent} にコマンド ${resolved.segment} はありません。`
        : `site にコマンド ${resolved.segment} はありません。`,
      exitCode: 2,
      reason: "unknown_command",
      next: [
        resolved.parent.length > 0
          ? `site ${resolved.parent.join(" ")} --help`
          : "site --help"
      ]
    });
  }
  const command = resolved.command;
  const entries = Object.entries(command.args ?? {});
  const useKebab = command.toKebab === true;
  const optionName = (name: string, type: string | undefined) =>
    type === "positional" ? name : useKebab ? kebab(name) : name;
  const verb = path.at(-1);
  return {
    path,
    summary: command.description ?? "",
    commands: Object.entries(command.subCommands ?? {})
      .filter(([, child]) => !child.internal)
      .map(([name, child]) => ({
        name,
        summary: child.description ?? ""
      })),
    arguments: entries
      .filter(([, schema]) => schema.type === "positional")
      .map(([name, schema]) => ({
        name,
        required: schema.required === true,
        description: schema.description ?? ""
      })),
    options: [
      ...entries
        .filter(([, schema]) => schema.type !== "positional")
        .map(([name, schema]) => ({
          name: optionName(name, schema.type),
          type: schema.type ?? "string",
          required: schema.required === true,
          description: schema.description ?? "",
          ...(schema.short ? { short: schema.short } : {}),
          ...(schema.default !== undefined ? { default: schema.default } : {})
        })),
      ...GLOBAL_OPTIONS.map((option) => ({
        name: option.name,
        type: option.type,
        required: false,
        description: option.description,
        ...("short" in option ? { short: option.short } : {})
      }))
    ],
    ...(typeof command.examples === "string"
      ? { examples: command.examples }
      : {}),
    ...(verb && MUTATION_VERBS.has(verb)
      ? {
          result: {
            outcome: "string",
            resource: "string",
            id: "string",
            changes: "array"
          }
        }
      : {})
  };
};

const printJson = (value: unknown): void => {
  console.log(
    process.stdout.isTTY === true
      ? JSON.stringify(value, null, 2)
      : JSON.stringify(value)
  );
};

const dispatch = async (args: string[]): Promise<void> => {
  if (hasToken(args, "--version", "-v") && !hasToken(args, "--help", "-h")) {
    if (wantsJson(args)) printJson({ version: CLI_VERSION });
    else console.log(CLI_VERSION);
    return;
  }
  if (hasToken(args, "--help", "-h") && wantsJson(args)) {
    printJson(helpDocument(commandTokens(args)));
    return;
  }
  await cli(args, rootCommand, cliOptions);
};

export async function showHelp(commandPath: string[]): Promise<void> {
  const { canonicalPath } = await import("./presentation.js");
  await dispatch([...canonicalPath(commandPath), "--help"]);
}

export async function runCli(args: string[]): Promise<void> {
  const normalized = args[0] === "--" ? args.slice(1) : args;
  const snapshot = process.env.YAMANOKU_SITE_ROOT;
  try {
    if (normalized[0] === "help" && normalized[1] !== "search") {
      await dispatch([...normalized.slice(1), "--help"]);
      return;
    }
    await dispatch(normalized);
  } finally {
    if (snapshot === undefined) delete process.env.YAMANOKU_SITE_ROOT;
    else process.env.YAMANOKU_SITE_ROOT = snapshot;
  }
}

export { exitCodeFor, listCommands, searchCommands };

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    await runCli(process.argv.slice(2));
  } catch (error) {
    if (error instanceof RenderedCliError) {
      process.exitCode = error.exitCode;
    } else {
      process.exitCode = renderFailure(error).exitCode;
    }
  }
}
