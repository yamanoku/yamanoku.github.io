<template>
  <section id="presentations" aria-labelledby="presentations_heading">
    <h2 id="presentations_heading">
      {{ $t("heading.presentations.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 id="presentations-stage">
      {{ $t("heading.presentations.stage") }}
    </h3>
    <global-slide-list :listArray="listStage" />
    <h3 id="presentations-write">
      {{ $t("heading.presentations.write") }}
    </h3>
    <global-slide-list :listArray="listWrite" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      listStage: [
        {
          title: "これからもつづけるWebアクセシビリティ",
          url:
            "https://docs.google.com/presentation/d/1bWjpa1WwL-gQT7misOvC0TOKersl-m2pyE-LIP-kWbk/edit?usp=sharing",
          datetime: "2021-01-12T19:30:00.000Z"
        },
        {
          title: "Vue3 からはじめるWebアクセシビリティ",
          url:
            "https://docs.google.com/presentation/d/1GTJrGrcHZPvwknYBwtav9GnofAqVjLWpzQPJvtGZQQw/edit?usp=sharing",
          datetime: "2020-12-08T20:30:00.000Z"
        },
        {
          title: "Web_UIの実装で考えていることと気をつけたいこと",
          url:
            "https://scrapbox.io/yamanoku/Web_UI%E3%81%AE%E5%AE%9F%E8%A3%85%E3%81%A7%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8",
          datetime: "2020-09-29T15:00:00.000Z"
        },
        {
          title: "PWA is Progressive Web Accessibility",
          url:
            "https://docs.google.com/presentation/d/1VIBjWSrWcZ0ekKNIQ9Vl0pMdfGym1lrXi3Krq_o1EEo/edit?usp=sharing",
          datetime: "2020-05-19T15:00:00.000Z"
        },
        {
          title: "PWA RTA in Japan",
          url:
            "https://docs.google.com/presentation/d/1rLn_lNGD-_5Tk0-Bx-5fGPwGMjnUemtYeXjnKRaoB68/edit?usp=sharing",
          datetime: "2020-01-31T15:00:00.000Z"
        }
      ],
      listWrite: [
        {
          title: "UI の実装で考えていること, 気をつけたいこと",
          url: "https://zenn.dev/yamanoku/articles/c69decedfb1699",
          datetime: "2020-12-09T18:00:00.000Z"
        },
        {
          title:
            "クラウドワークス #accessibility チャンネル 気になる話題 Pickup 2020",
          url: "https://zenn.dev/yamanoku/scraps/443087a170fcbe",
          datetime: "2020-12-07T00:00:00.000Z"
        },
        {
          title: "クラウドワークスのフロントエンド活動を振り返る 2020",
          url: "https://engineer.crowdworks.jp/entry/crowdworks_frontend_2020",
          datetime: "2020-12-01T09:00:00.000Z"
        },
        {
          title: "クラウドワークスのWebアクセシビリティチェックを始めてみた",
          url:
            "https://engineer.crowdworks.jp/entry/product_accessibility_check",
          datetime: "2020-09-17T00:00:00.000Z"
        },
        {
          title:
            "東京都 新型コロナウイルス対策サイトにアクセシビリティ視点でコントリビュートしてみた",
          url:
            "https://engineer.crowdworks.jp/entry/covid-19_site_a11y_contribute",
          datetime: "2020-03-25T03:00:00.000Z"
        }
      ]
    };
  }
};
</script>
