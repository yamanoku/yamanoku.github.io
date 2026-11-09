import assert from "node:assert/strict";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { afterEach, beforeEach, it } from "node:test";

import { runCli } from "./cli.js";
import { listCommands } from "./commands.js";
import { RenderedCliError } from "./errors.js";
import {
  canonicalSuggestion,
  exitCodeFor,
  quoteArg,
  suggestName
} from "./presentation.js";

let root: string;
let previousRoot: string | undefined;

beforeEach(async () => {
  root = await mkdtemp(resolve(tmpdir(), "yamanoku-site-cli-"));
  await mkdir(resolve(root, "src/data"), { recursive: true });
  await copyFile(
    resolve(import.meta.dirname, "../../../src/data/writings.json"),
    resolve(root, "src/data/writings.json")
  );
  previousRoot = process.env.YAMANOKU_SITE_ROOT;
  process.env.YAMANOKU_SITE_ROOT = root;
});

afterEach(async () => {
  if (previousRoot === undefined) delete process.env.YAMANOKU_SITE_ROOT;
  else process.env.YAMANOKU_SITE_ROOT = previousRoot;
  await rm(root, { recursive: true, force: true });
});

it("previews mutations without writing unless --write is provided", async () => {
  const path = resolve(root, "src/data/writings.json");
  const before = await readFile(path, "utf8");
  const args = [
    "writing",
    "add",
    "--title",
    "CLI test",
    "--url",
    "https://example.com/cli-test",
    "--datetime",
    "2099-01-01T00:00:00+09:00"
  ];

  await runCli(args);
  assert.equal(await readFile(path, "utf8"), before);

  await runCli([...args, "--write"]);
  const after = JSON.parse(await readFile(path, "utf8"));
  assert.equal(after[0].title, "CLI test");
  assert.equal(after.length, 5);
  const files = await readdir(resolve(root, "src/data"));
  assert.equal(files.includes("writings.json"), true);
});

it("rejects unknown options in strict mode", async () => {
  await assert.rejects(
    () => runCli(["writing", "list", "--unknown-option"]),
    /unknown|Unknown|未定義/i
  );
});

const capture = async (run: () => Promise<void>) => {
  const stdout: string[] = [];
  const stderr: string[] = [];
  const log = console.log;
  const error = console.error;
  console.log = (...args: unknown[]) => {
    stdout.push(args.map(String).join(" "));
  };
  console.error = (...args: unknown[]) => {
    stderr.push(args.map(String).join(" "));
  };
  try {
    await run();
  } finally {
    console.log = log;
    console.error = error;
  }
  return { stdout: stdout.join("\n"), stderr: stderr.join("\n") };
};

it("keeps the preview diff and next command off stdout", async () => {
  const { stdout, stderr } = await capture(() =>
    runCli([
      "writings",
      "add",
      "--title",
      "CLI test",
      "--url",
      "https://example.com/cli-test",
      "--datetime",
      "2099-01-01T00:00:00+09:00",
      "--json"
    ])
  );
  const document = JSON.parse(stdout) as {
    outcome: string;
    id: string;
    next: Array<{ command: string }>;
    diff: string;
  };
  assert.equal(document.outcome, "planned");
  assert.equal(document.id, "https://example.com/cli-test");
  assert.match(document.diff, /CLI test/);
  assert.match(document.next[0]?.command ?? "", /writings add/);
  assert.match(document.next[0]?.command ?? "", /--write$/);
  assert.equal(stderr, "");
  assert.equal(
    await readFile(resolve(root, "src/data/writings.json"), "utf8"),
    await readFile(
      resolve(import.meta.dirname, "../../../src/data/writings.json"),
      "utf8"
    )
  );
});

it("accepts the singular writing alias and keeps the canonical next command", async () => {
  const { stderr } = await capture(() =>
    runCli([
      "writing",
      "add",
      "--title",
      "CLI test",
      "--url",
      "https://example.com/alias",
      "--datetime",
      "2099-01-01T00:00:00+09:00"
    ])
  );
  assert.match(stderr, /site writings add/);
  assert.doesNotMatch(stderr, /非推奨/);
});

it("rejects combining --write and --dry-run before editing files", async () => {
  const path = resolve(root, "src/data/writings.json");
  const before = await readFile(path, "utf8");
  await assert.rejects(
    () =>
      runCli([
        "writings",
        "add",
        "--title",
        "CLI test",
        "--url",
        "https://example.com/conflict",
        "--datetime",
        "2099-01-01T00:00:00+09:00",
        "--write",
        "--dry-run"
      ]),
    /--write と --dry-run/
  );
  assert.equal(await readFile(path, "utf8"), before);
});

it("suggests one canonical command for an unknown name and exits 2", async () => {
  const error = await runCli(["writting", "list"]).then(
    () => undefined,
    (caught: unknown) => caught
  );
  assert.ok(error instanceof RenderedCliError);
  assert.match(error.message, /writings/);
  assert.equal(exitCodeFor(error), 2);
});

it("prints only the version for --version --json", async () => {
  const { stdout, stderr } = await capture(() =>
    runCli(["writings", "--version", "--json"])
  );
  assert.deepEqual(JSON.parse(stdout), { version: "0.1.0" });
  assert.equal(stderr, "");
});

it("shows group help without reading the data files", async () => {
  const { stdout } = await capture(() => runCli(["stages"]));
  assert.match(stdout, /stages add/);
  assert.match(stdout, /site stages add/);
});

it("searches commands offline", async () => {
  const { stdout } = await capture(() => runCli(["help", "search", "登壇"]));
  assert.match(stdout, /stages add/);
  const missed = await capture(() =>
    runCli(["help", "search", "no-such-command"])
  );
  assert.equal(missed.stdout, 'No commands match "no-such-command".');
  const json = await capture(() =>
    runCli(["help", "search", "登壇", "--json"])
  );
  const document = JSON.parse(json.stdout) as {
    commands: Array<{ path: string }>;
  };
  assert.ok(document.commands.some((command) => command.path === "stages add"));
  assert.equal(json.stderr, "");
});

it("warns once when a deprecated journal command is used", async () => {
  await copyFile(
    resolve(import.meta.dirname, "../../../src/data/site-content.json"),
    resolve(root, "src/data/site-content.json")
  );
  const { stderr, stdout } = await capture(() =>
    runCli(["journal", "add-year", "--year", "2099", "--json"])
  );
  const document = JSON.parse(stdout) as {
    outcome: string;
    warnings: Array<{ reason: string }>;
  };
  assert.equal(document.outcome, "planned");
  assert.equal(document.warnings[0]?.reason, "deprecated");
  assert.equal(stderr, "");
});

it("keeps help examples on the canonical command and free of prompts", () => {
  const examples = listCommands().flatMap((command) =>
    command.examples.split("\n").map((line) => line.trim())
  );
  const commands = examples.filter((line) => line.startsWith("site "));
  assert.ok(commands.length > 0);
  for (const command of commands) {
    assert.equal(command.includes("$"), false);
    assert.equal(command.includes("--yes"), false);
    assert.equal(command.includes("writing add"), false);
    assert.equal(command.includes("stage add"), false);
  }
});

it("quotes shell metacharacters in the next command", () => {
  assert.equal(quoteArg("plain"), "plain");
  assert.equal(quoteArg("a b"), "'a b'");
  assert.equal(
    canonicalSuggestion(
      suggestName("writting", ["writing", "writings", "stages"])
    ),
    "writings"
  );
});

it("rejects removing a translation key still used in source files", async () => {
  await mkdir(resolve(root, "src/pages"), { recursive: true });
  await copyFile(
    resolve(import.meta.dirname, "../../../src/data/site-content.json"),
    resolve(root, "src/data/site-content.json")
  );
  await writeFile(
    resolve(root, "src/pages/index.astro"),
    '{t("heading.basic")}\n'
  );

  await assert.rejects(
    () => runCli(["i18n", "remove", "heading.basic"]),
    /使用中の翻訳キーは削除できません: heading.basic/
  );
});
