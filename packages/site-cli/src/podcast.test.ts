import assert from "node:assert/strict";
import { it } from "node:test";
import { parsePodcastFeed } from "./podcast.js";

it("parses podcast channel metadata and episodes", () => {
  const xml = `<?xml version="1.0"?>
    <rss><channel>
      <link>https://example.com/podcast</link>
      <item>
        <guid>episode-1</guid>
        <title><![CDATA[Episode 1]]></title>
        <link>https://example.com/episodes/1</link>
        <pubDate>Fri, 28 Aug 2026 00:00:00 GMT</pubDate>
      </item>
    </channel></rss>`;

  const data = parsePodcastFeed(xml, "https://example.com/feed.xml");
  assert.equal(data.homeUrl, "https://example.com/podcast");
  assert.deepEqual(data.episodes[0], {
    id: "episode-1",
    title: "Episode 1",
    url: "https://example.com/episodes/1",
    datetime: "2026-08-28T00:00:00.000Z"
  });
});

it("rejects an empty feed", () => {
  assert.throws(
    () =>
      parsePodcastFeed(
        "<rss><channel><link>https://example.com</link></channel></rss>",
        "https://example.com/feed.xml"
      ),
    /1〜5件/
  );
});
