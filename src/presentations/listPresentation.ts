export type ListType = {
  title: string;
  url: string;
  datetime: string;
};

type ExactPresantationLengthArray<T> = {
  length: 5;
} & T[];

export const listStage: ExactPresantationLengthArray<ListType> = [
  {
    title:
      "たかがボタン、されどボタン～button要素から深ぼるボタンUIの定義について～",
    url: "https://yamanoku.net/burikaigi-2026/slide/",
    datetime: "2026-01-10T14:30:00.00+09:00"
  },
  {
    title: "ひとりNavigation API Advent Calendarの紹介 / Mita.ts #9",
    url: "https://speakerdeck.com/yamanoku/solo-navigation-api-advent-calendar",
    datetime: "2025-12-17T20:30:00.00+09:00"
  },
  {
    title: "生成AI時代のWebアプリケーションアクセシビリティ改善",
    url: "https://yamanoku.net/vuefes-japan-2025/slide/",
    datetime: "2025-10-25T12:50:00.00+09:00"
  },
  {
    title: "Svelte Accessibility on 2025-10-24",
    url: "https://scrapbox.io/yamanoku/Svelte_Accessibility_on_2025-10-24",
    datetime: "2025-10-24T20:39:00.00+09:00"
  },
  {
    title: "改めてカルーセルを見つめ直してみる Summer 2025",
    url: "https://scrapbox.io/yamanoku/%E6%94%B9%E3%82%81%E3%81%A6%E3%82%AB%E3%83%AB%E3%83%BC%E3%82%BB%E3%83%AB%E3%82%92%E8%A6%8B%E3%81%A4%E3%82%81%E7%9B%B4%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B_Summer_2025",
    datetime: "2025-09-08T20:03:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
  {
    title: "BuriKaigi 2026に登壇しました",
    url: "https://note.com/yamanoku/n/n7ea134e44551",
    datetime: "2026-01-14T22:17:00.00+09:00"
  },
  {
    title: "2025年オープンソースコントリビュート活動振り返り",
    url: "https://zenn.dev/yamanoku/articles/2025-oss-contribute-activity",
    datetime: "2025-12-31T20:43:00.00+09:00"
  },
  {
    title: "SvelteKitのクライアントサイドルーティングはどういう仕組みなの？",
    url: "https://zenn.dev/yamanoku/articles/svelte-advent-calender-2025",
    datetime: "2025-12-18T17:46:27.00+09:00"
  },
  {
    title: "Vueユーザーから見るReact Tokyoコミュニティ",
    url: "https://zenn.dev/yamanoku/articles/react-tokyo-advent-calender-2025",
    datetime: "2025-12-10T10:00:00.00+09:00"
  },
  {
    title: "フロントエンド技術周辺のアップデートから振り返る2025年",
    url: "https://qiita.com/okuto_oyama/items/6a5e5029c385a360f7fc",
    datetime: "2025-12-01T10:00:00.00+09:00"
  }
];
