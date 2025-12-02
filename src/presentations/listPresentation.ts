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
  },
  {
    title: "DenoとJSRで実現する最速MCPサーバー開発記",
    url: "https://speakerdeck.com/yamanoku/building-mcp-servers-at-lightning-speed-with-deno-and-jsr",
    datetime: "2025-06-18T20:10:00.00+09:00"
  },
  {
    title: "Proposal for ECMAScript enumsについて（2025-06-06時点）",
    url: "https://scrapbox.io/yamanoku/Proposal_for_ECMAScript_enums%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%EF%BC%882025-06-06%E6%99%82%E7%82%B9%EF%BC%89",
    datetime: "2025-06-06T19:48:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
  {
    title: "フロントエンド技術周辺のアップデートから振り返る2025年",
    url: "https://qiita.com/okuto_oyama/items/6a5e5029c385a360f7fc",
    datetime: "2025-12-01T10:00:00.00+09:00"
  },
  {
    title: "Vue Fes Japan 2025 After Talk参加レポート #vuefes_aftertalk",
    url: "https://qiita.com/okuto_oyama/items/7e7d6d2bc26d652516b3",
    datetime: "2025-11-12T09:10:49.00+09:00"
  },
  {
    title: "Nuxt設定ファイルにあるcompatibilityDateとは何か？",
    url: "https://zenn.dev/comm_vue_nuxt/articles/what-is-nuxt-compatibility-date-config",
    datetime: "2025-09-13T10:12:49.00+09:00"
  },
  {
    title: "Baseline MCP Serverを公開しました！",
    url: "https://zenn.dev/yamanoku/articles/baseline-mcp-server",
    datetime: "2025-04-13T15:04:00.00+09:00"
  },
  {
    title:
      "まだ内容を把握できてないことを調査して、勉強会で発表するまでにやってきたこと",
    url: "https://qiita.com/okuto_oyama/items/c941c4200c66bffb4d2b",
    datetime: "2025-04-04T12:11:20.00+09:00"
  }
];
