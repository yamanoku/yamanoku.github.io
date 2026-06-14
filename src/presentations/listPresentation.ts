import recordsMarkdown from "../../records/src/data/records.md?raw";

export type ListType = {
  title: string;
  url: string;
  datetime: string;
};

type ExactPresantationLengthArray<T> = {
  length: 5;
} & T[];

// records.md（records.yamanoku.netの登壇記録）を唯一の情報源として導出する
const HEADING_PATTERN = /^### (\d{4}-\d{2}-\d{2})\s+(.+)$/;
const LINK_PATTERN = /^-?\s*\[(.+?)\]\((.+?)\)/;

// records.md をパースし、新しい順（記載順）の登壇エントリ5件を返す
const parseRecords = (markdown: string): ListType[] => {
  const lines = markdown.split("\n");
  const entries: ListType[] = [];
  const now = new Date();

  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(HEADING_PATTERN);
    if (!heading) continue;

    const [, datetime] = heading;

    // 未来日付（予定）を除外
    if (new Date(datetime) >= now) continue;

    // 見出し直後の最初のリンクを採用
    for (let j = i + 1; j < lines.length; j++) {
      if (HEADING_PATTERN.test(lines[j])) break;
      const link = lines[j].match(LINK_PATTERN);
      if (link) {
        const [, title, url] = link;
        entries.push({ title, url, datetime });
        break;
      }
    }
  }

  return entries.slice(0, 5);
};

export const listStage = parseRecords(recordsMarkdown);

export const listWrite: ExactPresantationLengthArray<ListType> = [
  {
    title: "TSKaigi 2026に参加＆登壇してきました！",
    url: "https://qiita.com/okuto_oyama/items/6b93d82a7da79f7e3d15",
    datetime: "2026-06-12T12:00:00+09:00"
  },
  {
    title: "動的な変更をスクリーンリーダーに伝えるNuxtAnnouncerの紹介",
    url: "https://zenn.dev/comm_vue_nuxt/articles/feat-nuxt-announcer",
    datetime: "2026-03-13T12:00:00.00+09:00"
  },
  {
    title:
      "選んだ技術を、自分たちで正解にする。SchooがVueエコシステムと共に歩む理由",
    url: "https://qiita.com/okuto_oyama/items/a981c84dbcf90edd9b62",
    datetime: "2026-02-24T08:20:00.00+09:00"
  },
  {
    title: "Interop 2026が始まりました！",
    url: "https://zenn.dev/yamanoku/articles/interop-2026-launched",
    datetime: "2026-02-13T21:52:20+09:00"
  },
  {
    title: "BuriKaigi 2026に登壇しました",
    url: "https://note.com/yamanoku/n/n7ea134e44551",
    datetime: "2026-01-14T22:17:00.00+09:00"
  }
];
