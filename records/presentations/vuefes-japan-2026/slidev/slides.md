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

[ドキュメントページ版（日本語）](https://records.yamanoku.net/vuefes-japan-2026/ja/) | [Document Page Version（English）](https://records.yamanoku.net/vuefes-japan-2026/en/)

</div>

<div class="absolute bottom-10">
  <span class="text-6 font-700">
    やまのく（yamanoku）
  </span>
</div>

<!--
サイボウズトラック 14:20 - 14:50。本日はお集まりいただきありがとうございます。
-->

---
layout: section
---

## 発表者：やまのく

- 会社員 / 一児の父

<!--
やまのくと申します。会社員で、一児の父です。WebアクセシビリティとHTMLが好きで、Vue Fes Japan Online 2022では「Vue.jsでアクセシブルなコンポーネントをつくるために」、2023では「画面遷移から考えるNuxtアプリケーションをアクセシブルにする方法」、2025では「生成AI時代のWebアプリケーションアクセシビリティ改善」という発表をさせていただきました。今回は、その延長線上で、VueのSFCにおけるHTMLそのものに焦点を当てます。

VueのSFCには template でHTMLを書ける構文があります。これは周知の事実だと思います。一方で、要素間のネスト違反があっても開発時の警告にとどまり、明確なコンパイルエラーにはなりません。字句的・構文的なルールはある程度見ますが、具体的なHTML要素の使い方までは関与していません。

本日は、コンパイラがtemplateをどう解釈しているかを仕組みから紐解き、コンパイラだけでは保てないHTMLの正しさを、Linterといった静的解析——ESLint、Markuplint、Biome、OxC、Vizeなど——でいまどう守れるかを紹介します。想定しているのは、Vue中級者以上で、コンパイラやSFCの仕組み、HTMLのLinterエコシステム、正しいマークアップに関心のある方です。
-->

---
layout: statement
---

# Vue開発で<br>HTMLの「正しさ」を<br>どう検証していますか？

<!--
皆さん、Vueを使った開発をするとき、「HTMLの正しさ」をどのように検証しているか、明確に答えられるでしょうか？
-->

---

## アジェンダ

1. **HTMLの歴史と現在の仕様について**
2. **VueでHTMLはどのようにコンパイルされているのか**
3. **VueでHTMLの正しさを検証するツールたち**

<!--
持ち時間は30分です。次の3部で進めます。聴衆にHTML仕様へ馴染みのない方も多い想定なので、第1部はスライド枚数を多めにして丁寧に進めます。第2・3部は要点を絞って同じ10分に収めます。それでは、本題に入っていきましょう。
-->

---
layout: section
---

# 1. HTMLの歴史と<br>現在の仕様について

<!--
本題に入る前に、前提を揃えたいと思います。約10分。仕様に詳しくない方も多い想定なので、ここを厚めに丁寧に進めます。Vueの話に入る前に、「正しさ」の土台を共有します。
-->

---
layout: statement
---

# 普段、HTMLを<br>どこで見かけていますか？

<!--
普段、HTMLをどこで見かけていますか。Webサイト、管理画面、コンポーネントライブラリ、SSRの差分比較など、フロントエンド開発のあちこちにあります。
-->

---

## HTMLは生まれて約37年

- 1990年代前半に誕生し、**文書**のためのマークアップとして広がった
- その後、**アプリのUI**やDOMの差分比較の対象にもなった
- 「古い技術」ではなく、今も更新され続けている基盤

<!--
HTMLは生まれて約37年になります。1990年代前半に文書のためのマークアップとして広がり、その後アプリのUIやDOM差分比較の対象にもなりました。「古い技術」ではなく、今も更新され続ける基盤です。
-->

---

## 文書の言語から、アプリの基盤へ

- 初期: 見出し・段落・リンクなど、文書構造を表す
- 中期: フォームやインタラクションが増え、アプリでも使われる
- 現在: SPA / SSR / デザインシステムでも、最終出力はHTMLであることが多い

<!--
初期は見出し・段落・リンクなど文書構造を表す言語でした。中期にはフォームやインタラクションが増え、現在はSPA / SSR / デザインシステムでも最終出力がHTMLであることが多いです。Vueでtemplateを書いていても、ブラウザが受け取る最終成果物はHTMLです。だから仕様の理解は、フレームワーク以前の共通基盤になります。
-->
---

## XHTMLの分岐が残したもの

- XHTMLは「厳格に書いて止める」方向（XML）
- HTMLは「壊れても補正して表示する」方向（互換性）
- いま現場で主に使うのは後者のHTML構文
- その結果、**誤りがあっても画面は動いて見える**

<!--
XHTMLは「厳格に書いて止める」方向、HTMLは「壊れても補正して表示する」方向でした。いま現場で主に使うのは後者のHTML構文です。その結果、誤りがあっても画面は動いて見えやすい。これは利用者には良いことですが、開発者にとっては「動いている＝正しい」と錯覚しやすい土壌でもあります。
-->

---

## いまのHTMLは Living Standard

- 正本は [HTML Standard（WHATWG）](https://html.spec.whatwg.org/)
- 凍結されたバージョン名より、**継続更新される仕様本文**が基準
- 2019年以降、W3CもこのLiving Standardを前提に協調

<!--
いまのHTMLの正本は HTML Standard、WHATWG です。凍結されたバージョン名より、継続更新される仕様本文が基準です。2019年以降、W3CもこのLiving Standardを前提に協調しています。OpenUI / Interop / HTML Day など、実装とコミュニティの動きも続きます。「HTML5を覚えれば終わり」ではなく、仕様本文と実装の変化を見続ける必要があります。
-->

---

## Living Standardで何が変わるか

- 要素や属性の扱いは、実装状況に合わせて更新されうる
- 「昔からの慣習」が、今の仕様では非推奨・非適合なことがある
- [Non-conforming features](https://html.spec.whatwg.org/#non-conforming-features) も明示されている
- だからこそ、記憶だけに頼らず**機械検証**が効く

<!--
Living Standardでは、要素や属性の扱いが実装状況に合わせて更新され得ます。「昔からの慣習」が今の仕様では非推奨・非適合なこともあり、Non-conforming features も明示されています。だからこそ、記憶だけに頼らず機械検証が効きます。仕様が生きているからこそ、Linterやチェッカーの価値が上がります。第3部への伏線でもあります。
-->

---
layout: statement
---

# 「動くHTML」と<br>「正しいHTML」は違う

<!--
ここで大事なのは、「動くHTML」と「正しいHTML」は違う、ということです。ブラウザで表示されることと、仕様に適合していること、アクセシブルなアウトプットになることは別問題です。
-->

---

## ブラウザは誤りを「直して」くれる

```html
<p>
  <div>block</div>
</p>
```

↓ パーサが補正し、実際のDOMは意図と違う形になりうる

- HTML構文はエラーでも最後までパースする
- 画面は出るが、構造・スタイル・アクセシビリティに副作用が出る
- 仕様は「表示できる＝適合」とはせず、誤りを整理している
  - [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors)
  - [内容モデル・属性値の制限](https://html.spec.whatwg.org/dev/introduction.html#restrictions-on-content-models-and-on-attribute-values)

<!--
たとえば p の中に div を置くと、パーサが補正し、実際のDOMは意図と違う形になり得ます。HTML構文はエラーでも最後までパースするため、画面は出ても構造・スタイル・アクセシビリティに副作用が出ます。仕様も、表示できることと適合していることを同一視せず、Syntax errors や内容モデル・属性値の制限として誤りを整理しています。これがHTMLの優しさであり、罠でもあります。
-->

---

## 「正解」はないが「ルール」はある

- マークアップに唯一の正解はない
- 代わりに「ルール」は存在する

<!--
マークアップに唯一の正解はありません。それでも品質の良し悪しと、明確な誤りはあります。「良いHTML」の条件としては、セマンティックであること、アクセシブルであること、誤りがないこと、保守しやすいことなどが挙げられます。まずは誤りをなくすことがスタート地点です。弁護士ドットコムの新卒向けHTML/CSS研修でも強調されていた論点でもあります。
-->

---

## 正しさの3つのルール

1. **字句的ルール**
2. **語彙的ルール**
3. **意味論的ルール**

<!--
誤りは、次の3つのルールに分類できます。以降のVueコンパイラやLinterの話も、この分類で見ると守備範囲がはっきりします。ここが第1部の核心です。
-->

---

## 字句的ルール

```html
<!-- NG: 終了タグが対応していない / 属性値の書き方が崩れている -->
<div>
  <p>テキスト
</div>
<img src="photo.jpg" alt="写真" title=未クオート>
```

- 開始タグと終了タグの対応、属性の書き方
- 違反するとパーサがエラーを出し、DOMツリーが正しく作れない
- HTML構文では補正されて「動いて」見えることがある
- WHATWG [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors): なぜ非適合にするかを整理
  - 直感に反するDOM / ストリーミング非互換 / 仕様の誤解 など

<!--
字句的ルールは、タグの閉じ方、属性の書き方などです。たとえば終了タグが対応していなかったり、属性値のクオートが欠けていたりする例です。違反するとパーサがエラーを出し、DOMツリーが正しく作れません。ただしHTML構文では補正されて「動いて」見えることがあります。XML構文なら即座に止まりますが、HTML構文では補正されるため気づきにくい。WHATWGの Syntax errors は、不正な構文が直感に反するDOMを生む、ストリーミングと相性が悪い、著者が仕様を誤解しやすい、といった理由で非適合にすると説明しています。仕様が「止める理由」を言語化しているので、チェッカーも機械的に問えるようになります。
-->

---

## 語彙的ルール（内容モデル）

```html
<!-- NG: p の中にブロック要素は置けない -->
<p>
  <div>block</div>
</p>

<!-- NG: リンクの入れ子は不可 -->
<a href="/a">
  外側
  <a href="/b">内側</a>
</a>
```

- 要素名・属性名が仕様に存在するか
- **内容モデル（content model）** — どの要素の中に何を置けるか
- 違反してもパーサは止まらず、望ましくないDOMになる
- 仕様: [Restrictions on content models and on attribute values](https://html.spec.whatwg.org/dev/introduction.html#restrictions-on-content-models-and-on-attribute-values)

<!--
語彙的ルールは、使える要素・属性と、内容モデルによる入れ子ルールです。違反してもパーサは止まらず、望ましくないDOMになります。仕様側では Restrictions on content models and on attribute values として整理されています。タグの対応は合っていても、要素の入れ子が誤っていると静かに壊れたDOMができます。
-->

---

## 内容モデルの具体例

```html
<!-- NG: ul / ol の直接の子は基本的に li -->
<ul>
  <div>item</div>
</ul>
```

| 親 | 置けない例 | なぜまずいか |
| --- | --- | --- |
| `p` | `div`, `p`, `ul` | 段落の中にブロックを入れられない |
| `label` | `div`, `p` | ラベルの内容モデル外 |
| `a` | `a` | リンクの入れ子は不可 |
| `ul` / `ol` | 直接の `div` | 子は基本的に `li` |

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

<!-- NG: 意味のある画像に alt がない -->
<img src="sales-chart.png">
```

- 文法として正しくても、伝わる意味が違うことがある
- ツールだけでは完全には検出できない領域
- 最終的にはレビューと経験が必要

<!--
意味論的ルールは、要素の意味と使い方、アクセシビリティです。文法として正しくても伝わる意味が違うことがあります。見た目のためだけに h1 を使う、ボタンを a で作る、意味のある画像に alt がない、などです。ツールだけでは完全には検出できず、レビューと経験が必要です。意味論は、HTMLの強みであるアクセシビリティに直結します。
-->

---

## 第1部まとめ

- HTMLの仕様はLiving Standardとして更新され続けている
- 「表示されている」ことは「正しい」ことと一致しない
- 正しさは **字句 / 語彙 / 意味論** から考える

<!--
第1部のまとめです。HTMLはLiving Standardとして今も更新されています。「動く」ことと「正しい」ことは一致しません。正しさは字句 / 語彙 / 意味論で切り分け、その土台の上でVueのtemplateを見直していきます。
-->

---
layout: section
---

# 2. VueでHTMLはどのように<br>使われているのか

<!--
ここからは、VueがこのHTMLをどう扱い、どこまで保証するのかを見ていきます。約10分。第1部の字句 / 語彙 / 意味論を前提に、要点重視で進めます。
-->

---

## フレームワークごとのHTMLの扱い

| 系統 | 例 | 扱い |
| --- | --- | --- |
| HTMLはDSLの一部 | Vue / Svelte | 直接HTMLを記述できる |
| JSX | React / SolidJS / Ripple | JSの中の式<br>閉じタグ必須などXML寄りの慣習 |
| HTML起点 | Alpine.js / htmx | HTMLを起点に振る舞いを足す |

<!--
フレームワークごとの扱いも分かれます。文脈整理として他FWにも触れますが、以降はVueに絞ります。Vueの本線はtemplate DSLです。JSX経路、Vue JSXもありますが、後の補足で触ります。
Vueの本線はtemplate DSLで、「HTMLっぽいDSL」として書けます。見た目はHTMLですが、最終的には仮想DOM生成の関数へと変換されます。このギャップが、今日の本題です。
-->

---

## コンパイルの3段階

1. **Parse**
2. **Transform**
3. **Generate**

<!--
コンパイルはざっくり次の3段階です。Parse、Transform、Generate。compiler-sfc はファイルを parse() で SFCDescriptor に分解し、compileScript と compileTemplate がそれぞれ script / template を処理します。
-->

---
layout: center
---

```mermaid
flowchart
  subgraph Parse
    A["SFCソース (.vue)"] --> B["compiler-sfc parse()<br/>parseMode: 'sfc'"]
    B --> C["compiler-core Tokenizer + baseParse<br/>(HTMLルール: void要素, 名前空間, entities)"]
    C --> D["SFCDescriptor<br/>template.content + template.ast"]
  end
```

---
layout: center
---

```mermaide
flowchart
  subgraph Transform
    E["compiler-sfc<br/>compileTemplate()"]
    E --> F["compiler-dom compile()<br/>parserOptions + DOM transforms"]
  end
  subgraph Generate
    G["render関数コード (module mode)"]
  end
  F --> G
```

<!--
Parse で compiler-sfc の parse と compiler-core の Tokenizer / baseParse により HTMLルールを踏まえた AST ができ、Transform で compileTemplate 経由の compiler-dom transforms が走り、Generate で module mode の render 関数コードになります。
-->

---

## コンパイラはHTMLを「どう」解釈するか

- Parse時: void要素・名前空間・実体参照など、**HTML寄りの字句ルール**でASTを作る
- Transform時: Vueディレクティブや最適化をASTに適用する
- Generate時: 最終成果物はブラウザ向けHTML文字列ではなく、**仮想DOMを作るJS**
- つまり template の見た目はHTMLでも、出力は「DOMを組み立てるプログラム」

<!--
コンパイラはHTMLを次のように解釈します。Parse時は void要素・名前空間・実体参照など、HTML寄りの字句ルールでASTを作ります。Transform時は Vueディレクティブや最適化をASTに適用します。Generate時の最終成果物は、ブラウザ向けHTML文字列ではなく、仮想DOMを作るJavaScriptです。つまり template の見た目はHTMLでも、出力は「DOMを組み立てるプログラム」です。VueはHTMLをパースしますが、ブラウザのHTMLパーサと同じ最終DOMを保証するわけではありません。ここが、今日の本題の分岐点です。
たとえば不正なネストがあっても、コンパイル後は「関数呼び出し」として成立し得ます。仮想DOM生成では要素をプログラム的に作るため、ブラウザのHTMLパーサが行うような再配置が起きないからです。
-->

---

## ネスト違反は「警告」止まり

<img src="./images/vue-nesting-warning.png" alt="Vueのテンプレートで p の中に h1 や li を置いたときに、HTML仕様上のネスト違反として警告が出ているエディタ画面" width="720">

- `compiler-dom` の `validateHtmlNesting`
- **開発時の警告**（`onWarn`）。コンパイルエラーではない
- 字句的ルールと一部の語彙的ルールは見るが、意味論までは関与しない

<!--
では、Vueは何もしないのかというと、そうではありません。Vue 3.4以降、compiler-dom の validateHtmlNesting により、不正なネストが開発時に警告されます。「p の子に h1 は置けません。HTML仕様に従っています。ハイドレーションエラーや将来の機能への影響を引き起こす可能性があります。」これは onWarn による開発時の警告であり、明確なコンパイルエラーではありません。
実際のエディタではこのように警告が出ます。ありがたいDXですが、警告を無視すればそのまま動いてしまいます。
-->

---

## Vueコンパイラが見る範囲

| ルール | Vueコンパイラ |
| --- | --- |
| 字句的 | △〜○（パースできる範囲） |
| 語彙的（内容モデル） | 一部を開発時警告 |
| 意味論的 | ✕ |

<!--
Vueコンパイラが見る範囲は次のとおりです。字句的はパースできる範囲で三角から丸、語彙的は一部を開発時警告、意味論的はバツ。つまり、Vue自身はHTMLセマンティクスを最終保証しません。
-->

---
layout: statement
---

# Vue自身はHTMLセマンティクスを<br>最終保証しない

<!--
コンパイラは優秀ですが、HTMLの正しさを最終保証する役割は担っていません。だからこそ、静的解析という防波堤が必要になります。
-->

---

## コンパイラだけでは守れない隙間

| レイヤー | 例 | 限界 |
| --- | --- | --- |
| 実行時 | ハイドレーションミスマッチ警告 | 正しさの保証ではない |
| 型 | TypeScript（`HTMLElement` など） | DOM APIの型であり適合性ではない |
| `<head>` など | template外のマークアップ | Vueコンパイラだけでは見にくい |
| 成果物 | 出力HTMLの静的解析 | ビルド後にしか見えない |

<!--
コンパイラだけでは守れない隙間もあります。ハイドレーション警告は正しさの保証ではありません。TypeScriptの HTMLElement などはDOM APIの型であり、適合性検証ではありません。head など template外のマークアップは見にくく、出力HTMLの静的解析はビルド後にしか見えません。
-->

---
layout: section
---

# 3. VueでHTMLの正しさを<br>検証するためのツール紹介

<!--
ここまで見てきた通り、Vueのテンプレートは最終的に Hyperscript に変換されるため、不正なネストでも関数としては通ってしまいます。コンパイラや実行時のVue自身はHTMLセマンティクスを制御・検証しません。だからブラウザが意図せぬDOM修正を起こす前に、静的解析が隙間を埋める必要があります。約10分で要点を紹介します。
-->

---

## なぜLinterが「防波堤」になるのか

> Vueのテンプレートは最終的に Hyperscript に変換されるため、不正なネストでも関数としては通ってしまう。コンパイラや実行時のVue自身はHTMLセマンティクスを制御・検証しない。だからブラウザが意図せぬDOM修正を起こす前に、静的解析が隙間を埋める必要がある。

<!--
ここが今日一番伝えたい構造です。Vueの優秀さと、HTML正しさの保証は別物です。
-->

---

## ツールは「足りない層」を埋めて進化してきた

1. ESLint / Biome / OxC
2. Markuplint
3. Vize

<!--
ここではツールを星取表で並べるのではなく、登場の歴史をたどりながら、何が足りなくて次が生まれたかを見ていきます。アクセシビリティLintとは起点が違います。ここではHTML適合性の側です。時代ごとに足りない層を埋めてきた、という見方で聞いてほしいです。
-->

---

## ESLint

- [`vue/no-parsing-error`](https://eslint.vuejs.org/rules/no-parsing-error.html) で template 内の構文エラーを報告できる
- WHATWG HTMLの**字句的**な構文エラーを多く検知できる
- 第1部の [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors)（タグ対応・属性構文など）を早期に止められる
- essential 系プリセットに含まれ、Vueプロジェクトへ導入しやすい

<!--
最初に広まった土台は、ESLint と eslint-plugin-vue です。長所は、template の字句エラーを日常の開発フローに乗せられることです。vue/no-parsing-error は WHATWG HTML の字句的な構文エラーを多く検知でき、essential 系プリセットにも含まれます。第1部で触れた Syntax errors ——タグの対応崩れや属性の書き方崩れなど——を、エディタとCIで早期に止められます。補足として、字句以外にも HTML の使い方に触れるルールはあります。html-button-has-type は button に type を求め、no-template-target-blank は target="_blank" に rel を求め、no-restricted-html-elements で特定要素を止められます。ただしこれらは現場の慣習や設定ベースの守りで、内容モデルや仕様適合性を厚く見る層ではありません。一方で、ESLint系が得意なのは主に字句・構文寄りで、そこが次に Markuplint が埋めた隙間です。
-->

---

## Biome / OxC

- **Biome**: [`noDuplicateAttributes`](https://biomejs.dev/linter/rules/no-duplicate-attributes/) で重複属性を止められる
- **Biome**: [`noObsoleteTags`](https://biomejs.dev/linter/rules/no-obsolete-tags/) や [`noMisplacedListElements`](https://biomejs.dev/linter/rules/no-misplaced-list-elements/) など、HTML寄りのルールが増えつつある
- **Biome**: [`useSemanticElements`](https://biomejs.dev/linter/rules/use-semantic-elements/) など意味論寄りの支援もできる
- **OxLint**: 高速な JS/TS Lint。Vue は script 側の解析が中心

<!--
続いて出てきたのが、Biome や OxC といった高速・統合志向の世代です。役割は「同じ検証をより速く、ツールチェーンに載せる」ことです。HTML適合性の本線を置き換える段階ではありませんが、「速さ」と「統合」が次の競争軸になった、という変化は押さえておきたいです。
-->

---

## Markuplint

- HTML Living Standard ベースの**適合性検証**ができる
- [`permitted-contents`](https://markuplint.dev/docs/rules/permitted-contents) で内容モデルを仕様データから検証できる
- [`no-obsolete-element`](https://markuplint.dev/docs/rules/no-obsolete-element) で廃止要素を止められる
- [`require-accessible-name`](https://markuplint.dev/docs/rules/require-accessible-name) でアクセシブルネームも見られる
- `@markuplint/vue-parser` / `@markuplint/vue-spec` で `.vue` を扱える

<!--
その隙間を埋めるように登場したのが Markuplint です。長所は、HTML仕様のマークアップルールを最も厚く継承していることです。permitted-contents で内容モデルを仕様データから検証でき、廃止要素やアクセシブルネームも見られます。vue-parser と vue-spec で .vue を扱えます。ここで「字句を止める」と「仕様で適合性を見る」という二層が揃いました。
-->

---

## Markuplint - Pretenders

- Vueコンポーネントを、描画結果の**ネイティブHTML要素に見立てて検証**できる
- 例: `List` → `ul`、`Item` → `li` として内容モデルを評価できる
- [`pretenders`](https://markuplint.dev/docs/guides/besides-html) で手動マップ、または Vue 向けに scan も可能
- コンポーネント境界をまたぐ語彙的ルールを、仕様データ側から補強できる

<!--
さらに Pretenders があります。Vueコンポーネントを描画結果のネイティブHTML要素に見立てて検証できます。たとえば List を ul、Item を li とマップすると、コンポーネント境界をまたぐ語彙的ルールを仕様データ側から補強できます。手動マップのほか、Vue向けの scan も可能です。
-->

---

## Vize

- HTML適合性を Vue固有ルール / アクセシビリティから分離して扱える
- `html/deprecated-element` や `html/id-duplication` など、HTML寄りのルールを持てる
- **`html/cross-component-nesting`** で、合成後に初めて不正になるネストを検知できる
- `vize lint --cross-file` でファイル横断チェックができる

<!--
その流れの先に、近年登場しているのが Vize です。長所は、単ファイルでは合法でもコンポーネント合成で壊れるネストを、ファイル横断で止められることです。HTML適合性を Vue固有ルールやアクセシビリティから分離して提供しており、特に html/cross-component-nesting が重要です。ESLintでもMarkuplintでも見えにくかった「合成後」の正しさを押し広げているのが、いまの進化点です。
-->

---

## クロスコンポーネントネストの例

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

→ 合成結果は実質 `<p><div>…</div></p>`（不正）

<!--
各ファイル単体では合法でも、合成結果は実質 p の中に div となり不正です。vize lint --cross-file のようにファイル横断で見て初めて防げる領域です。ここが Vize の具体的な強みであり、歴史の延長線上にある次の層です。
-->

---

## 見落としやすい観点

- **`<head>`** — SFCのtemplate外にあり、Vueコンパイラやeslint-plugin-vueだけでは見にくい
- **TypeScript** — `HTMLElement` 等はDOM APIの型であり、HTML適合性の検証ではない
- **出力後のHTML** — ビルド成果物への静的解析（Vize等）で初めて見える層がある

<!--
head や TypeScript の型、出力後の静的解析まで含めて、誰が何を見るかを設計します。SFCのtemplateを見ていれば十分、というわけではありません。
-->

---
layout: section
---

# おわりに

<!--
今日の3部をおさらいします。
-->

---

## 今日の3部をおさらい

1. **仕様** — Living Standardと、字句 / 語彙 / 意味論
2. **Vueでの使い方** — templateはHTMLっぽいDSL。コンパイラは最終保証しない
3. **検証ツール** — ESLint → Markuplint → Biome/OxC → Vize と進化してきた層を組み合わせて隙間を埋める

<!--
1つ目は仕様。Living Standardと、字句 / 語彙 / 意味論。2つ目は Vueでの使い方。templateはHTMLっぽいDSLで、コンパイラは最終保証しない。3つ目は検証ツール。ESLintから Markuplint、Biome/OxC、Vizeへと足りない層を埋めてきた歴史を踏まえ、役割を組み合わせます。
-->

---

## Vueで正しいHTMLと向き合うために

1. **コンパイラの守備範囲を理解する**（警告≠保証）
2. **Linterで「Vueの隙間」を埋める**
   - 構文: eslint-plugin-vue
   - HTML適合性: Markuplint
   - クロスファイル: Vize
3. **コンポーネント境界をまたぐ正しさも見る**
4. Living StandardとしてのHTMLに追随する
5. 堅牢なマークアップ → アクセシブルなアウトプットへ

<!--
実践としては、次の一歩をお勧めします。コンパイラの守備範囲を理解する。警告は保証ではありません。Linterで Vueの隙間を埋める。構文は eslint-plugin-vue、HTML適合性は Markuplint、クロスファイルは Vize。コンポーネント境界をまたぐ正しさも見る。Living StandardとしてのHTMLに追随する。堅牢なマークアップから、アクセシブルなアウトプットへ。おすすめは、歴史が積み上げた役割分担をそのまま使うことです。Biome / OxCは速度と統合の補強として追います。
-->

---
layout: statement
---

# HTMLと<br>正しく向き合いながら<br>堅牢なマークアップを

<!--
HTMLの仕様は今も更新されています。Vueのコンパイルの仕組みを理解したうえで、静的解析という防波堤を立て、堅牢なマークアップとアクセシブルなアウトプットを一緒に実現していきましょう。

以上で発表を終わります。ご清聴いただきありがとうございました。
-->

---

## 参考文献

- [HTML Standard](https://html.spec.whatwg.org/)
- [WHATWG: Non-conforming features](https://html.spec.whatwg.org/#non-conforming-features)
- [Vue: validateHtmlNesting](https://github.com/vuejs/core/blob/main/packages/compiler-dom/src/transforms/validateHtmlNesting.ts)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [Markuplint](https://markuplint.dev/)
- [Vize HTML Rules](https://vizejs.dev/rules/html/index.html)
- [OxC Compatibility](https://oxc.rs/compatibility)
- [Vue JSX](https://vuejsx.dev/)
- [eslint-plugin-validate-jsx-nesting](https://github.com/MananTank/eslint-plugin-validate-jsx-nesting)
- [弁護士ドットコム 新卒研修2025 HTML/CSS（太田良典）](https://speakerdeck.com/bengo4com/20250405-bengo4com-htmlcss)
