import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import {
  DataValidationError,
  type PodcastData,
  type SiteContent,
  type StageRecord,
  validatePodcast,
  validateRecords,
  validateSiteContent,
  validateWritings,
  type Writing
} from "./model.js";

export type RepositoryData = {
  siteContent: SiteContent;
  writings: Writing[];
  records: StageRecord[];
  podcast: PodcastData;
};

export type WriteOptions = {
  write: boolean;
  log?: (message: string) => void;
};

type DiffOp = { kind: "eq" | "del" | "add"; value: string };

const CONTEXT_LINES = 3;

export const getRepositoryRoot = (): string =>
  process.env.YAMANOKU_SITE_ROOT
    ? resolve(process.env.YAMANOKU_SITE_ROOT)
    : resolve(import.meta.dirname, "../../..");

export const getDataPaths = (root = getRepositoryRoot()) => ({
  siteContent: resolve(root, "src/data/site-content.json"),
  writings: resolve(root, "src/data/writings.json"),
  records: resolve(root, "records/src/data/records.json"),
  podcast: resolve(root, "src/data/ogenkidesukaFm.json")
});

export function formatJsonDiff(
  before: string,
  after: string,
  displayPath: string
): string {
  const ops = diffLines(before, after);
  const body: string[] = [];
  let equalRun: string[] = [];

  const flushEqual = (all: boolean) => {
    if (equalRun.length === 0) return;
    if (all || equalRun.length <= CONTEXT_LINES * 2) {
      body.push(...equalRun.map((line) => ` ${line}`));
    } else {
      body.push(...equalRun.slice(0, CONTEXT_LINES).map((line) => ` ${line}`));
      body.push(` ... ${equalRun.length - CONTEXT_LINES * 2} 行省略`);
      body.push(...equalRun.slice(-CONTEXT_LINES).map((line) => ` ${line}`));
    }
    equalRun = [];
  };

  for (const op of ops) {
    if (op.kind === "eq") {
      equalRun.push(op.value);
      continue;
    }
    flushEqual(false);
    body.push(`${op.kind === "del" ? "-" : "+"}${op.value}`);
  }
  flushEqual(true);

  return [`--- a/${displayPath}`, `+++ b/${displayPath}`, ...body].join("\n");
}

const diffLines = (before: string, after: string): DiffOp[] => {
  const a = before.split("\n");
  const b = after.split("\n");
  const n = a.length;
  const m = b.length;
  const dp: Uint16Array[] = Array.from(
    { length: n + 1 },
    () => new Uint16Array(m + 1)
  );
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] =
        a[i] === b[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const ops: DiffOp[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      ops.push({ kind: "eq", value: a[i] });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      ops.push({ kind: "del", value: a[i] });
      i += 1;
    } else {
      ops.push({ kind: "add", value: b[j] });
      j += 1;
    }
  }
  while (i < n) {
    ops.push({ kind: "del", value: a[i] });
    i += 1;
  }
  while (j < m) {
    ops.push({ kind: "add", value: b[j] });
    j += 1;
  }
  return ops;
};

export async function readJson(path: string): Promise<unknown> {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`${path} をJSONとして読み込めません: ${reason}`);
  }
}

export async function readRepositoryData(
  root = getRepositoryRoot()
): Promise<RepositoryData> {
  const paths = getDataPaths(root);
  const [siteContent, writings, records, podcast] = await Promise.all([
    readJson(paths.siteContent),
    readJson(paths.writings),
    readJson(paths.records),
    readJson(paths.podcast)
  ]);
  return {
    siteContent: validateSiteContent(siteContent),
    writings: validateWritings(writings),
    records: validateRecords(records),
    podcast: validatePodcast(podcast)
  };
}

export async function writeJson(
  path: string,
  value: unknown,
  options: WriteOptions
): Promise<boolean> {
  const next = `${JSON.stringify(value, null, 2)}\n`;
  const current = await readFile(path, "utf8").catch(() => "");
  const displayPath = relative(getRepositoryRoot(), path);
  const log = options.log ?? console.log;

  if (current === next) {
    log(`変更なし: ${displayPath}`);
    return false;
  }
  if (!options.write) {
    log(
      `プレビュー: ${displayPath} を更新します（保存には --write が必要です）`
    );
    log(formatJsonDiff(current, next, displayPath));
    return true;
  }

  const temporaryPath = resolve(
    dirname(path),
    `.${path.split("/").at(-1)}.${process.pid}.${Date.now()}.tmp`
  );
  try {
    await writeFile(temporaryPath, next, "utf8");
    await rename(temporaryPath, path);
  } finally {
    await rm(temporaryPath, { force: true }).catch(() => undefined);
  }
  log(`更新しました: ${displayPath}`);
  return true;
}

export async function collectReferencedTranslationKeys(
  root = getRepositoryRoot()
): Promise<Set<string>> {
  const srcDir = resolve(root, "src");
  try {
    const sourceEntries = await readdir(srcDir, {
      recursive: true,
      withFileTypes: true
    });
    const sourceFiles = sourceEntries.filter(
      (entry) => entry.isFile() && /\.(astro|ts)$/.test(entry.name)
    );
    const referencedKeys = new Set<string>();
    await Promise.all(
      sourceFiles.map(async (entry) => {
        const source = await readFile(
          resolve(entry.parentPath, entry.name),
          "utf8"
        );
        for (const match of source.matchAll(/\bt\(\s*["']([^"']+)["']\s*\)/g)) {
          referencedKeys.add(match[1]);
        }
      })
    );
    return referencedKeys;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return new Set();
    }
    throw error;
  }
}

export async function validateRepository(
  root = getRepositoryRoot()
): Promise<RepositoryData> {
  const data = await readRepositoryData(root);
  const referencedKeys = await collectReferencedTranslationKeys(root);
  const missingKeys = [...referencedKeys].filter(
    (key) =>
      !(key in data.siteContent.translations.ja) ||
      !(key in data.siteContent.translations.en)
  );
  if (missingKeys.length > 0) {
    throw new DataValidationError(
      missingKeys.map((key) => `使用中の翻訳キーがありません: ${key}`)
    );
  }
  return data;
}
