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
    title: "リアクティブシステムの変遷から理解するalien-signals",
    url: "https://speakerdeck.com/yamanoku/learning-alien-signals-from-the-evolution-of-reactive-systems",
    datetime: "2025-03-28T19:20:00.00+09:00"
  },
  {
    title: "Vue3.5からのuseIdでアクセシブルな汎用コンポーネントを作ってみよう",
    url: "https://qiita.com/okuto_oyama/items/31ea75201d84856df8f8",
    datetime: "2025-02-18T20:07:00.00+09:00"
  },
  {
    title: "分散型SNSで生活してみての所感〜周辺動向と鯖引越しを添えて〜",
    url: "https://scrapbox.io/yamanoku/%E5%88%86%E6%95%A3%E5%9E%8BSNS%E3%81%A7%E7%94%9F%E6%B4%BB%E3%81%97%E3%81%A6%E3%81%BF%E3%81%A6%E3%81%AE%E6%89%80%E6%84%9F%E3%80%9C%E5%91%A8%E8%BE%BA%E5%8B%95%E5%90%91%E3%81%A8%E9%AF%96%E5%BC%95%E8%B6%8A%E3%81%97%E3%82%92%E6%B7%BB%E3%81%88%E3%81%A6%E3%80%9C",
    datetime: "2025-02-08T:00:00.00+09:00"
  },
  {
    title: "動画にまつわるアクセシビリティ要件を探る",
    url: "https://scrapbox.io/yamanoku/%E5%8B%95%E7%94%BB%E3%81%AB%E3%81%BE%E3%81%A4%E3%82%8F%E3%82%8B%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E8%A6%81%E4%BB%B6%E3%82%92%E6%8E%A2%E3%82%8B",
    datetime: "2024-11-29T19:54:00.00+09:00"
  },
  {
    title:
      "ブラウザ互換の重要性 - あらゆるユーザーに価値を届けるために必要なこと",
    url: "https://yamanoku.net/frontendo-2024/ja/",
    datetime: "2024-08-23T04:20:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
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
  },
  {
    title: "Interop 2025が始まりました！",
    url: "https://zenn.dev/yamanoku/articles/interop-2025-launched",
    datetime: "2025-02-15T16:11:00.00+09:00"
  }
];
