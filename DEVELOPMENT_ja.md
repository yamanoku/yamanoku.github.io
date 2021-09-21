# ポートフォリオサイトの実装にまつわる解説

## 利用技術
- Nuxt.js
  - @nuxtjs/pwa
  - nuxt-i18n
  - Vuex（Store）
- dayjs
- eslint
  - eslint-plugin-prettier
  - eslint-plugin-vue
  - eslint-plugin-vuejs-accessibility
- highlight.js
- lerna
- markuplint
- modern-normalize

詳細をもっと知るには [package.json](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/package.json) をご覧ください。

## マークアップ
ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップの実装しています。

また、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して、コンテンツの補完をするための実装も行っています。

<details>
<summary>詳細を確認する</summary>

```html
<section id="basic" aria-labelledby="basic-heading">
  <h2 id="basic-heading">{{ $t("heading.basic") }}</h2>
</section>
```
aria-labelledbyとsection要素を紐付けることで記事間を移動するときにユーザを支援します。

- [5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance)
</details>

## コンポーネント指向設計

表示のために得るAPIを整形する必要がありますが、1つのコンポーネントで管理することで、ソースコードの簡略化・複数での使い回しや情報設計の効率化を図ることができます。

<details>
<summary>詳細を確認する</summary>

たとえばスライド一覧のリストでは以下コンポーネントを使ってレンダリングしています。

```html
<ul>
  <li v-for="list in listItem" :key="list.index">
    <template v-if="list.datetime">
      <span class="time">{{ dateStirngReplace(list.datetime) }}</span>
      -
    </template>
    <template v-else-if="list.created_at">
      <span class="time">{{ dateStirngReplace(list.created_at) }}</span>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{ list.title }}
      <open-new-icon />
    </a>
  </li>
</ul>
```

[SlideList.vue](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/SlideList.vue)
</details>

## PWA (Progressive Web Application)
Google Chromeで閲覧している場合、PCからはデスクトップPWA、モバイル端末からはPWAとして利用することができます。

ブラウザを通さずにネイティブアプリとして起動できたり、キャッシュを活用した早いページ体験、1度ダウンロードするとオフラインで閲覧することもできます。

- [Your First Progressive Web App | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

## 国際化対応
Nuxt.jsで開発しているのでnuxt-18nというツールを導入しています。国際化対応ほか、特定の言語のみに表示する場合などのレンダリング処理も可能となっています。

<details>
<summary>詳細を確認する</summary>
以下は日本語ではない場合に表示される条件式です。

```html
<template v-if="this.$i18n.locale !== 'ja'">
  <em>{{ $t("onlyJPText") }}</em>
</template>
```
</details>
