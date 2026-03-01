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
  }
];

export const listWrite: ExactPresantationLengthArray<ListType> = [
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
  },
  {
    title: "SvelteKitのクライアントサイドルーティングはどういう仕組みなの？",
    url: "https://zenn.dev/yamanoku/articles/svelte-advent-calender-2025",
    datetime: "2025-12-18T17:46:27.00+09:00"
  }
];
