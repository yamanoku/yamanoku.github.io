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
  },
  {
    title: "日本企業のアクセシビリティ事例をコツコツと収集している話",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vT22K28-kR821F3K_4UGLhx1UVD1EmyC5hoqGGUjtMO9Glg_btK048U8Vth1oMnjCTWaBTxXaRlGqL_/pub?slide=id.p1",
    datetime: "2024-05-20T10:30:00.00+09:00"
  },
  {
    title: "令和最新静的サイトジェネレーター事情",
    url: "https://scrapbox.io/yamanoku/%E4%BB%A4%E5%92%8C%E6%9C%80%E6%96%B0%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E4%BA%8B%E6%83%85",
    datetime: "2024-04-25T10:30:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
  {
    title: "Vue.jsと周辺エコシステムで振り返る2024年",
    url: "https://zenn.dev/comm_vue_nuxt/articles/vuejs-2024-year-in-review",
    datetime: "2024-12-09T12:00:00.00+09:00"
  },
  {
    title: "Nuxt/UnJSと周辺エコシステムで振り返る2024年",
    url: "https://zenn.dev/comm_vue_nuxt/articles/nuxt-unjs-2024-year-in-review",
    datetime: "2024-12-09T12:00:00.00+09:00"
  },
  {
    title: "フロントエンド技術周辺のアップデートから振り返る2024年",
    url: "https://qiita.com/okuto_oyama/items/12d119671f4b350042e4",
    datetime: "2024-12-01T07:00:00.00+09:00"
  },
  {
    title: "Vue Fes Japan 2024参加レポート #vuefes",
    url: "https://qiita.com/okuto_oyama/items/b4591d5ed30c011121c9",
    datetime: "2024-10-25T08:12:24.00+09:00"
  },
  {
    title: "Vue3.5からの改善と振り返るdefineCustomElementについて",
    url: "https://zenn.dev/comm_vue_nuxt/articles/improvements-to-custom-elements-in-vue3-5",
    datetime: "2024-09-22T03:30:00.00+09:00"
  }
];
