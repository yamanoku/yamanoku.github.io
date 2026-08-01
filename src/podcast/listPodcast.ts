import type { ListItem } from "../components/global/GlobalTypes";
import ogenkidesukaFm from "../data/ogenkidesukaFm.json";

// お元気ですか.fm のRSSから生成した最新エピソード一覧。
// データは scripts/fetch-ogenkidesuka-fm.mjs が src/data/ogenkidesukaFm.json に生成する。
export const listOgenkidesukaFm: ListItem[] = ogenkidesukaFm.episodes;

export const ogenkidesukaFmUrl = ogenkidesukaFm.homeUrl;
