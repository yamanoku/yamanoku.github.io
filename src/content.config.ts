import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// お元気ですか.fm の最新エピソード。
// データは `pnpm site -- podcast sync --write` が src/data/ogenkidesukaFm.json に生成する。
// JSONは { feedUrl, homeUrl, episodes } 構造のため、parserでepisodes配列を取り出す。
const ogenkidesukaFm = defineCollection({
  loader: file("src/data/ogenkidesukaFm.json", {
    parser: (text) => JSON.parse(text).episodes
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string().url(),
    datetime: z.string().datetime()
  })
});

export const collections = { ogenkidesukaFm };
