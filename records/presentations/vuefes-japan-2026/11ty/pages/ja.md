---
layout: layout
title: Vue SFCから見直す正しいHTMLの守り方
description: yamanokuのVue Fes Japan 2026登壇資料
lang: ja
---

![スライドタイトル：Vue SFCから見直す正しいHTMLの守り方](../images/title-ja.png)

[日本語ページ](../ja/) / [English page](../en/)

## スライド

[スライド版ページ](https://records.yamanoku.net/vuefes-japan-2026/slide/)

---

## はじめに

みなさま、こんにちは。やまのくと申します。

一児の父で、会社員としてはこの10月まで働いていました。Vue Fes Japan 2026 ではコアスタッフとしても関わっています。あわせて HTML Night in Tokyo や HTML Day 2026 in 東葛の主催もしています。

昨年のVue Fes Japan 2025では[生成AI時代のWebアプリケーションアクセシビリティ改善](https://records.yamanoku.net/vuefes-japan-2025/ja/)という発表をさせていただきました。[Vue Fes Japan Speakers](https://vuefes-japan-speakers.yamanoku.net/)という歴代の登壇者まとめページも個人で運営しており、自分を確認してみると四年間の間にパネルディスカッションも含めて六回も登壇させてもらっていました。改めて登壇の機会をいただけてありがたい限りです。

今回は発表タイトルにもあるように「HTML」を取り扱ったテーマで発表させていただきます。

HTMLは1991年に世の中に登場し、今年で登場から35年になります。文書のためのマークアップとして広がり、装飾性のあるページやWebアプリのUIとして活用されるまで進化してきました。マークダウンよりも表現力高く扱えるため、AIの出力にも使われています。仕様は [HTML Living Standard](https://html.spec.whatwg.org/) として、今も更新され続けています。

<figure>

![HTMLの用途の広がりを地層のように示した図。初期の文書構造から、フォームやインタラクション、SPA / SSR / デザインシステムまで、最終出力がHTMLであることが積み重なっている](../images/history-of-html.png)

<figcaption>出典：<a href="https://www.dropbox.com/scl/fi/4al6p7za54z9k3zidqps7/HTML.paper?rlkey=mo5qbfgq60pct57l743jqtksa&dl=0">HTMLという地層の堆積</a> / yuhei</figcaption>
</figure>

初期は見出し・段落・リンクなど文書構造を表す言語でした。中期にはフォームやインタラクションが増え、現在はSPA / SSR / デザインシステムでも最終出力がHTMLであることが多いです。Vueでtemplateを書いていても、ブラウザが受け取る最終成果物はHTMLです。だから仕様の理解は、フレームワーク以前の共通基盤になります。

そしてVueでも、HTMLはDSLとして活用されています。

```html
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

いきなりですが質問です。皆さんはVueを使った開発をするとき、「HTMLの正しさ」をどのように守れているか・検証できているか、答えられるでしょうか？

今日の私の発表を通じてどのようにHTMLを正しく書いて守っていけるかを知ることができます。今日は以下の三つのテーマに絞って紹介していきます。

1. HTMLの正しさとは何か
2. VueでHTMLはどのように使われているのか
3. HTMLの正しさを静的解析で守る

---

## 「正しいHTML」とは何か？

本題に入る前に、「正しいHTML」とは何かを揃えたいと思います。

たとえば次のような紹介文をマークアップするとします。

> 「日本最大級のフロントエンドカンファレンス Vue Fes Japan」

要件はこうです。紹介文として段落にしたい。「日本最大級のフロントエンドカンファレンス」を強調したい。そのうち「日本最大級の」を一番強く強調したい。

意図どおりに書くと、たとえば次のようになります。

```html
<p>
  <em><strong>日本最大級の</strong>フロントエンドカンファレンス</em> Vue Fes Japan
</p>
```

ブラウザが組み立てるDOMも、意図した入れ子のままです。

<figure>

![正しい入れ子のemとstrongが、意図どおりのDOMツリーとして表示されているブラウザの検証画面](../images/example-html-parse-ok.png)

<figcaption>意図どおりの入れ子は、DOMにもそのまま現れる</figcaption>
</figure>

一方で、閉じタグの対応を誤るとどうなるでしょうか。

```html
<p>
  <em><strong>日本最大級の</em>フロントエンドカンファレンス</strong> Vue Fes Japan
</p>
```

ブラウザはエラーで止まらず、自己解釈してパースします。結果のHTMLは、最初に期待したものとは違う形になり得ます。

<figure>

![閉じタグの対応を誤ったHTMLが、ブラウザ側で補正され、意図と異なるDOMツリーになっている検証画面](../images/example-html-parse-error.png)

<figcaption>誤りがあっても画面は出る。ただしHTMLは意図とずれる</figcaption>
</figure>

HTML構文はエラーとなってもブラウザ側は自己解釈してパースします。仕様は「表示できる＝適合」とはせず、誤りを整理しています。構造・スタイル・SSR・アクセシビリティで問題が起こる可能性があります。

マークアップ自体には唯一の正解というものはありません。代わりにHTMLでは守らなければならない「ルール」は存在します。正しくパースさせるのも、その1つです。このルールを徹底できていることを、本発表では「HTMLの正しさ」と定義します。

HTMLが正しいことには、次のようなメリットがあります。

- 堅牢で保守的なコードで書ける
- 人やユーザーエージェント双方が扱える
- アクセシビリティを守れる
- ハイドレーションミスマッチを事前に防ぐ

具体的な誤りは、次の3つのルールに分類できます。

1. **字句的ルール**
2. **語彙的ルール**
3. **意味論的ルール**

順に見ていきましょう。

### 字句的ルール

開始タグと終了タグの対応、属性の書き方です。違反するとパーサがエラーを出し、DOMツリーが正しく作れません。ただしHTML構文では補正されて「動いて」見えることがあります。

```html
<!-- NG: 終了タグが対応していない / 属性値の書き方が崩れている -->
<div>
  <p>テキスト
</div>
```

WHATWGは、こうした構文をなぜ非適合にするかを [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors) で説明しています。不正な構文が直感に反するDOMを生む、ストリーミングと相性が悪い、著者が仕様を誤解しやすい、といった理由です。仕様が「止める理由」を言語化しているので、後述するチェッカーも機械的に問えるようになります。

### 語彙的ルール

使える要素・属性と、**コンテンツモデル（content model）** による入れ子ルールです。違反してもパーサは止まらず、望ましくないDOMになります。仕様側では [Restrictions on content models and on attribute values](https://html.spec.whatwg.org/dev/introduction.html#restrictions-on-content-models-and-on-attribute-values) として整理されています。タグの対応は合っていても、要素の入れ子が誤っていると静かに壊れたDOMができます。

```html
<!-- NG: p の中にブロック要素は置けない -->
<p>
  <div>block</div>
</p>
```

### コンテンツモデル

内容モデルは「どの要素の中に何を置けるか」を決める語彙的ルールの中核です。仕様では [Kinds of content](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) として、各要素をゼロ以上のカテゴリに分けています。

- Metadata content
- Flow content
- Sectioning content
- Heading content
- Phrasing content
- Embedded content
- Interactive content

Sectioning・Heading・Phrasing・Embedded・Interactive はいずれも Flow の一種です。Metadata はときおり Flow、Interactive はときおり Phrasing、Embedded は Phrasing の一種でもあり、ときおり Interactive でもあります。

たとえば `p` の内容モデルは Phrasing content なので、`div` のような Flow 専用の要素は入れられません。`ul` の子は基本的に `li`、といった入れ子ルールも、このカテゴリと各要素の content model の組み合わせから決まります。

| 親 | 子要素 | なぜNGなのか |
| --- | --- | --- |
| `p` | `div`, `p`, `ul` | 段落の中にブロックを入れられない |
| `label` | `div`, `p` | ラベルの内容モデル外 |
| `a` | `a` | リンクの入れ子は不可 |
| `ul` / `ol` | `div` | 基本的に `li` |

Vueのネスト警告やLinterが効いてくるのも、主にこの語彙的ルールです。「見た目は同じでも、DOMの意味が違う」を意識してほしいです。語彙的ルールを機械的に検証できるのは、仕様がこうしたカテゴリを定義しているからです。

### 意味論的ルール

いわゆる「セマンティクス」と呼ばれている部分です。本来要素がもつ用途とは異なる使い方をしている場合は違反になります。文法として正しくても伝わる意味が違うことがあり、アクセシビリティの担保に必要です。

```html
<!-- NG: 見た目のためだけに見出しを使う -->
<h1 class="title-like">ただ大きい文字にしたいだけ</h1>

<!-- NG: ボタンを a で作る -->
<a href="#" onclick="submitForm()">送信</a>
```

ツールだけでは完全には検出できず、レビューと経験が必要です。意味論は、HTMLの強みであるアクセシビリティに直結します。

第1部のまとめです。用途は文書からサイト、アプリへと広がっても、最終成果物はHTMLであり、「動く」ことと「正しい」ことは一致しません。正しさは字句 / 語彙 / 意味論で切り分け、その土台の上でVueにおけるHTMLの正しさを見直していきます。

---

## VueでHTMLはどのように使われているのか

ここからは、VueがこのHTMLをどう扱い、どこまで保証するのかを見ていきます。結論を先に言うと、VueはHTMLをパースしますが、ブラウザと同じ最終DOMを保証するわけではありません。

改めて、VueでもHTMLはDSLとして活用されています。見た目はHTMLですが、最終的には仮想DOM生成の関数へと変換されます。

Vue SFCのコンパイルは次の3段階に分けられます。

1. **Parse** — void要素・名前空間・実体参照など、HTML寄りの字句ルールでASTを作る
2. **Transform** — Vueディレクティブや最適化をASTに適用する
3. **Generate** — 最終的にJavaScriptに変換する

Parse時点で壊れているHTMLの書き方を検知してエラーを出せます。ここが字句的ルールの守備範囲です。一方で、出力はブラウザ向けHTML文字列ではなく、仮想DOMを作るJavaScriptです。templateの見た目はHTMLでも、成果物は「DOMを組み立てるプログラム」です。

### `<div />` はパース可能か

ここでクイズです。`<div />` はパース可能でしょうか？

答えは、パース可能です。Vueでは `<div></div>` として解釈されます。

- `<div v-text="Vue Fes Japan" />` は `<div>Vue Fes Japan</div>` とレンダリングされる
- `<div />Vue Fes Japan` は `<div></div>Vue Fes Japan` となる
- Custom Elements や Vueコンポーネントも自己完結タグが可能
- ASTに含まれる `isSelfClosing` の有無で判定している

ただしHTMLの仕様として `<div />` は有効ではありません。ここが、VueのパースとHTML適合性のずれの一例です。

自己完結タグにまつわる余談もあります。Prettierのフォーマットでは必ず閉じタグが付くようになっています。Biomeはオプションで変えられます（`--html-formatter-self-close-void-elements=<always|never>`）。Svelteは Rich Harris 氏が見直し、マイグレーションツール（`npx svelte-migrate self-closing-tags`）が作られました。フレームワークごとに慣習が分かれている、という意味でも覚えておくとよいと思います。

### コンテンツモデルは警告してくれる

では、Vueは何もしないのかというと、そうではありません。Vue 3.4以降、`compiler-dom` の `validateHtmlNesting` により、不正なネストが開発時に警告されます。

<figure>

![Vueのテンプレートで p の中に h1 や li を置いたときに、HTML仕様上のネスト違反として警告が出ているエディタ画面](../images/vue-nesting-warning.png)

<figcaption>開発時のネスト警告の例。ありがたいDXだが、警告を無視すればそのまま動いてしまう</figcaption>
</figure>

SSRにおけるハイドレーションミスマッチを防ぐ意図のあるありがたいDXですが、これはあくまでも**開発時の警告**であり、明確なコンパイルエラーではありません。警告を無視すればそのまま動いてしまいます。

以上よりVueコンパイラが見る範囲は次のとおりです。

| ルール | Vueコンパイラの対応 |
| --- | --- |
| 字句的 | 〇 |
| 語彙的 | △（開発時の警告のみ） |
| 意味論的 | ✕ |

語彙的・意味論的なルールは、静的解析でチェックする必要があります。

---

## HTMLの正しさを静的解析で守る

なぜ静的解析が必要なのか。ひとつは、決定論としての判断をAIエージェントに与えられるようにするためです。

AIのみの判定は非決定論的です。賢くてもモデル依存となり、確実性は薄い。構造的に正しいか、型安全か、内部で矛盾していないかを解析させ、解析するまでのスピードも兼ねているとなおよい、というのが今の現場感だと思います。

ここからは、各Lintツールが何の役割をもち、どの領域を守っているのかを見ていきます。

### ESLint

最初に広まった土台は、ESLint と [eslint-plugin-vue](https://eslint.vuejs.org/) です。

[`vue/no-parsing-error`](https://eslint.vuejs.org/rules/no-parsing-error.html) で `<template>` 内の構文エラーを報告できます。WHATWG HTMLの**字句的**な構文エラーを多く検知でき、essential 系プリセットにも含まれます。ただし自己完結タグに関するチェックのみは、デフォルトで無効になっています。語彙的ルールを守れるものは確認できず、意味論的に扱えるものとしては [`vue/html-button-has-type`](https://eslint.vuejs.org/rules/html-button-has-type.html) などがあります。

アクセシビリティという形から意味論を守るのが [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) です。たとえば [`form-control-has-label`](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/rules/form-control-has-label.html) では、ラベルと入力側のコンポーネントを指定できます。

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

ちなみにESLintには、HTMLチェック用途として [html-eslint](https://html-eslint.org/) もあります。React / Svelte / Angular のサポートはありますが、現時点ではVueは未対応です。

### Biome

リンター・フォーマッターがまとまったオールインツールとして [Biome](https://biomejs.dev/) があります。さまざまな言語やライブラリに対応しており、Vueでも使用可能です。

[`noDuplicateAttributes`](https://biomejs.dev/linter/rules/no-duplicate-attributes/) で重複属性を止められます。[`noObsoleteTags`](https://biomejs.dev/linter/rules/no-obsolete-tags/) や [`noMisplacedListElements`](https://biomejs.dev/linter/rules/no-misplaced-list-elements/) など、HTML寄りのルールが増えつつあります。[`useSemanticElements`](https://biomejs.dev/linter/rules/use-semantic-elements/) など意味論寄りの支援もできます。

さらに Biome では、[HTML拡張言語（HTML super languages）のサポート](https://biomejs.dev/introduction/language-support/#html-super-languages-support) が進んでいます。v2.3.0以降、Vue / Svelte / Astro を標準で扱え、ファイル内の HTML / CSS / JavaScript をフォーマット・リントできます。フルサポートはまだ実験的なので、明示的に有効化する必要がありそうです。

### Oxc

[OxLint](https://oxc.rs/) は Linterツールで、Vueは固有のルールチェックが主です。現時点では `<template>` の内部をチェックする機構はありません。[RFC: Embedded Framework Support for Oxlint (Language Plugins)](https://github.com/oxc-project/oxc/discussions/21936) が進むと、対応の見通しが見えてきそうです。速度面の補強として追う位置づけで十分だと思います。

### Markuplint

ESLint や Biome / Oxc が得意なのは主に字句・構文寄りの守備です。内容モデルや仕様適合性までを、HTML仕様データとして厚く見る層は足りていませんでした。その隙間を埋めるように存在しているのが [Markuplint](https://markuplint.dev/) です。

Markuplintの長所は、Living Standard ベースの**適合性検証**ができることです。`@markuplint/vue-parser` / `@markuplint/vue-spec` で `.vue` を扱えます。

[`parse-error`](https://markuplint.dev/docs/configuration/parser-options) では、HTML Living Standardにおけるトークナイズやツリー構築時の非致命的なパースエラーを検知できます。

```json
{
  "parserOptions": {
    "parseError": {
      "duplicate-attribute": "error",
      "nested-comment": "warning"
    }
  }
}
```

[`permitted-contents`](https://markuplint.dev/docs/rules/permitted-contents) では、コンテンツモデルを仕様データから検証できます。

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

適合性だけでなく、現場で効く意味論寄りのルールもあります。

[`no-pseudo-list`](https://markuplint.dev/ja/docs/rules/no-pseudo-list) は、ビュレット文字で箇条書きを擬似している箇所を止め、`ul` / `li` を使うよう求めます。

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

[`no-consecutive-br`](https://markuplint.dev/ja/docs/rules/no-consecutive-br) は、連続する `<br>` に警告します。改行の重ね打ちで余白を作る代わりに、段落や余白用のスタイルへ寄せましょう。

```html
<!-- incorrect -->
<p>
  A...<br />
  <br />
  B...
</p>

<!-- correct -->
<p>A...</p>
<p>B...</p>
```

[`no-skipped-heading-level`](https://markuplint.dev/ja/docs/rules/no-skipped-heading-level) は、見出しレベルを飛ばすと警告します。

```html
<!-- incorrect -->
<h1>見出し1</h1>
<h3>見出し3</h3>
<h2>見出し2</h2>

<!-- correct -->
<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
```

さらに [Pretenders](https://markuplint.dev/docs/guides/besides-html) があります。コンポーネントを描画結果の**HTML要素に見立てるオプション**です。たとえば `FileList` → `ul`、`FileListItem` → `li` のように内容モデルを評価できます。v5からは experimental で自動スキャンも設定可能です。

```json
{
  "pretenders": {
    "scan": [
      {
        "files": "./src/components/**/*.vue"
      }
    ]
  }
}
```

ここまでで、「字句を止める」と「仕様で適合性を見る」という二層が揃いました。

### Vize

その流れの先に、近年登場しているのが [Vize](https://vizejs.dev/) です。ubugeeeiさん作・RustによるVueのオールツールチェインで、HTML適合性を Vue固有ルール / アクセシビリティから分離して扱えます。

- Vue: https://vizejs.dev/rules/vue/index.html
- HTML: https://vizejs.dev/rules/html/index.html
- a11y: https://vizejs.dev/rules/accessibility/index.html

特に重要なのが `html/cross-component-nesting` です。単ファイルでは合法でも、コンポーネント合成で壊れるネストを、ファイル横断で止められます。`vize lint --cross-file` でファイル横断チェックができます。

```html
<!-- App.vue -->
<template>
  <p>Summary <InfoCard /></p>
</template>

<!-- InfoCard.vue -->
<template>
  <div class="card"><slot /></div>
</template>
```

各ファイル単体では合法でも、合成結果は実質 `<p><div>…</div></p>` となり不正です。ESLintでもMarkuplintでも見えにくかった「合成後」の正しさを押し広げているのが、いまの進化点です。

あわせて `templateSyntax` もあります。コンパイラ側は自己完結タグがある場合に警告するようにしており、モードの切り替えでエラーとしたり無視することもできます。

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

## おわりに

まとめです。Vueで正しいHTMLと向き合うために、次の3つを持ち帰ってほしいです。

1. HTMLの正しさを保つためのルールを把握する
2. Vueコンパイラの守備範囲を理解する
3. 静的解析でHTMLの正しさを保障する

実践としては、eslint-plugin-vueで構文を押さえ、Markuplintで仕様ベースの適合性を、Vizeでクロスファイルを補強する。あわせて Biome / Oxc の進みも追いながら、誰が何を見るかを設計します。SFCのtemplateを見ていれば十分、というわけではありません。

HTMLの仕様は今も更新されています。用途が広がっても最終成果物はHTMLである、という前提を忘れず、Vueのコンパイルの仕組みを理解したうえで静的解析という防波堤を立て、堅牢なマークアップとアクセシブルなアウトプットを一緒に実現していきましょう。

以上で発表を終わります。ご清聴いただきありがとうございました。

## 参考文献

- [HTML Standard](https://html.spec.whatwg.org/)
- [HTML Standard — Kinds of content](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content)
- [WHATWG: Non-conforming features](https://html.spec.whatwg.org/#non-conforming-features)
- [HTMLという地層の堆積](https://www.dropbox.com/scl/fi/4al6p7za54z9k3zidqps7/HTML.paper?rlkey=mo5qbfgq60pct57l743jqtksa&dl=0) / yuhei
- [Vue: validateHtmlNesting](https://github.com/vuejs/core/blob/main/packages/compiler-dom/src/transforms/validateHtmlNesting.ts)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/)
- [Markuplint](https://markuplint.dev/)
- [Vize HTML Rules](https://vizejs.dev/rules/html/index.html)
- [Oxlint & Oxfmt Compatibility | The JavaScript Oxidation Compiler](https://oxc.rs/compatibility)
- [RFC: Embedded Framework Support for Oxlint](https://github.com/oxc-project/oxc/discussions/21936)
- [弁護士ドットコム 新卒研修2025 HTML/CSS（太田良典）](https://speakerdeck.com/bengo4com/20250405-bengo4com-htmlcss)
