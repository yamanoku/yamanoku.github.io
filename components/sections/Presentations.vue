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
        },
        {
          title: "Roppongi.vue #4 Vue.js × A11y",
          url: "https://www.youtube.com/watch?v=e8thOaizpiY",
          datetime: "2019-12-23T15:00:00.000Z"
        },
        {
          title: "自分の周辺情報をまとめる静的サイトをつくった",
          url:
            "https://scrapbox.io/yamanoku/%E8%87%AA%E5%88%86%E3%81%AE%E5%91%A8%E8%BE%BA%E6%83%85%E5%A0%B1%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%82%8B%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F",
          datetime: "2019-12-19T15:00:00.000Z"
        },
        {
          title: "ぼくとScrapboxと2019",
          url:
            "https://scrapbox.io/yamanoku/%E3%81%BC%E3%81%8F%E3%81%A8Scrapbox%E3%81%A82019",
          datetime: "2019-12-10T15:00:00.000Z"
        },
        {
          title:
            "Design Tokensを考える前に俺たちは変数名について考え直すことがあるのではないか ",
          url:
            "https://scrapbox.io/yamanoku/Design_Tokens%E3%82%92%E8%80%83%E3%81%88%E3%82%8B%E5%89%8D%E3%81%AB%E4%BF%BA%E3%81%9F%E3%81%A1%E3%81%AF%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%80%83%E3%81%88%E7%9B%B4%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B",
          datetime: "2019-10-02T15:00:00.000Z"
        },
        {
          title: "stylelint-a11yについて調べてわかったこと",
          url:
            "https://scrapbox.io/yamanoku/stylelint-a11y%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%A6%E3%82%8F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8",
          datetime: "2019-08-04T15:00:00.000Z"
        },
        {
          title: "denoについて調べたことを共有する",
          url:
            "https://scrapbox.io/yamanoku/deno%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B",
          datetime: "2019-06-27T15:00:00.000Z"
        },
        {
          title: "インプットを限りなくやったら見える世界は変わってくる",
          url:
            "https://scrapbox.io/yamanoku/%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88%E3%82%92%E9%99%90%E3%82%8A%E3%81%AA%E3%81%8F%E3%82%84%E3%81%A3%E3%81%9F%E3%82%89%E8%A6%8B%E3%81%88%E3%82%8B%E4%B8%96%E7%95%8C%E3%81%AF%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B",
          datetime: "2019-05-28T15:00:00.000Z"
        },
        {
          title: "scroll handlerを捨てよ、Intersection Observerへ出よう",
          url:
            "https://scrapbox.io/yamanoku/scroll_handler%E3%82%92%E6%8D%A8%E3%81%A6%E3%82%88%E3%80%81Intersection_Observer%E3%81%B8%E5%87%BA%E3%82%88%E3%81%86",
          datetime: "2018-11-21T15:00:00.000Z"
        },
        {
          title: "outline: none;",
          url: "https://scrapbox.io/yamanoku/outline:_none%3B",
          datetime: "2018-11-08T15:00:00.000Z"
        }
      ],
      listWrite: [
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
        },
        {
          title: "みんなに知ってもらいたいデザインシステムのこと",
          url: "https://note.com/yamanoku/n/n8acc38df2902",
          datetime: "2019-12-15T00:00:00.000Z"
        },
        {
          title: "Nota社主催でScrapbox勉強会をやってもらった話",
          url: "https://blog.geek.co.jp/posts/2411/",
          datetime: "2018-07-13T00:00:00.000Z"
        }
      ]
    };
  }
};
</script>
