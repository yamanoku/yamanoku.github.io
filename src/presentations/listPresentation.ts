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
  },
  {
    title:
      "転生したら​TypeScriptの​Enumだった​件～型​安全性と​エコシステムの​変化で​挫けそうになっているんだが​～",
    url: "https://yamanoku.net/tskaigi-2025/",
    datetime: "2025-05-23T15:00:00.00+09:00"
  },
  {
    title: "React 18からのAPI useIDを使おう！",
    url: "https://speakerdeck.com/yamanoku/lets-use-the-useid-api-from-react-18",
    datetime: "2025-05-17T16:00:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
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
  },
  {
    title:
      "Nuxt 3 SSRでの@datadog/browser-logs、@datadog/browser-rum、dd-traceの設定方法",
    url: "https://qiita.com/okuto_oyama/items/7fc03b13fe0c6be2f07b",
    datetime: "2025-03-26T12:39:20.00+09:00"
  },
  {
    title: "Webフロントエンドでのリアクティビティからalien-signalsを知ろう",
    url: "https://zenn.dev/comm_vue_nuxt/articles/about-alien-signals",
    datetime: "2025-03-24T12:00:00.00+09:00"
  }
];
