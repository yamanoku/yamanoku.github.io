<template>
  <section id="product">
    <h3>
      <a class="anchor" aria-hidden="true" href="#product">
        <anchor-icon />
      </a>
      {{ $t("heading.productList") }}
    </h3>
    <article id="web_accessibility_for_beginner">
      <h4>
        <a class="anchor" aria-hidden="true" href="#web_accessibility_for_beginner">
          <anchor-icon />
        </a>
        {{ $t("product.wafb.title") }}
      </h4>
      <p>{{ $t("product.description.wafb") }}</p>
      <template v-if="this.$i18n.locale !== 'ja'">
        <p>
          <em>{{ $t("onlyJPText") }}</em>
        </p>
      </template>
      <ul role="list">
        <li role="listitem">
          <a
            href="https://techbookfest.org/event/tbf05/circle/41130001"
            target="_blank"
            rel="noopener"
          >{{ $t("product.wafb.circleDetail") }}</a>
        </li>
        <li role="listitem">
          <a href="https://booth.pm/ja/items/1044446" target="_blank" rel="noopener">
            {{ $t("product.wafb.boothLink") }}
            <shopping-icon />
          </a>
        </li>
        <li role="listitem">
          <a href="https://note.mu/yamanoku/n/n3487a344ff84" target="_blank" rel="noopener">
            {{ $t("product.wafb.noteLink") }}
            <shopping-icon />
          </a>
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
    <article id="reading">
      <h4>
        <a class="anchor" aria-hidden="true" href="#reading">
          <anchor-icon />
        </a>
        {{ $t("product.reading") }}
      </h4>
      <p>{{ $t("product.description.reading") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="https://reading.yamanoku.net" target="_blank" rel="noopener">
            {{ $t("product.reading") }}
            <product-icon />
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0"
            target="_blank"
            rel="noopener"
          >
            {{ $t("product.updateInfo") }}
            <article-icon />
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://www.figma.com/file/IHsJKRaJXepsqcbX91iQ6YNV/Components?node-id=44%3A23"
            target="_blank"
            rel="noopener"
          >
            {{ $t("product.designFigma") }}
            <image-icon />
          </a>
        </li>
      </ul>
      <h5>{{$t("heading.techStack")}}</h5>
      <ul role="list">
        <li role="listitem">Nuxt.js</li>
        <li role="listitem">Nuxt PWA</li>
        <li role="listitem">vue-paginate</li>
        <li role="listitem">axios</li>
        <li role="listitem">modern-normalize</li>
        <li role="listitem">AWS API Gateway</li>
        <li role="listitem">AWS Lambda Function</li>
        <li role="listitem">Netlify</li>
        <li role="listitem">CircleCI</li>
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
    <article id="vue_portfolio_template">
      <h4>
        <a class="anchor" aria-hidden="true" href="#vue_portfolio_template">
          <anchor-icon />
        </a>
        {{ $t("product.vuePortfolio") }}
      </h4>
      <p>{{ $t("product.description.vuePortfolio") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="https://vue-portfolio.yamanoku.net/" target="_blank" rel="noopener">
            {{ $t("product.vuePortfolio") }}
            <product-icon />
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://www.figma.com/file/4yN9uOXGISbSTocH23EX8O/Style?node-id=0%3A1"
            target="_blank"
            rel="noopener"
          >
            {{ $t("product.designFigma") }}
            <image-icon />
          </a>
        </li>
      </ul>
      <h5>{{$t("heading.techStack")}}</h5>
      <ul role="list">
        <li role="listitem">Vue.js</li>
        <li role="listitem">vue-cli</li>
        <li role="listitem">vue-router</li>
        <li role="listitem">webpack</li>
        <li role="listitem">PostCSS</li>
        <li role="listitem">Netlify</li>
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
    <article id="yamanoku_cli">
      <h4>
        <a class="anchor" aria-hidden="true" href="#yamanoku_cli">
          <anchor-icon />
        </a>
        {{ $t("product.yamanokuCli") }}
      </h4>
      <p>{{ $t("product.description.yamanokuCli") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="https://www.npmjs.com/package/yamanoku">
            {{ $t("product.yamanokuCli") }}
            <npm-icon />
          </a>
        </li>
      </ul>
      <h5>{{$t("heading.techStack")}}</h5>
      <ul role="list">
        <li role="listitem">React.js</li>
        <li role="listitem">ink</li>
        <li role="listitem">prettier</li>
      </ul>
    </article>
    <article id="slack_reaction_primoji">
      <h4>
        <a class="anchor" aria-hidden="true" href="#slack_reaction_primoji">
          <anchor-icon />
        </a>
        {{ $t("product.slackprimoji") }}
      </h4>
      <p>{{ $t("product.description.slackprimoji") }}</p>
      <ul role="list">
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
      </ul>
    </article>
    <article id="qiita_code_style_before">
      <h4>
        <a class="anchor" aria-hidden="true" href="#qiita_code_style_before">
          <anchor-icon />
        </a>
        {{ $t("product.qiitaCode") }}
      </h4>
      <p>{{ $t("product.description.qiitaCode") }}</p>
      <ul role="list">
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
        <li role="listitem">
          <a
            href="https://qiita.com/yamanoku/items/da159c2c12aa68f7586f"
            target="_blank"
            rel="noopener"
            lang="ja"
          >
            Qiita記事のコードスタイル部分を以前のやつに戻すChrome Extension作った
            <article-icon />
          </a>
        </li>
      </ul>
    </article>
    <article id="crowding">
      <h4>
        <a class="anchor" aria-hidden="true" href="#crowding">
          <anchor-icon />
        </a>
        {{ $t("product.crowding") }}
      </h4>
      <h5 id="birthday_countdown_js">
        <a class="anchor" aria-hidden="true" href="#birthday_countdown_js">
          <anchor-icon />
        </a>
        {{ $t("product.birthdayCount") }}
      </h5>
      <p>{{ $t("product.description.birthdayCount") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="/birthday-countdown-js">
            {{ $t("product.birthdayCount") }}
            <product-icon />
          </a>
        </li>
        <li>
          <a href="https://github.com/yamanoku/birthday-countdown-js/releases">
            {{ $t("product.releaseInfo") }}
            <github-icon />
          </a>
        </li>
      </ul>
      <h5 id="glitch_range">
        <a class="anchor" aria-hidden="true" href="#glitch_range">
          <anchor-icon />
        </a>
        {{ $t("product.glitch") }}
      </h5>
      <p>{{ $t("product.description.glitch") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="/glitchrange">
            {{ $t("product.glitch") }}
            <product-icon />
          </a>
        </li>
      </ul>
      <h5 id="canvas_browser_crash_js">
        <a class="anchor" aria-hidden="true" href="#canvas_browser_crash_js">
          <anchor-icon />
        </a>
        {{ $t("product.browserCrash") }}
      </h5>
      <p>{{ $t("product.description.browserCrash") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="/canvas_browser-crash.js">
            {{ $t("product.browserCrash") }}
            <product-icon />
          </a>
        </li>
      </ul>
      <h5 id="rolling_sushi">
        <a class="anchor" aria-hidden="true" href="#rolling_sushi">
          <anchor-icon />
        </a>
        {{ $t("product.sushi") }}
      </h5>
      <p>{{ $t("product.description.sushi") }}</p>
      <ul role="list">
        <li role="listitem">
          <a href="/rolling-sushi">
            {{ $t("product.sushi") }}
            <product-icon />
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
  },
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
