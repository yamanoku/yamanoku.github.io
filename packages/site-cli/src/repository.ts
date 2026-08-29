import { readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import {
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

export async function validateRepository(
  root = getRepositoryRoot()
): Promise<RepositoryData> {
  return readRepositoryData(root);
}
