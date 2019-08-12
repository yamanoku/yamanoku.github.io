<template>
  <div>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h4 id="slides-stage">
      <a class="anchor" aria-hidden="true" href="#slides-stage">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.stage") }}
    </h4>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/%E5%AE%B6%E5%BA%AD%E5%86%85%E3%81%ABScrapbox%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B%E6%8F%90%E6%A1%88"
          target="_blank"
          rel="noopener"
        >家庭内にScrapboxを導入してみる提案</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/outline:_none%3B"
          target="_blank"
          rel="noopener"
        >outline: none;</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/scroll_handler%E3%82%92%E6%8D%A8%E3%81%A6%E3%82%88%E3%80%81Intersection_Observer%E3%81%B8%E5%87%BA%E3%82%88%E3%81%86"
          target="_blank"
          rel="noopener"
        >scroll handlerを捨てよ、Intersection Observerへ出よう</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88%E3%82%92%E9%99%90%E3%82%8A%E3%81%AA%E3%81%8F%E3%82%84%E3%81%A3%E3%81%9F%E3%82%89%E8%A6%8B%E3%81%88%E3%82%8B%E4%B8%96%E7%95%8C%E3%81%AF%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B"
          target="_blank"
          rel="noopener"
        >インプットを限りなくやったら見える世界は変わってくる</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/deno%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B"
          target="_blank"
          rel="noopener"
        >denoについて調べたことを共有する</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/stylelint-a11y%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%A6%E3%82%8F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8"
          target="_blank"
          rel="noopener"
        >stylelint-a11yについて調べてわかったこと</a>
      </li>
    </ul>
    <h4 id="slides-study">
      <a class="anchor" aria-hidden="true" href="#slides-study">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.study") }}
    </h4>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://speakerdeck.com/yamanoku/material-designtohahe-kawozhi-ruhui"
          target="_blank"
          rel="noopener"
        >Material Designとは何かを知る会</a>
      </li>
      <li role="listitem">
        <a
          href="https://qiita.com/yamanoku/items/73ffecc8955b1fcbdcc7"
          target="_blank"
          rel="noopener"
        >stylelint社内勉強会資料</a>
        <ul role="list">
          <li role="listitem">
            <a href="https://github.com/yamanoku/stylelint-boilerplate">
              サンプルコード
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub icon</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="slides-write">
      <a class="anchor" aria-hidden="true" href="#slides-write">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.write") }}
    </h4>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/%E6%95%B5%E3%82%92%E7%9F%A5%E3%82%8A%E5%B7%B1%E3%82%92%E7%9F%A5%E3%82%8C%E3%81%B0XSS%E5%8D%B1%E3%81%86%E3%81%8B%E3%82%89%E3%81%9A"
          target="_blank"
          rel="noopener"
        >敵を知り己を知ればXSS危うからず</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/PlayBackTech2017"
          target="_blank"
          rel="noopener"
        >PlayBackTech2017</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/HTML%E3%81%8B%E3%82%89%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E3%81%82%E3%82%8A%E6%96%B9%E3%82%92%E8%A6%8B%E7%9B%B4%E3%81%99"
          target="_blank"
          rel="noopener"
        >HTMLからウェブサイトのあり方を見直す</a>
      </li>
      <li role="listitem">
        <a
          href="https://blog.geek.co.jp/posts/2411/"
          target="_blank"
          rel="noopener"
        >Nota社主催でScrapbox勉強会をやってもらった話</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/PlayBackTech2018"
          target="_blank"
          rel="noopener"
        >PlayBackTech2018</a>
      </li>
    </ul>
    <h4 id="slides-qiita">
      <a class="anchor" aria-hidden="true" href="#slides-qiita">
        <anchor-icon />
      </a>
      Qiita
    </h4>
    <ul role="list">
      <li v-for="item in lists" :key="item.id">
        <a :href="item.url" target="_blank" rel="noopener">
          {{item.title}}
        </a>
      </li>
    </ul>
    <h4 id="slides-lt">
      <a class="anchor" aria-hidden="true" href="#slides-lt">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.lt") }}
    </h4>
    <ul role="list">
      <li role="listitem">
        <a href="/LT/lt01/" target="_blank" rel="noopener">猫のすすめ</a>
      </li>
      <li role="listitem">
        <a href="/LT/lt02/" target="_blank" rel="noopener">好きなことについて語るープロレスLT</a>
      </li>
      <li role="listitem">
        <a href="/LT/lt03/" target="_blank" rel="noopener">ガァルマゲドンについて語る #嫁ラブ</a>
      </li>
      <li role="listitem">
        <a href="/LT/lt04/" target="_blank" rel="noopener">情報収集ってどうしてる？</a>
      </li>
      <li role="listitem">
        <a href="/LT/lt05/" target="_blank" rel="noopener">まもなく娘生誕２周年だよ全員集合</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    qiita: Array
  },
  data() {
    return {
      lists: this.qiita
    };
  },
}
</script>
