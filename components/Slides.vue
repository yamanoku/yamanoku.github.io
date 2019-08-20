<template>
  <section id="slides">
    <h3>
      <a class="anchor" aria-hidden="true" href="#slides">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.title") }}
    </h3>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h4 id="slides-stage">
      <a class="anchor" aria-hidden="true" href="#slides-stage">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.stage") }}
    </h4>
    <slide-list :listArray="listStage" />
    <h4 id="slides-study">
      <a class="anchor" aria-hidden="true" href="#slides-study">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.study") }}
    </h4>
    <slide-list :listArray="listStudy" />
    <h4 id="slides-write">
      <a class="anchor" aria-hidden="true" href="#slides-write">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.write") }}
    </h4>
    <slide-list :listArray="listWrite" />
    <h4 id="slides-qiita">
      <a class="anchor" aria-hidden="true" href="#slides-qiita">
        <anchor-icon />
      </a>
      Qiita
    </h4>
    <slide-list :listArray="listQiita" />
    <h4 id="slides-lt">
      <a class="anchor" aria-hidden="true" href="#slides-lt">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.lt") }}
    </h4>
    <slide-list :listArray="listLT" />
  </section>
</template>

<script>
import SlideList from "~/components/slides/SlideList.vue";

export default {
  components: {
    SlideList
  },
  data() {
    return {
      listQiita: this.$store.state.qiita.articles,
      listStage: [
        {
          title: "stylelint-a11yについて調べてわかったこと",
          url:
            "https://scrapbox.io/yamanoku/stylelint-a11y%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%A6%E3%82%8F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8",
          datetime: "2019-08-05"
        },
        {
          title: "denoについて調べたことを共有する",
          url:
            "https://scrapbox.io/yamanoku/deno%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B",
          datetime: "2019-06-28"
        },
        {
          title: "インプットを限りなくやったら見える世界は変わってくる",
          url:
            "https://scrapbox.io/yamanoku/%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88%E3%82%92%E9%99%90%E3%82%8A%E3%81%AA%E3%81%8F%E3%82%84%E3%81%A3%E3%81%9F%E3%82%89%E8%A6%8B%E3%81%88%E3%82%8B%E4%B8%96%E7%95%8C%E3%81%AF%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B",
          datetime: "2019-05-29"
        },
        {
          title: "scroll handlerを捨てよ、Intersection Observerへ出よう",
          url:
            "https://scrapbox.io/yamanoku/scroll_handler%E3%82%92%E6%8D%A8%E3%81%A6%E3%82%88%E3%80%81Intersection_Observer%E3%81%B8%E5%87%BA%E3%82%88%E3%81%86",
          datetime: "2018-11-22"
        },
        {
          title: "outline: none;",
          url: "https://scrapbox.io/yamanoku/outline:_none%3B",
          datetime: "2018-11-09"
        },
        {
          title: "家庭内にScrapboxを導入してみる提案",
          url:
            "https://scrapbox.io/yamanoku/%E5%AE%B6%E5%BA%AD%E5%86%85%E3%81%ABScrapbox%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B%E6%8F%90%E6%A1%88",
          datetime: "2018-10-15"
        }
      ],
      listStudy: [
        {
          title: "stylelint社内勉強会資料",
          url: "https://qiita.com/yamanoku/items/73ffecc8955b1fcbdcc7",
          datetime: "2018-01-29"
        },
        {
          title: "Material Designとは何かを知る会",
          url:
            "https://speakerdeck.com/yamanoku/material-designtohahe-kawozhi-ruhui",
          datetime: "2016-06-12"
        }
      ],
      listWrite: [
        {
          title: "PlayBackTech2018",
          url: "https://scrapbox.io/yamanoku/PlayBackTech2018",
          datetime: "2018-12-01"
        },
        {
          title: "Nota社主催でScrapbox勉強会をやってもらった話",
          url: "https://blog.geek.co.jp/posts/2411/",
          datetime: "2018-07-13"
        },
        {
          title: "HTMLからウェブサイトのあり方を見直す",
          url:
            "https://scrapbox.io/yamanoku/HTML%E3%81%8B%E3%82%89%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E3%81%82%E3%82%8A%E6%96%B9%E3%82%92%E8%A6%8B%E7%9B%B4%E3%81%99",
          datetime: "2017-12-15"
        },
        {
          title: "PlayBackTech2017",
          url: "https://scrapbox.io/yamanoku/PlayBackTech2017",
          datetime: "2017-12-01"
        },
        {
          title: "敵を知り己を知ればXSS危うからず",
          url:
            "https://scrapbox.io/yamanoku/%E6%95%B5%E3%82%92%E7%9F%A5%E3%82%8A%E5%B7%B1%E3%82%92%E7%9F%A5%E3%82%8C%E3%81%B0XSS%E5%8D%B1%E3%81%86%E3%81%8B%E3%82%89%E3%81%9A",
          datetime: "2016-07-19"
        }
      ],
      listLT: [
        {
          title: "まもなく娘生誕２周年だよ全員集合",
          url: "/LT/lt05/",
          datetime: "2018-02-18"
        },
        {
          title: "情報収集ってどうしてる？",
          url: "/LT/lt04/",
          datetime: "2017-01-09"
        },
        {
          title: "ガァルマゲドンについて語る #嫁ラブ",
          url: "/LT/lt03/",
          datetime: "2016-12-11"
        },
        {
          title: "好きなことについて語るープロレスLT",
          url: "/LT/lt02/",
          datetime: "2016-07-18"
        },
        {
          title: "猫のすすめ",
          url: "/LT/lt01/",
          datetime: "2015-11-16"
        }
      ]
    };
  }
};
</script>
