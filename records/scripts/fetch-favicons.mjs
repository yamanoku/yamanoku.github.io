import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { registrableDomain } from "../src/lib/favicon-domain.ts";

const recordsRoot = fileURLToPath(new URL("..", import.meta.url));
const outDir = path.join(recordsRoot, "public/favicons");
const recordsPath = path.join(recordsRoot, "src/data/records.json");

function collectUrls(records) {
  const urls = [];
  for (const record of records) {
    if (typeof record.eventUrl === "string") urls.push(record.eventUrl);
    if (!Array.isArray(record.resources)) continue;
    for (const resource of record.resources) {
      if (typeof resource?.url === "string") urls.push(resource.url);
    }
  }
  return urls;
}

function isImage(bytes) {
  if (bytes.length < 12) return false;
  const png = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e;
  const gif = bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46;
  const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
  const ico = bytes[0] === 0x00 && bytes[1] === 0x00 && bytes[2] === 0x01;
  const webp =
    bytes.toString("ascii", 0, 4) === "RIFF" &&
    bytes.toString("ascii", 8, 12) === "WEBP";
  return png || gif || jpeg || ico || webp;
}

async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function download(domain) {
  const dest = path.join(outDir, `${domain}.png`);
  if (await fileExists(dest)) return "cached";

  const endpoint = new URL("https://www.google.com/s2/favicons");
  endpoint.searchParams.set("domain", domain);
  endpoint.searchParams.set("sz", "32");

  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        headers: { "user-agent": "records.yamanoku.net favicon fetch" },
        redirect: "follow",
        signal: AbortSignal.timeout(15_000)
      });
      const bytes = Buffer.from(await response.arrayBuffer());
      const type = response.headers.get("content-type") ?? "";
      // Google replies 404 with a default PNG when it has no icon.
      if (!type.startsWith("image/") || !isImage(bytes)) {
        throw new Error(
          `${domain} was not an image (${response.status}, ${type || "unknown"})`
        );
      }
      await writeFile(dest, bytes);
      return "fetched";
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

async function mapPool(items, limit, fn) {
  const results = Array.from({ length: items.length });
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await fn(items[index]);
    }
  }
  const workers = Math.min(limit, items.length);
  await Promise.all(Array.from({ length: workers }, () => worker()));
  return results;
}

export async function fetchFavicons() {
  const records = JSON.parse(await readFile(recordsPath, "utf8"));
  const domains = new Set();
  for (const url of collectUrls(records)) {
    try {
      const domain = registrableDomain(new URL(url).hostname);
      if (domain) domains.add(domain);
    } catch {
      // Skip records whose URL is not absolute.
    }
  }

  await mkdir(outDir, { recursive: true });
  const list = [...domains].sort();
  const results = await mapPool(list, 8, (domain) => download(domain));
  const fetched = results.filter((result) => result === "fetched").length;
  const cached = results.filter((result) => result === "cached").length;
  console.log(
    `favicons: ${fetched} fetched, ${cached} cached, ${list.length} domains`
  );
}

const invokedDirectly =
  process.argv[1] != null &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (invokedDirectly) {
  fetchFavicons().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
