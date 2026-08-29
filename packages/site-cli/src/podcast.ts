import type { PodcastData } from "./model.js";
import { validatePodcast } from "./model.js";

export const DEFAULT_RSS_URL = "https://anchor.fm/s/65c3f018/podcast/rss";
const EPISODE_LIMIT = 5;

const extractItems = (xml: string): string[] => {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match = regex.exec(xml);
  while (match !== null) {
    items.push(match[1]);
    match = regex.exec(xml);
  }
  return items;
};

const pickTag = (item: string, tag: string): string => {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = item.match(regex);
  if (!match) return "";
  const value = match[1];
  const cdata = value.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return (cdata ? cdata[1] : value).trim();
};

export function parsePodcastFeed(
  xml: string,
  feedUrl = DEFAULT_RSS_URL
): PodcastData {
  const channel = xml.split("<item>")[0];
  const homeUrl = pickTag(channel, "link") || feedUrl;
  const episodes = extractItems(xml)
    .slice(0, EPISODE_LIMIT)
    .map((item) => {
      const pubDate = pickTag(item, "pubDate");
      return {
        id: pickTag(item, "guid"),
        title: pickTag(item, "title"),
        url: pickTag(item, "link"),
        datetime: pubDate ? new Date(pubDate).toISOString() : ""
      };
    });
  return validatePodcast({ feedUrl, homeUrl, episodes });
}

export async function fetchPodcast(
  feedUrl = DEFAULT_RSS_URL,
  fetcher: typeof fetch = fetch
): Promise<PodcastData> {
  const response = await fetcher(feedUrl);
  if (!response.ok) {
    throw new Error(
      `RSSの取得に失敗しました: ${response.status} ${response.statusText}`
    );
  }
  return parsePodcastFeed(await response.text(), feedUrl);
}
