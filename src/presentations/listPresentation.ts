export type ListType = {
  title: string;
  url: string;
  datetime: string;
};

type ExactPresantationLengthArray<T> = {
  length: 6;
} & T[];

export const listStage: ExactPresantationLengthArray<ListType> = [
  {
    title: "Proposal for ECMAScript enumsについて（2025-06-06時点）",
    url: "https://scrapbox.io/yamanoku/Proposal_for_ECMAScript_enums%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%EF%BC%882025-06-06%E6%99%82%E7%82%B9%EF%BC%89",
    datetime: "2025-06-07T19:48:00.00+09:00"
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
  },
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
