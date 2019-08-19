<template>
  <section id="product">
    <h3>
      <a class="anchor" aria-hidden="true" href="#product">
        <anchor-icon />
      </a>
      {{ $t("heading.productList") }}
    </h3>
    <article>
      <h4>{{ $t("product.wafb.title") }}</h4>
      <p
        :lang="i18n"
      >Webアクセシビリティはどういった対応があるのか、マシンリーダブルとヒューマンリーダブル、WAI-ARIAについて、求められるアクセシビリティを意識したコンテンツなど…エンジニアのみならずWebに関わるすべての人たちに是非見ていただきたい一冊にしております！</p>
      <ul role="list">
        <li role="listitem">
          <a
            href="https://booth.pm/ja/items/1044446"
            target="_blank"
            rel="noopener"
          >{{ $t("product.wafb.boothLink") }}</a>
        </li>
        <li role="listitem">
          <a
            href="https://note.mu/yamanoku/n/n3487a344ff84"
            target="_blank"
            rel="noopener"
          >{{ $t("product.wafb.noteLink") }}</a>
        </li>
        <li role="listitem" v-if="this.$i18n.locale !== 'ja'">
          <em>{{ $t("onlyJPText") }}</em>
        </li>
      </ul>
      <h5 aria-describedby="a11ybook_issue">{{ $t("heading.todoList") }}</h5>
      <ul role="list" id="a11ybook_issue">
        <li role="listitem" v-for="issue in a11ybookIssue" :key="issue.id">
          <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
            {{issue.title}}
            <github-icon />
          </a>
        </li>
      </ul>
    </article>
    <article>
      <h4>{{ $t("product.reading") }}</h4>
      <p
        :lang="i18n"
      >日頃自分が見ているニュースを集約してまとめてみたらどうなるだろうか、情報の蓄積・可視化みたいなのを考えておりそういうのができないかなと思ってそれを題材にPWAにしてみようと思いました。</p>
      <ul role="list">
        <li role="listitem">
          <a
            href="https://reading.yamanoku.net"
            target="_blank"
            rel="noopener"
          >{{ $t("product.reading") }}</a>
        </li>
        <li role="listitem">
          <a
            href="https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0"
            target="_blank"
            rel="noopener"
          >Updates Info</a>
        </li>
        <li role="listitem">
          <a
            href="https://www.figma.com/file/IHsJKRaJXepsqcbX91iQ6YNV/Components?node-id=44%3A23"
            target="_blank"
            rel="noopener"
          >Figma Data</a>
        </li>
      </ul>
      <h5 aria-describedby="reading_issue">{{ $t("heading.todoList") }}</h5>
      <ul role="list" id="reading_issue">
        <li role="listitem" v-for="issue in readingIssue" :key="issue.id">
          <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
            {{issue.title}}
            <github-icon />
          </a>
        </li>
      </ul>
    </article>
    <article>
      <h4>{{ $t("product.vuePortfolio") }}</h4>
      <p :lang="i18n">Vue.js製のポートフォリオテンプレート。vue-cliから作成したVue.jsでの処女作。</p>
      <ul role="list">
        <li role="listitem">
          <a
            href="https://vue-portfolio.yamanoku.net/"
            target="_blank"
            rel="noopener"
          >{{ $t("product.vuePortfolio") }}</a>
        </li>
        <li role="listitem">
          <a
            href="https://www.figma.com/file/4yN9uOXGISbSTocH23EX8O/Style?node-id=0%3A1"
            target="_blank"
            rel="noopener"
          >Figma Data</a>
        </li>
      </ul>
      <h5 aria-describedby="vue_portfolio_issue">{{ $t("heading.todoList") }}</h5>
      <ul role="list" id="vue_portfolio_issue">
        <li role="listitem" v-for="issue in vuePortfolioIssue" :key="issue.id">
          <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
            {{issue.title}}
            <github-icon />
          </a>
        </li>
      </ul>
    </article>
    <article>
      <h4>{{ $t("product.crowding") }}</h4>
      <ul role="list">
        <li role="listitem">
          <a href="/birthday-countdown-js">{{ $t("product.birthdayCount") }}</a>
        </li>
        <li role="listitem">
          <a href="/glitchrange">{{ $t("product.glitch") }}</a>
        </li>
        <li role="listitem">
          <a href="/canvas_browser-crash.js">{{ $t("product.browserCrash") }}</a>
        </li>
        <li role="listitem">
          <a href="/rolling-sushi">{{ $t("product.sushi") }}</a>
        </li>
      </ul>
      <ul role="list">
        <li role="listitem"></li>
        <li role="listitem">
          <a href="https://www.npmjs.com/package/yamanoku">
            {{ $t("product.yamanokuCli") }}
            <npm-icon />
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://github.com/yamanoku/slack-reaction-primoji"
            target="_blank"
            rel="noopener"
          >
            {{ $t("product.slackprimoji") }}
            <github-icon />
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://github.com/yamanoku/Qiita_Code-Style_Before"
            target="_blank"
            rel="noopener"
          >
            {{ $t("product.qiitaCode") }}
            <github-icon />
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    a11ybook: Array,
    reading: Array,
    vuePortfolio: Array
  },
  data() {
    return {
      a11ybookIssue: this.a11ybook,
      readingIssue: this.reading,
      vuePortfolioIssue: this.vuePortfolio,
      i18n: this.$i18n.locale
    };
  }
};
</script>

<style scoped>
article p {
  margin: var(--rhythm) 0;
  font-size: 1rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
}
p[lang="ja"] {
  max-width: 40em;
}
</style>
