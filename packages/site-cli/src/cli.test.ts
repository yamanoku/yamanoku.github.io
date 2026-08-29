import assert from "node:assert/strict";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { afterEach, beforeEach, it } from "node:test";
import { runCli } from "./cli.js";

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
  assert.deepEqual(await readdir(resolve(root, "src/data")), ["writings.json"]);
});

it("rejects unknown options in strict mode", async () => {
  await assert.rejects(
    () => runCli(["writing", "list", "--unknown-option"]),
    /unknown|Unknown|未定義/i
  );
});
