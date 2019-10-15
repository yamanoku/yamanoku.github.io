<template>
  <section id="section:vuejs-and-web-accessibility">
    <h2>Vue.jsにおけるwebアクセシビリティ対応</h2>
    <p>続いてこの節ではVue.js開発においてどのようなwebアクセシビリティ対応ができるかを紹介します。</p>
    <h3>
      何でも
      <code>div</code>で実装しない
    </h3>
    <p>
      webアクセシビリティをつくるには、
      <strong>セマンティクスな実装を心がける</strong>、というのが基本です。これは
      <code>div</code>タグ（または
      <code>span</code>タグ）自体が悪いのではなく、情報設計に基づいた必要に応じたタグを使うべきということです。
    </p>
    <p>
      たとえばボタンを実装するとき、
      <code>div</code>タグから実装するとしたら様々な考慮が必要となります。
    </p>
    <highlight-code lang="html">{{buttonMarkupBefore}}</highlight-code>
    <p>
      これがセマンティクスな実装をすれば
      <code>button</code>タグ１つで済みます。セマンティクスにしないことで本来もつ機能を損なってしまいます。
    </p>
    <highlight-code lang="html">{{buttonMarkupAfter}}</highlight-code>
    <h3>キーボードで操作できるようにする</h3>
    <p>スクリーンリーダーを利用する人はキーボードを使って情報にアクセスします。なのでキーボードであらゆる情報へアクセスできるかを意識する必要はあります。</p>
    <p>また、スクリーンリーダーを使用しなくとも、パソコンの操作に慣れてきた人であれば、フォームの送信でエンターキーを押したり、ダイアログを閉じる際にESCキーを押したり、マウス操作ではなくキーボード操作で行うことがあると思います。</p>
    <p>キーボード操作の考慮に併せて、フォーカスのためのアウトラインも意識する必要があります。アウトラインを除去することで現在位置を把握しづらくなってしまうためです。</p>
    <h3>SPA開発</h3>
    <p>
      モダンなフロントエンド開発において、SPA
      <abbr>（Single Page Application）</abbr>での実装は増えてきています。SPAは1つのHTMLとJavaScriptを使用した動的なコンテンツとして扱うため、ページ内で何がどう変わったのかを判定できないことがあります。
    </p>
    <p>
      ページの変更や状態の更新ではaria-live属性を使用した実装が必要となります。ただし属性値の扱いを理解する必要があるため、はじめは
      <a
        href="https://github.com/vue-a11y/vue-announcer"
        target="_blank"
        rel="noopener"
      >vue-announcer</a>というライブラリを利用してみても良いかも知れません。routerでのページ移動の読み上げや、コンポーネント内での状態変化の読み上げも簡単に設定できるようになります。
    </p>
    <h3>Nuxt.jsの設定</h3>
    <p>
      盲点な部分かもしれませんが、
      <code>nuxt.config.js</code>での
      <code>htmlAttrs</code>で言語設定は必要です。
    </p>
    <highlight-code lang="js">{{nuxtJS}}</highlight-code>
    <p>
      何も設定されていない場合、言語指定は
      <code>en</code>、つまり英語になっています。このままだとアプリケーションやサイトの見た目が日本語だとしても、ブラウザの判定では「英語の」アプリケーションやサイトとなってしまいます。
    </p>
    <p>
      未設定だとスクリーンリーダーによっては英語以外の部分を読み上げてくれない事態が起きます。
      <small>（これはAndroidのTalkback機能にて確認できました）。</small>国際化対応をしていなくとも言語設定は気をつけなければなりません。
    </p>
    <h3>テスト・チェック</h3>
    <h4>vue-axe</h4>
    <p>axe-coreというdeque systemsという会社が開発しているアクセシビリティチェックをするライブラリがあります。これはChromeのLighthouseのアクセシビリティ項目チェックでも使用されているものです。</p>
    <figure>
      <img src="~/assets/img/vuefesjapan2019-vueaxe.png" height="96" alt />
    </figure>
    <p>こちらは組み込むことでコンソール上でアクセシビリティチェックを通してくれます。</p>
    <h4>Storybook</h4>
    <p>自社のコンポーネントライブラリ、デザインシステムで利用されている方もいるかもしれません。こちらは単体ではチェックできませんが、アドオンに「storybook-addon-a11y」があり、これを使うことでコンポーネントやストーリーに対してアクセシビリティチェックを通すことが出来ます。</p>
    <figure>
      <img
        src="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"
        height="360"
        alt="storybook-addon-a11y スクリーンショット"
      />
    </figure>
    <h4>eslint-plugin-vue-a11y</h4>
    <p>JavaScriptの静的検証ツールとして使われるeslintにはプラグインでアクセシビリティチェックができるものもあります。CI/CDに組み込むことでビルド時にエラーを発見することも可能です。</p>
    <p>
      チェック内容の例を上げると、
      <code>img</code>の
      <code>alt</code>属性に値が入っているか、フォーム要素にはラベル（
      <code>label</code>）が付与されているか、絵文字をアクセシブルに実装できているか、などがあります。
    </p>
    <highlight-code lang="html">{{eslintEmoji}}</highlight-code>
    <p>ただしLintはあくまでコード規約をチェックするものなので、エラー判定のみに頼りきらないようにしましょう。</p>
    <h4>ユーザテスト</h4>
    <p>機械的なテストについて紹介しましたが、自動化によるチェックやテストではすべてのアクセシビリティの問題のうちたった30%しか確認できないという研究結果が出ています。</p>
    <a
      href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
      target="_blank"
      rel="noopener"
    >What we found when we tested tools on the world’s least-accessible webpage - Accessibility in government</a>
    <p>そのため、ユーザテストを通したチェックも必要となります。ブラウザチェックやスクリーンリーダーテスト、キーボードテストといった実際に見てみる、触ってみるのを試した上で問題ないかをテストしていきます。</p>
    <p>
      どういったテストをすべきかは、WCAG
      <abbr>（Web Content Accessibility Guidelines）</abbr>を参考にしましょう。これはW3C勧告として公開されたwebコンテンツをアクセシブルにするためのガイドラインで、どうすることでアクセシブルになるか、技術に依存しない検証方法も提示されています。
    </p>
    <a
      href="https://waic.jp/docs/WCAG21/"
      target="_blank"
      rel="noopener"
    >Web Content Accessibility Guidelines (WCAG) 2.1</a>
    <p>しかし毎回WCAGの仕様を参照しにいくことも大変なので、必要な要素を参考にした上で独自のガイドラインを作成できると良さそうです。</p>
    <a
      href="https://openameba.github.io/a11y-guidelines/"
      target="_blank"
      rel="noopener"
    >Ameba Accessibility Guidelines</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttonMarkupBefore: `
        <template>
          <div role="button" tabindex="0" @click="handleClick" @keyup="handleKeyUp">button</div>
        </template>
      `,
      buttonMarkupAfter: `
        <template>
          <button type="button">button</button>
        </template>
      `,
      nuxtJS: `
        module.exports = {
            head: {
              htmlAttrs: {
                lang: 'ja'
              }
            }
        }
      `,
      eslintEmoji: `
        <!-- Fail -->
        <span>🐼</span>
        <!-- Good -->
        <span role="img" aria-label="Panda">🐼</span>
      `
    };
  }
};
</script>

<style>
code:not(.hljs) {
  line-height: 1;
}
</style>
