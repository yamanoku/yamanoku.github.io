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
  },
  {
    title: "Svelte Accessibility Warning",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vQ8UFLM2Rxnx-pf8ZI9SgU5ZKY5hPpLQa060LHDQ9fu4ddHVPJO_ECDOomNlSp6a0PyeL6UNc36kt6r/pub?slide=id.p1",
    datetime: "2024-02-22T11:30:00.00+09:00"
  },
  {
    title: "2020年から2023年までのCSSの変遷を振り返る",
    url: "https://scrapbox.io/yamanoku/2020%E5%B9%B4%E3%81%8B%E3%82%892023%E5%B9%B4%E3%81%BE%E3%81%A7%E3%81%AECSS%E3%81%AE%E5%A4%89%E9%81%B7%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B",
    datetime: "2023-12-01T11:00:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
  {
    title: "Vue3.5からの改善と振り返るdefineCustomElementについて",
    url: "https://zenn.dev/comm_vue_nuxt/articles/improvements-to-custom-elements-in-vue3-5",
    datetime: "2024-09-22T03:30:00.00+09:00"
  },
  {
    title: "Interop2025のプロポーザル投票が始まりました！",
    url: "https://zenn.dev/yamanoku/articles/interop-2025-opens-for-proposals",
    datetime: "2024-09-19T01:00:00.00+09:00"
  },
  {
    title:
      "フロントエンドカンファレンス北海道でブラウザ互換についての発表をしてきました #frontendo",
    url: "https://qiita.com/okuto_oyama/items/d15a5e49530a93848366",
    datetime: "2024-09-11T03:00:00.00+09:00"
  },
  {
    title: "Vue Fes Japanの歴代スピーカー一覧を見られるページを作った",
    url: "https://zenn.dev/yamanoku/articles/vuefes-japan-speakers",
    datetime: "2024-08-31T10:10:00.00+09:00"
  },
  {
    title: "SPA のアクセシビリティを強化する Nuxt の Route Announcer 機能",
    url: "https://zenn.dev/comm_vue_nuxt/articles/feat-nuxt-route-announcer",
    datetime: "2024-07-02T03:30:00.00+09:00"
  }
];
