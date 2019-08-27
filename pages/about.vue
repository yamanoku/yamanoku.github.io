<template>
  <main>
    <h2>yamanoku.netについて</h2>
    <article>
      <p>yamanoku.netは、yamanokuこと大山奥人のポータルサイトです。</p>
      <h3 id="coding">
        <a class="anchor" aria-hidden="true" href="#coding">
          <anchor-icon />
        </a>
        ページ実装の解説
      </h3>
      <h4 id="tech-stack">
        <a class="anchor" aria-hidden="true" href="#tech-stack">
          <anchor-icon />
        </a>
        {{$t("heading.techStack")}}
      </h4>
      <ul role="list">
        <li role="listitem">
          Nuxt.js
          <ul role="list">
            <li role="listitem">@nuxtjs/pwa</li>
            <li role="listitem">@nuxtjs/google-gtag</li>
            <li role="listitem">@nuxtjs/axios</li>
            <li role="listitem">nuxt-i18n</li>
            <li role="listitem">eslint-plugin-vue</li>
            <li role="listitem">eslint-plugin-vue-a11y</li>
          </ul>
        </li>
        <li role="listitem">Vuex （Store）</li>
        <li role="listitem">modern-normalize</li>
        <li role="listitem">Google Fonts</li>
      </ul>
      <h4 id="markup">
        <a class="anchor" aria-hidden="true" href="#markup">
          <anchor-icon />
        </a>
        マークアップ
      </h4>
      <p>ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップ実装しています。</p>
      <p>支援技術を使用する人には不要となる要素について、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して閲覧を阻害しないようにする実装も行っています。</p>
      <highlight-code id="wai-aria-in-html" lang="html">{{waiAria}}</highlight-code>
      <h4 id="component-oriented">
        <a class="anchor" aria-hidden="true" href="#component-oriented">
          <anchor-icon />
        </a>
        コンポーネント指向設計
      </h4>
      <p>
        たとえば
        <nuxt-link
          :to="localePath({ name: 'index', hash: '#slides'})"
        >{{$t("heading.slides.title")}}</nuxt-link>のリストでは以下コンポーネントを使ってレンダリングしています。
      </p>
      <highlight-code id="slide-components" lang="vue">{{slide}}</highlight-code>
      <ul role="list">
        <li role="listitem">
          <a href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/slides/SlideList.vue" target="_blank" rel="noopener">
            yamanoku.github.io/SlideList.vue
            <github-icon />
          </a>
        </li>
      </ul>
      <p>得るためのAPIの整形は必要ですが、1つのコンポーネントで管理することで、ソースコードの簡略化・複数での使い回しや情報設計の効率化を図ることができます。</p>
      <p>その他、コンポーネント指向開発でPropsが深くなってしまわないように、Storeから各APIを呼び出すように設定しています。</p>
      <highlight-code id="api-for-store" lang="javascript">{{api}}</highlight-code>
      <ul role="list">
        <li role="listitem">
          <a href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/products/A11yBeginner.vue" target="_blank" rel="noopener">
            yamanoku.github.io/A11yBeginner.vue
            <github-icon />
          </a>
        </li>
      </ul>
      <h4 id="pwa">
        <a class="anchor" aria-hidden="true" href="#pwa">
          <anchor-icon />
        </a>
        PWA (Progressive Web Application)
      </h4>
      <p>Google Chromeで閲覧している場合、PCからはデスクトップPWA、モバイル端末からはPWAとして利用することができます。</p>
      <p>ブラウザを通さずにネイティブアプリとして起動できたり、キャッシュを活用した早いページ体験、1度ダウンロードするとオフラインで閲覧することもできます。</p>
      <ul>
        <li>
          <a href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/" target="_blank" rel="noopener">
            Your First Progressive Web App  |  Web Fundamentals  |  Google Developers
          </a>
        </li>
      </ul>
      <h4 id="i18n">
        <a class="anchor" aria-hidden="true" href="#i18n">
          <anchor-icon />
        </a>
        国際化対応
      </h4>
      <p>Nuxt.jsで開発しているのでnuxt-18nというツールを入れています。国際化対応ほか、特定の言語のみに表示する場合などのレンダリング処理も可能となっています。</p>
      <p>日本語と英語を標準で対応しておりますが、その他の言語対応もしていこうと思っています。</p>
      <ul role="list">
        <li role="listitem" v-for="locale in $i18n.locales" :key="locale.code">
          <nuxt-link :lang="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
      <h3 id="design">
        <a class="anchor" aria-hidden="true" href="#design">
          <anchor-icon />
        </a>
        ページデザインの解説
      </h3>
      <p>あらゆる層の方が見やすいようにインクルーシブデザインを取り入れています。</p>
      <h4>オーバーデザインしすぎない</h4>
      <p>過剰な装飾をしすぎることは目的の情報にたどり着く阻害に成り得ます。ブラウザのデフォルトスタイル、つまり標準の姿を意識したデザインにしています。</p>
      <p>また、セマンティクスなマークアップで設計していることで、スタイルを外してもデフォルトスタイルのままでも違和感なく情報にたどり着けるようにも繋がります。</p>
      <ul role="list">
        <li role="listitem">
          <a href="//motherfuckingwebsite.com/" target="_blank" rel="noopener">
            This is a motherfucking website.
          </a>
        </li>
      </ul>
      <h4 id="font-family">
        <a class="anchor" aria-hidden="true" href="#font-size">
          <anchor-icon />
        </a>
        日本語フォントについて
      </h4>
      <p>UDフォントである<a href="https://minmoji.ucda.jp/pages/webfont/" target="_blank" rel="noopener">みんなの文字&reg;WEBフォント</a>を使用しています。</p>
      <h4 id="font-size">
        <a class="anchor" aria-hidden="true" href="#font-size">
          <anchor-icon />
        </a>
        文字サイズ
      </h4>
      <p>基本16pxになるように設定しており、ページを拡大してもサイズ比を維持したremで指定しています。</p>
      <h4 id="color-contrast">
        <a class="anchor" aria-hidden="true" href="#color-contrast">
          <anchor-icon />
        </a>
        カラーコントラスト
      </h4>
      <p>使用しているカラーはいずれも、背景とのコントラスト比が最低でも4.5:1となるように設定されていますが、純粋な白黒ではなく、濃淡を抑えてバランスをとったカラーとなっています。</p>
      <p>共通で使用できるよう、以下カスタム・プロパティ（CSS変数）を使用して指定しています。</p>
      <dl>
        <div v-for="color in colors" :key="color.name" :style="'background-color:' + color.value">
          <dt :style="(color.name === 'var(--black)' || color.name === 'var(--linkBlue)' ? 'color: #fff': '')">{{color.name}}</dt>
          <dd :style="(color.name === 'var(--black)' || color.name === 'var(--linkBlue)' ? 'color: #fff': '')">{{color.value}}</dd>
        </div>
      </dl>
      <p>また、OSの設定によりますが、ダークモード（目に優しい暗い色調）にも対応しています。</p>
      <h4 id="max-width">
        <a class="anchor" aria-hidden="true" href="#max-width">
          <anchor-icon />
        </a>
        最大幅について
      </h4>
      <p>メインコンテンツの最大幅は80chに設定しています。chはチェーンと呼ばれ、文字のサイズによって可変する単位です。</p>
      <p>この設定にすることのメリットとして、長文が読めない読字障害の利用者のサポートができたり、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなります。</p>
      <h4 id="vertical-rhythm">
        <a class="anchor" aria-hidden="true" href="#vertical-rhythm">
          <anchor-icon />
        </a>
        バーティカルリズム
      </h4>
      <p>ページ全体の一貫性を重視したバーティカルリズムを採用しています。24pxの行間を基準としてマージンや余白などを設定しています。</p>
      <p>認知障害がある利用者は、単語と単語の間隔が均一になっていると、テキストをより容易に読めるようになります。</p>
      <nuxt-link :to="localePath({ name: 'index'})">トップに戻る</nuxt-link>
    </article>
  </main>
</template>

<script>
import SlideList from "~/components/slides/SlideList.vue";
export default {
  components: {
    SlideList
  },
  data() {
    return {
      colors: [
        {
          name: "var(--black)",
          value: "rgb(21, 32, 43)"
        },
        {
          name: "var(--white)",
          value: "rgb(210, 210, 210)"
        },
        {
          name: "var(--gray)",
          value: "rgba(70, 70, 70, 0.5)"
        },
        {
          name: "var(--blue)",
          value: "rgb(90, 190, 255)"
        },
        {
          name: "var(--purple)",
          value: "rgb(220, 100, 220)"
        },
        {
          name: "var(--linkBlue)",
          value: "rgb(18, 122, 200)"
        },
        {
          name: "var(--linkVisited)",
          value: "rgba(70, 70, 70, 0.5)"
        }
      ],
      waiAria: `
<h4 id="markup">
  <a class="anchor" aria-hidden="true" href="#markup"> <!-- Not ignored in the accessibility tree -->
    <anchor-icon />
  </a>
  Markup
</h4>
      `,
      slide: `
<ul role="list">
  <li role="listitem" v-for="list in listItem" :key="list.title">
    <template v-if="list.datetime">
      <time :datetime="list.datetime">
        {{dateReplace(list.datetime)}}
      </time>
      -
    </template>
    <template v-if="list.created_at">
      <time :datetime="list.created_at">
        {{dateCreated(list.created_at)}}
      </time>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{list.title}}
    </a>
  </li>
</ul>
      `,
      api: `
export default {
  data() {
    return {
      a11ybookIssue: this.$store.state.github.a11y_issues,
    };
  }
};
      `
    };
  }
};
</script>

<style scoped>
dl {
  padding: var(--rhythm);
  margin: 0 calc(-1 * var(--rhythm));
  line-height: var(--rhythm);
  color: var(--black);
  display: grid;
  background-color: #fff;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 768px) {
  dl {
    grid-template-columns: repeat(2, 1fr);
  }
}
dl > div {
  padding: calc(var(--rhythm) / 2);
  background-color: #fff;
}
dl dt {
  font-weight: 700;
  font-size: .75rem;
}
dl dd {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: .75rem;
}
</style>
