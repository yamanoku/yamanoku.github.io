// お元気ですか.fm のRSSフィードを取得し、最新5話を src/data/ogenkidesukaFm.json に書き出す。
// GitHub Actions（.github/workflows/update-ogenkidesuka-fm.yml）から定期実行され、
// 差分があればコミット・pushしてデプロイをトリガーする。
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RSS_URL = "https://anchor.fm/s/65c3f018/podcast/rss";
const EPISODE_LIMIT = 5;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../src/data/ogenkidesukaFm.json");

// <item>...</item> をすべて取り出す
const extractItems = (xml) => {
  const items = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match = regex.exec(xml);
  while (match !== null) {
    items.push(match[1]);
    match = regex.exec(xml);
  }
  return items;
};

// タグの中身を取り出す（CDATAにも対応）
const pickTag = (item, tag) => {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = item.match(regex);
  if (!match) {
    return "";
  }
  const cdata = match[1].match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return (cdata ? cdata[1] : match[1]).trim();
};

// チャンネル（<item>より前）のホームURLを取り出す
const parseChannelLink = (xml) => {
  const channel = xml.split("<item>")[0];
  return pickTag(channel, "link");
};

const parseEpisodes = (xml) =>
  extractItems(xml)
    .slice(0, EPISODE_LIMIT)
    .map((item) => {
      const title = pickTag(item, "title");
      const url = pickTag(item, "link");
      const pubDate = pickTag(item, "pubDate");
      const datetime = pubDate ? new Date(pubDate).toISOString() : "";
      return { title, url, datetime };
    });

const main = async () => {
  const response = await fetch(RSS_URL);
  if (!response.ok) {
    throw new Error(`RSSの取得に失敗しました: ${response.status} ${response.statusText}`);
  }
  const xml = await response.text();
  const homeUrl = parseChannelLink(xml);
  const episodes = parseEpisodes(xml);

  if (episodes.length === 0) {
    throw new Error("エピソードを1件も取得できませんでした");
  }
  for (const episode of episodes) {
    if (!episode.title || !episode.url || !episode.datetime) {
      throw new Error(`エピソード情報が不完全です: ${JSON.stringify(episode)}`);
    }
  }

  const data = {
    feedUrl: RSS_URL,
    homeUrl: homeUrl || RSS_URL,
    episodes
  };
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`${episodes.length}件のエピソードを ${OUTPUT_PATH} に書き出しました`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
