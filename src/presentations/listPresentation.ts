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
    title: "Navigation APIと見るSvelteKitのWeb標準志向",
    url: "https://speakerdeck.com/yamanoku/navigation-api-sveltekit-web-standards",
    datetime: "2026-03-23T19:00:00.00+09:00"
  },
  {
    title: "Shifting from MCP to Skills ベストプラクティスの変遷を辿る",
    url: "https://speakerdeck.com/yamanoku/shifting-from-mcp-to-skills",
    datetime: "2026-03-06T19:30:00.00+09:00"
  },
  {
    title: "ReactにおけるWebアクセシビリティ実践",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vRuddSQ6OqS0cTmfpd5uA5KezqwofFs10JLVL8-oV0vmxw2NT2Iq0j7Y38RmK6kunz58ZyIDSyqkKjb/pub?start=false",
    datetime: "2026-02-28T10:00:00.00+09:00"
  },
  {
    title: "SchooでVue.js/Nuxtを技術選定している理由",
    url: "https://speakerdeck.com/yamanoku/why-choose-vue-nuxt",
    datetime: "2026-02-12T19:10:00.00+09:00"
  },
  {
    title:
      "たかがボタン、されどボタン～button要素から深ぼるボタンUIの定義について～",
    url: "https://yamanoku.net/burikaigi-2026/slide/",
    datetime: "2026-01-10T14:30:00.00+09:00"
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
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
  },
  {
    title: "2025年オープンソースコントリビュート活動振り返り",
    url: "https://zenn.dev/yamanoku/articles/2025-oss-contribute-activity",
    datetime: "2025-12-31T20:43:00.00+09:00"
  }
];
