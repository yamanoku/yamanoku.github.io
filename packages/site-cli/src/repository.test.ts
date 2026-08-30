import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { afterEach, beforeEach, it } from "node:test";
import { formatJsonDiff, writeJson } from "./repository.js";

let root: string;
let previousRoot: string | undefined;

beforeEach(async () => {
  root = await mkdtemp(resolve(tmpdir(), "yamanoku-site-cli-repo-"));
  previousRoot = process.env.YAMANOKU_SITE_ROOT;
  process.env.YAMANOKU_SITE_ROOT = root;
});

afterEach(async () => {
  if (previousRoot === undefined) delete process.env.YAMANOKU_SITE_ROOT;
  else process.env.YAMANOKU_SITE_ROOT = previousRoot;
  await rm(root, { recursive: true, force: true });
});

it("formats a line diff of JSON changes", () => {
  const diff = formatJsonDiff(
    `${JSON.stringify({ title: "old" }, null, 2)}\n`,
    `${JSON.stringify({ title: "new" }, null, 2)}\n`,
    "src/data/example.json"
  );
  assert.match(diff, /--- a\/src\/data\/example.json/);
  assert.match(diff, /\+ {2}"title": "new"/);
  assert.match(diff, /- {2}"title": "old"/);
});

it("omits unchanged trailing lines after an early change", () => {
  const beforeValue: Record<string, string> = { title: "old" };
  const afterValue: Record<string, string> = { title: "new" };
  for (let index = 0; index < 80; index += 1) {
    beforeValue[`field${index}`] = "same";
    afterValue[`field${index}`] = "same";
  }
  const diff = formatJsonDiff(
    `${JSON.stringify(beforeValue, null, 2)}\n`,
    `${JSON.stringify(afterValue, null, 2)}\n`,
    "src/data/example.json"
  );
  const lines = diff.split("\n");

  assert.match(diff, /- {2}"title": "old"/);
  assert.match(diff, /\+ {2}"title": "new"/);
  assert.match(diff, /行省略/);
  assert.doesNotMatch(diff, /field79/);
  assert.ok(lines.length < 20);
});

it("prints the JSON diff during dry-run and does not write", async () => {
  const path = resolve(root, "src/data/example.json");
  await mkdir(resolve(root, "src/data"), { recursive: true });
  await writeFile(path, `${JSON.stringify({ title: "old" }, null, 2)}\n`);
  const messages: string[] = [];

  await writeJson(
    path,
    { title: "new" },
    {
      write: false,
      log: (message) => messages.push(message)
    }
  );

  assert.equal(
    await readFile(path, "utf8"),
    `${JSON.stringify({ title: "old" }, null, 2)}\n`
  );
  assert.match(messages[0] ?? "", /プレビュー: src\/data\/example.json/);
  assert.match(messages[1] ?? "", /\+ {2}"title": "new"/);
});
