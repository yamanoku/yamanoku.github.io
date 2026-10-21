---
theme: apple-basic
layout: intro
title: Vue SFCから見直す正しいHTMLの守り方
mdc: true
fonts:
  sans: Roboto, Noto Sans JP
seoMeta:
  ogDescription: yamanokuのVue Fes Japan 2026登壇資料
  ogImage: https://records.yamanoku.net/vuefes-japan-2026/images/ogp-image-ja.png
  twitterCard: summary_large_image
routerMode: hash
htmlAttrs:
  lang: ja
duration: 30min
---

<h1 mt="24">Vue SFCから見直す<br>正しいHTMLの守り方</h1>

<div mt="5">
Vue Fes Japan 2026 | <time datetime="2026-10-24">2026-10-24</time>
</div>

<div mt="6">

<!-- [ドキュメントページ版（日本語）](https://records.yamanoku.net/vuefes-japan-2026/ja/) | [Document Page Version（English）](https://records.yamanoku.net/vuefes-japan-2026/en/) -->

</div>

<div class="absolute bottom-10">
  <span class="text-6 font-700">
    やまのく（yamanoku）
  </span>
</div>

---

## 発表者：やまのく

<img src="./images/yamanoku.png" alt="yamanoku" width="200" class="blcok mb-8">

- 一児の父、会社員（～2026/10）
- Vue Fes Japan 2026 コアスタッフ
- HTML Night in Tokyo、HTML Day 2026 in 東葛 主催

---
layout: center
---

![](./images/vuefes-japan-speakers.png)

---
layout: center
---

![](./images/vuefes-japan-speakers-yamanoku.png)

---
layout: center
---

<h1 class="html">HTML</h1>

---

## HTMLの登場から35年

- 1991年に世の中に登場し、文書のためのマークアップとして広がった
- 装飾性のあるものやWebアプリのUIとして活用されるまで進化
- マークダウンよりも表現力高く扱うことができるためAIの出力に活用
- 仕様はLiving Standardとして今も更新され続けている

---

<img src="./images/history-of-html.png" alt="" width="720">

<small><a href="https://www.dropbox.com/scl/fi/4al6p7za54z9k3zidqps7/HTML.paper?rlkey=mo5qbfgq60pct57l743jqtksa&dl=0" target="_blank">HTMLという地層の堆積</a> / yuhei</small>

<!--
初期は見出し・段落・リンクなど文書構造を表す言語でした。中期にはフォームやインタラクションが増え、現在はSPA / SSR / デザインシステムでも最終出力がHTMLであることが多いです。Vueでtemplateを書いていても、ブラウザが受け取る最終成果物はHTMLです。だから仕様の理解は、フレームワーク以前の共通基盤になります。
-->

---

## VueでもDSLとして活用されている

```vue
<script setup>
  import { ref } from "vue";
  const count = ref(2026);
  const addYear = () => {
    count.value++;
  };
</script>

<template>
  <h1>Vue Fes Japan {{count}} へようこそ！</h1>
  <button type="button" class="btn" @click="addYear">+1</button>
</template>
```

---

# アジェンダ

1. HTMLの正しさとは何か
2. VueでHTMLはどのように使われているのか
3. HTMLの正しさを静的解析で守る

---
layout: section
---

# 「正しいHTML」とは何か？

---
layout: center
---

<div class="markup-sample"><mark>「日本最大級のフロントエンドカンファレンス Vue Fes Japan」</mark><br>をマークアップ</div>

<v-clicks>

- 紹介文として段落にしたい
- 「日本最大級のフロントエンドカンファレンス」を強調
- 「日本最大級の」を一番強く強調したい

</v-clicks>

---
layout: center
---

```html
<p>
  <em><strong>日本最大級の</strong>フロントエンドカンファレンス</em> Vue Fes Japan
</p>
```

<v-click>

![](./images/example-html-parse-ok.png)

</v-click>

<v-click>

```html
<p>
  <em>
    <strong>日本最大級の</strong>
    フロントエンドカンファレンス
  </em>
  Vue Fes Japan
</p>
```

</v-click>

---
layout: center
---

```html
<p>
  <em><strong>日本最大級の</em>フロントエンドカンファレンス</strong> Vue Fes Japan
</p>
```

<v-click>

![](./images/example-html-parse-error.png)

</v-click>

<v-click>

```html
<p>
  <em>
    <strong>日本最大級の</strong>
  </em>
  <strong>フロントエンドカンファレンス</strong>
  Vue Fes Japan
</p>
```

</v-click>

---

## ブラウザは誤りを「直す」

- HTML構文はエラーとなってもブラウザ側は自己解釈してパースする
- 仕様は「表示できる＝適合」とはせず、誤りを整理している
- 構造・スタイル・SSR・アクセシビリティで問題が起こる可能性がある

---

## HTMLには「ルール」がある

- マークアップ自体には唯一の正解というものはない
- 代わりにHTMLでは守らなければならない「ルール」は存在する
  - 正しくパースさせる、もその１つ
- このルールを徹底できていることを「HTMLの正しさ」と定義する

---

## HTMLが正しいことのメリット

- 堅牢で保守的なコードで書ける
- 人やユーザーエージェント双方が扱える
- アクセシビリティを守れる
- ハイドレーションミスマッチを事前に防ぐ

---

## 正しさの3つのルール

1. **字句的ルール**
2. **語彙的ルール**
3. **意味論的ルール**

---

## 字句的ルール

```html
<!-- NG: 終了タグが対応していない / 属性値の書き方が崩れている -->
<div>
  <p>テキスト
</div>
```
<hr class="mt-8 mb-8" />

- 開始タグと終了タグの対応、属性の書き方
- 違反するとパーサがエラーを出し、DOMツリーが正しく作れない


<small> WHATWG: [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors) </small>

---

## 語彙的ルール

```html
<!-- NG: p の中にブロック要素は置けない -->
<p>
  <div>block</div>
</p>
```

<hr class="mt-8 mb-8" />

- **コンテンツモデル（content model）**
- どの要素の中に何を置けるかの中核的なルール
- 違反してもパーサは止まらず、望ましくないDOMになる


<small>

WHATWG: [Restrictions on content models and on attribute values](https://html.spec.whatwg.org/dev/introduction.html#restrictions-on-content-models-and-on-attribute-values)

</small>

---


## コンテンツモデル

<ContentVenn />

---

## 違反する内容モデル例

| 親 | 子要素 | なぜNGなのか |
| --- | --- | --- |
| `p` | `div`, `p`, `ul` | 段落の中にブロックを入れられない |
| `label` | `div`, `p` | ラベルの内容モデル外 |
| `a` | `a` | リンクの入れ子は不可 |
| `ul` / `ol` | `div` | 基本的に `li` |

<!--
もうひとつ、ul や ol の直接の子に div を置く例です。子は基本的に li です。Vueのネスト警告やLinterが効いてくるのも、主にこの語彙的ルールです。「見た目は同じでも、DOMの意味が違う」を意識してほしいです。
-->

---

## 意味論的ルール

```html
<!-- NG: 見た目のためだけに見出しを使う -->
<h1 class="title-like">ただ大きい文字にしたいだけ</h1>

<!-- NG: ボタンを a で作る -->
<a href="#" onclick="submitForm()">送信</a>
```

<hr class="mt-8 mb-8" />

- 「セマンティクス」と呼ばれている部分
- 本来要素がもつ用途とは異なる使い方をしている場合は違反
- アクセシビリティの担保に必要

<!--
意味論的ルールは、要素の意味と使い方、アクセシビリティです。文法として正しくても伝わる意味が違うことがあります。見た目のためだけに h1 を使う、ボタンを a で作る、意味のある画像に alt がない、などです。ツールだけでは完全には検出できず、レビューと経験が必要です。意味論は、HTMLの強みであるアクセシビリティに直結します。
-->

---
layout: section
---

# 2. VueでHTMLはどのように<br>使われているのか

<!--
ここからは、VueがこのHTMLをどう扱い、どこまで保証するのかを見ていきます。約10分。第1部の字句 / 語彙 / 意味論を前提に、要点重視で進めます。
-->

---

## VueでもDSLとして活用されている（再掲）

```vue
<script setup>
  import { ref } from "vue";
  const count = ref(2026);
  const addYear = () => {
    count.value++;
  };
</script>

<template>
  <h1>Vue Fes Japan {{count}} へようこそ！</h1>
  <button type="button" class="btn" @click="addYear">+1</button>
</template>
```

---

## コンパイルの三段階

1. **Parse**
    - void要素・名前空間・実体参照など、HTML寄りの字句ルールでASTを作る
1. **Transform**
    - Vueディレクティブや最適化をASTに適用する
1. **Generate**
    - 最終的にJavaScriptに変換する

<v-click>

<div mt="10">Parse時点で壊れているHTMLの書き方を検知してエラーを出す（字句的ルール）</div>

</v-click>

---
layout: center
---

# Q. `<div />` はパース可能か

---

## A. パース可能

- Vueでは`<div></div>`として解釈される
  - `<div v-text="Vue Fes Japan" />`は
  - `<div>Vue Fes Japan</div>`とレンダリングされる
  - `<div />Vue Fes Japan` は `<div></div>Vue Fes Japan` となる
- Custom Elements、Vueコンポーネントも自己完結タグが可能
- ASTに含まれる`isSelfClosing`の有無で判定している


<v-click>
  <div mt="12">
    <p text="8" font="bold">ただしHTMLの仕様として<code>&lt;div /&gt;</code>は有効ではない</p>
  </div>
</v-click>

---

## 自己完結タグにまつわる余談

- Prettierのフォーマットでは必ず閉じタグが付くようになっている
- Biomeはオプションで変えられるようにしている
  - `--html-formatter-self-close-void-elements=<always|never>`
- SvelteはRich Harris氏が見直してマイグレーションツールが作成される
  - `npx svelte-migrate self-closing-tags`

---

## コンテンツモデルは警告してくれる

<img src="./images/vue-nesting-warning.png" alt="Vueのテンプレートで p の中に h1 や li を置いたときに、HTML仕様上のネスト違反として警告が出ているエディタ画面" width="720">

- `compiler-dom` の `validateHtmlNesting` (Vue 3.4)
- **開発時の警告**で、厳密にはコンパイルエラーではない
  - SSRにおけるハイドレーションミスマッチを防ぐ意図

<!--
では、Vueは何もしないのかというと、そうではありません。Vue 3.4以降、compiler-dom の validateHtmlNesting により、不正なネストが開発時に警告されます。「p の子に h1 は置けません。HTML仕様に従っています。ハイドレーションエラーや将来の機能への影響を引き起こす可能性があります。」これは onWarn による開発時の警告であり、明確なコンパイルエラーではありません。
実際のエディタではこのように警告が出ます。ありがたいDXですが、警告を無視すればそのまま動いてしまいます。
-->

---

## Vueコンパイラが見る範囲

| ルール | Vueコンパイラの対応 |
| --- | --- |
| 字句的 | 〇 |
| 語彙的 | △（開発時の警告のみ） |
| 意味論的 | ✕ |

<v-click>
  <div mt="12">
    <p text="8" font="bold">語彙的・意味論的なルールは静的解析でチェックする</p>
  </div>
</v-click>

---
layout: section
---

# 3. HTMLの正しさを<br>静的解析で守る

---

## なぜ静的解析が必要なのか


<v-click>

決定論としての判断をAIエージェントに与えられるようにするため

</v-click>

<v-click>

- AIのみの判定は非決定論的
  - 賢くてもモデル依存となり確実性は薄い
- 構造的に正しいか、型安全か、内部で矛盾していないかを解析させる
- 解析するまでのスピードも兼ねていると尚よい

</v-click>

---

## ESLint - eslint-plugin-vue

- [`vue/no-parsing-error`](https://eslint.vuejs.org/rules/no-parsing-error.html) で`<template>` 内の構文エラーを報告できる
  - WHATWG HTMLの**字句的**な構文エラーを多く検知できる
  - ただし自己完結タグに関するチェックのみはデフォルトで無効になっている
- 語彙的ルールを守れるものは確認できず
- [`vue/html-button-has-type`](https://eslint.vuejs.org/rules/html-button-has-type.html) が意味論的に扱える

---

## ESLint - eslint-plugin-vuejs-accessibility

- 「アクセシビリティ」という形から意味論を守る
- [`form-control-has-label`](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/rules/form-control-has-label.html)ではラベルと入力側のコンポーネントを指定できる

```json
{
  "rules": {
    "vuejs-accessibility/form-control-has-label": [
      "error",
      {
        "labelComponents": ["CustomLabel"],
        "controlComponents": ["CustomInput"]
      }
    ]
  }
}
```

---

## ESLint - html-eslint

- HTMLのLintを行うeslint
- React, Svelte, Angularのサポートあり
- ただしVueは未対応

---

## Biome

- リンター・フォーマッターがまとまったオールインツール
  - さまざまな言語やライブラリに対応しており、Vueでも使用可能
- [`noDuplicateAttributes`](https://biomejs.dev/linter/rules/no-duplicate-attributes/) で重複属性を止められる
- [`noObsoleteTags`](https://biomejs.dev/linter/rules/no-obsolete-tags/) や [`noMisplacedListElements`](https://biomejs.dev/linter/rules/no-misplaced-list-elements/) など、HTML寄りのルールが増えつつある
- [`useSemanticElements`](https://biomejs.dev/linter/rules/use-semantic-elements/) など意味論寄りの支援もできる

---

## Oxc

- **OxLint**: Linterツール。Vueは固有のルールチェックが主
- 現時点では`<template>`の内部をチェックする機構はない
- [RFC: Embedded Framework Support for Oxlint (Language Plugins)](https://github.com/oxc-project/oxc/discussions/21936)
  - このRFCが進めば対応されそう？

---

## Markuplint

- HTML Living Standard ベースの**適合性検証**ができる
- `@markuplint/vue-parser` / `@markuplint/vue-spec` で `.vue` を扱える
- HTMLの正しさを幅広くチェックできる

---

## Markuplint - parse-error

HTML Living Standardにおけるトークナイズやツリー構築時の非致命的なパースエラーを検知

```json
{
  "severity": {
    "parseError": {
      "duplicate-attribute": "error",
      "nested-comment": "warning"
    }
  }
}
```

---

## Markuplint - `permitted-contents`

コンテンツモデルを仕様データから検証できる

```html
<!-- incorrect -->
<ul>
  <div>Not allowed DIV element</div>
</ul>

<!-- correct -->
<ul>
  <li>List item</li>
  <li>List item</li>
</ul>
```

---

## Markuplint - 意味論のチェック

```html
<!-- incorrect -->
<div>
  •Apple<br />
  •Banana
</div>

<!-- correct -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

<small>

https://markuplint.dev/docs/rules/no-pseudo-list

</small>

---

## Markuplint - 意味論のチェック

```html
<!-- inncorrect -->
<p>
  A...<br />
  <br />
  B...
</p>

<!-- correct -->
<p>A...</p>
<p>B...</p>
```

<small>

https://markuplint.dev/ja/docs/rules/no-consecutive-br

</small>

---

## Markuplint - 意味論のチェック

```html
<!-- inncorrect -->
<h1>見出し1</h1>
<h3>見出し3</h3>
<h2>見出し2</h2>

<!-- correct -->
<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
```

<small>

https://markuplint.dev/ja/docs/rules/no-skipped-heading-level

</small>

---

## Markuplint - Pretenders

- コンポーネントを描画結果の**HTML要素に見立てるオプション**
  - `FileList` → `ul`、`FileListItem` → `li` のように内容モデルを評価できる
- v5からexpermentalで自動スキャンも設定可能

```json
{
  "pretenders": {
    "scan": [
      {
        "files": "./src/components/**/*.vue",
      }
    ]
  }
}
```

---

## Vize

- ubugeeeiさん作・RustによるVueのオールツールチェイン
- HTML適合性を Vue固有ルール / アクセシビリティから分離して扱える
  - Vue: https://vizejs.dev/rules/vue/index.html
  - HTML: https://vizejs.dev/rules/html/index.html
  - a11y: https://vizejs.dev/rules/accessibility/index.html

---

## Vize - クロスコンポーネントネスト検査

- `html/cross-component-nesting`で、合成後に初めて不正になるネストの検知が可能
  - `vize lint --cross-file`でファイル横断チェックができる

```vue
<!-- App.vue -->
<template>
  <p>Summary <InfoCard /></p>
</template>

<!-- InfoCard.vue -->
<template>
  <div class="card"><slot /></div>
</template>
```

---

## Vize - templateSyntax

- コンパイラ側は自己完結タグがある場合に警告するようにしている
  - モードの切り替えでエラーとしたり無視することもできる

```js
import vize from "@vizejs/vite-plugin";

export default {
  plugins: [
    vize({
      templateSyntax: "standard",
    }),
  ],
};
```

---

## まとめ：Vueで正しいHTMLと向き合うために

1. HTMLの正しさを保つためのルールを把握する
1. Vueコンパイラの守備範囲を理解する
1. 静的解析でHTMLの正しさを保障する

<!-- 

---

## 参考文献

- [HTML Standard](https://html.spec.whatwg.org/)
- [WHATWG: Non-conforming features](https://html.spec.whatwg.org/#non-conforming-features)
- [Vue: validateHtmlNesting](https://github.com/vuejs/core/blob/main/packages/compiler-dom/src/transforms/validateHtmlNesting.ts)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [Markuplint](https://markuplint.dev/)
- [Vize HTML Rules](https://vizejs.dev/rules/html/index.html)
- [Oxlint & Oxfmt Compatibility | The JavaScript Oxidation Compiler](https://oxc.rs/compatibility)
- [Vue JSX](https://vuejsx.dev/)
- [eslint-plugin-validate-jsx-nesting](https://github.com/MananTank/eslint-plugin-validate-jsx-nesting)
- [弁護士ドットコム 新卒研修2025 HTML/CSS（太田良典）](https://speakerdeck.com/bengo4com/20250405-bengo4com-htmlcss) 

-->
