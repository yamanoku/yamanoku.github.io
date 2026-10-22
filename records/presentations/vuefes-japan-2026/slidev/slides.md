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

---

## 発表者：やまのく

<img src="./images/yamanoku.png" alt="yamanoku" width="200" class="blcok mb-8">

- 一児の父、会社員（～2026/10）
- Vue Fes Japan 2026 コアスタッフ
- HTML Night in Tokyo、HTML Day 2026 in 東葛 主催

<!--
みなさま、こんにちは。やまのくと申します。

一児の父で今月10月いっぱいまで会社員としてやっております。今年のVue Fes Japan 2026 ではコアスタッフとしても関わっております。

今年はHTMLにまつわるイベントとしてHTML Night in Tokyo や HTML Day 2026 in 東葛の主催もしておりました。

昨年のVue Fes Japan 2025では生成AIとアクセシビリティ改善について発表させてもらい、今年も登壇となります。
-->

---
layout: center
---

![](./images/vuefes-japan-speakers.png)

<!--
Vue Fes Japan Speakersという2018年から今年までの歴代の登壇者まとめページも個人で運営しております。

こちらはVue.jsで作られてCloudflareでホスティングしております。
-->

---
layout: center
---

![](./images/vuefes-japan-speakers-yamanoku.png)

<!--

自分のページを確認してみると、この四年間の間にパネルディスカッションも含めて六回も登壇させてもらっていました。

年内でカンファレンス登壇については一旦止めようかなと思っているので、今年のVue Fesが最後の発表になるつもりです。

改めて登壇の機会をいただき感謝しております。

-->

---
layout: center
---

<h1 class="html">HTML</h1>

<!--

今回の発表ではタイトルにもあるように「HTML」を取り扱ったテーマで発表させていただきます。

以前HTML5 カンファレンスというフロントエンドカンファレンスがあったのですが、それ以来であまりHTMLにまつわる発表をカンファレンスでは聴かなくなったと思っています。

ですが池田さんの発表にもあったようにHTMLについては常にアップデートされてきており、今改めてHTMLそのものについてをVueのSFCと絡めて紹介できればと思い、このようなテーマにて応募させてもらいました。

-->

---

## HTMLの登場から35年

- 1991年に世の中に登場し、文書のためのマークアップとして広がった
- 装飾性のあるものやWebアプリのUIとして活用されるまで進化
- マークダウンよりも表現力高く扱うことができるためAIの出力に活用
- 仕様はLiving Standardとして今も更新され続けている

<!--

HTMLは1991年に世の中に登場し、今年で35年になります。

文書のためのマークアップとして広がり、装飾性のあるページやWebアプリのUIとして活用されるまで進化してきました。

マークダウンよりも表現力高く扱えるため、AIの出力にも使われています。

HTMLの仕様は HTML Living Standard として、今も更新され続けています。

-->

---

<img src="./images/history-of-html.png" alt="" width="720">

<small><a href="https://www.dropbox.com/scl/fi/4al6p7za54z9k3zidqps7/HTML.paper?rlkey=mo5qbfgq60pct57l743jqtksa&dl=0" target="_blank">HTMLという地層の堆積</a> / yuhei</small>

<!--
HTMLの初期は見出し・段落・リンクなど文書構造を表す言語でした。

そこから装飾するための要素が追加されていったり、フォームやインタラクティブな操作ができる要素が増えていきました。

CSSとJavaScriptからの関心の分離も進んできていた中で、普段のフロントエンド開発で使われるUIライブラリの中ではそのHTMLを使って実装されています。

Angular、SvelteらはHTMLの要素を使用しコンポーネント開発ができ、ReactやSolidではJSXでの式の中でHTMLのような表現を使っています。

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

<!--

そして皆さんがご存じの通りVueではHTMLをDSLとして活用しています。templateにて囲まれている部分がそこにあたります。

皆さんはVueを使った開発をするとき、HTMLが正しく書けているかをどのように守れているか・検証できているかについて、答えられますでしょうか。

今回の私の発表では、Vueの中でHTMLを正しく書くことができるかについてを紹介していければと思っております。

-->

---

# アジェンダ

1. HTMLの正しさとは何か
2. VueでHTMLはどのように使われているのか
3. HTMLの正しさを静的解析で守る

<!--
今日の私の発表を通じて、どのようにHTMLを正しく書いて守っていけるかを知ることができます。今日は以下の三つのテーマに絞って紹介していきます。

1. HTMLの正しさとは何か
2. VueでHTMLはどのように使われているのか
3. HTMLの正しさを静的解析で守る
-->

---
layout: section
---

# 「正しいHTML」とは何か？

<!--

まずは始めに、今回の発表タイトルにもある「正しいHTML」とはそもそも何か、についてを揃えていきたいと思います。

-->

---
layout: center
---

<div class="markup-sample"><mark>「日本最大級のフロントエンドカンファレンス Vue Fes Japan」</mark><br>をマークアップ</div>

<v-clicks>

- 紹介文として段落にしたい
- 「日本最大級のフロントエンドカンファレンス」を強調
- 「日本最大級の」を一番強く強調したい

</v-clicks>

<!--

HTMLの例としてサイトの紹介文にも含まれている「日本最大級のフロントエンドカンファレンス Vue Fes Japan」を取り上げてみます。

この文章を出すだけなら、まず段落として書くと思います。

次に「日本最大級のフロントエンドカンファレンス」は大事な部分だと思うのでここを強調していきます。

そこから「日本最大級の」を一番強く強調します。

この要件が揃った中でどのようにマークアップするかを考えてみてください。

-->

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

<!--

意図どおりに書くと、次のような形になります。

このHTMLはブラウザ上ではこのように表示されます。

そして最後にブラウザで描画されるHTMLは以下のような形で表示されます。

-->

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

<!--

一方で、emとstrongの閉じタグの対応を誤るとどうなるでしょうか。このマークアップをした状態でブラウザ上で表示してみます。

先ほどのと比較すると「フロントエンドカンファレンス」まで太字になっているように見えます。

これが実際にはどのようにブラウザ上のHTMLとして表現しているかを見てみます。
「日本最大級の」までは意図としてはあってそうですが、その後のフロントエンドカンファレンスまで最大級に強調されていることになっています。

このようにブラウザはエラーとはならず、結果的に表示されるHTMLは最初に期待したものとは違う形になり得ます。

-->

---

## ブラウザは誤りを「直す」

- HTML構文はエラーとなってもブラウザ側は自己解釈してパースする
- 仕様は「表示できる＝適合」とはせず、誤りを整理している
- 文書構造・スタイル・SSR・アクセシビリティで問題が起こる可能性がある

<!-- 

HTML構文はエラーとなってもブラウザ側は自己解釈してパースします。

仕様は「表示できること」がすなわち「適合」とはなっておらず、ただただ誤りを整理しているだけです。

こうした正しくないHTMLというのは文書構造・スタイル・SSR・アクセシビリティで問題が起こる可能性があります。

-->

---

## HTMLには「ルール」がある

- マークアップ自体には唯一の正解というものはない
- 代わりにHTMLでは守らなければならない「ルール」は存在する
  - 正しくパースさせる、もその１つ
- ルールを徹底できていることを「HTMLの正しさ」と定義する

<!--

マークアップ自体には唯一の正解というものはありません。

代わりにHTMLでは守らなければならない「ルール」は存在します。正しくパースさせるのも、その1つです。

それらのルールを徹底できていることを、本発表では「HTMLの正しさ」と定義し対と思います。

-->

---

## HTMLが正しいことのメリット

- 堅牢で保守的なコードで書ける
- 人やユーザーエージェント双方が扱える
- アクセシビリティを守れる
- ハイドレーションミスマッチを事前に防ぐ

<!--

HTMLが正しいことには、次のようなメリットがあります。

まず１つにセマンティクスなコードを実現することで意図があるコードとなり、divやspanといった意味をもたないもので書くことよりも堅牢で保守的なコードに繋がります

２つめにWebブラウザ上で表現されることで人やユーザーエージェントの双方が正しく介錯して扱えるものにもなります。

３つめにHTMLそのものがもつアクセシビリティの要件が使えるようになるためブラウザ上の中でのアクセシビリティを一定担保することができます。

最後にSSRにおけるハイドレーションミスマッチを事前に防ぎ、アプリケーションを正常な動作させることにも繋がります。

次に、主題となる「正しいHTML」を守るためのルールというのはどのようなものがあるかについてを紹介していきます。

-->

---

## 正しさの3つのルール

1. **字句的ルール**
2. **語彙的ルール**
3. **意味論的ルール**

<!--

HTMLの正しさを守るために３つのルールが存在します。

１つ目が字句的ルール。

２つ目が語彙的ルール。

３つ目が意味論的ルールになります。

このルール名だけ見てもどういうものがイメージしづらいと思うので順番に紹介していきます。

-->

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

<!--

まずはじめに字句的ルールについて。

これは開始タグと終了タグの対応、属性の書き方にまつわるルールです。

違反するとパーサによってはエラーを出し、DOMツリーが正しく作れないことに繋がります。

HTMLの仕様をまとめるWHATWGでは、こうした構文をなぜ非適合にするかを Syntax errors で説明しています。

不正な構文が直感に反するDOMを生む、ストリーミングと相性が悪い、著者が仕様を誤解しやすい、といった理由です。

仕様が「止める理由」を言語化しているので、後述するコンパイラやリンターにて機械的にチェックするようにしています。

-->

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

<!--
次に語彙的ルールです。

使える要素・属性と、コンテンツモデルによる入れ子ルールです。

こちらは字句的ルールよりも厄介なところで、パーサ上は問題とならないことがあるのですが、DOMとしては望ましくないものとなります。

つまりタグの位置や使い方の対応は合っていても、要素間で入れられるものの内容が誤っていると壊れたDOMができます。

たとえば p の中に div を置く、といった例です。
-->

---


## コンテンツモデル

<ContentVenn />

<!--
コンテンツモデルは「どの要素の中に何を置けるか」を決める語彙的ルールの中核です。

仕様では Kinds of content として、各要素をゼロ以上のカテゴリに分けています。

たとえば p のコンテンツモデルは Phrasing content なので、div のような Flow 専用の要素は入れられません。

語彙的ルールについてはそれぞれの要素がどのカテゴリに属しているか定義しているのでそこから確認できます。
-->

---

## 違反するコンテンツモデル例

| 親 | 子要素 | なぜNGなのか |
| --- | --- | --- |
| `p` | `div`, `p`, `ul` | 段落の中にブロックを入れられない |
| `label` | `div`, `p` | ラベルのコンテンツモデル外 |
| `a` | `a` | リンクの入れ子は不可 |
| `ul` / `ol` | `div` | 基本的に `li` |

<!--
コンテンツモデルの違反の一例を表にまとめました。

p の中に div や p、ul。

label の中に div や p。

a の中に a。

ul や ol の直接の子に div、といったものになります。
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
最後に意味論的ルールです。いわゆるセマンティクスと呼ばれている部分です。

本来要素がもつ用途とは異なる使い方をしている場合は違反になります。

HTMLの文法として正しい使い方をしていても伝えたい意味が異なることがあります。

たとえば、見た目のためだけに h1 を使う、ボタンを a で作る、といった例です。

h1のような見出しで大文字を作るのはDiscordのようなチャットツールではよく見られる形かもしれません。

ツールだけでは完全には検出できないため、人間によるチェックも必要となる部分です。

意味論は、HTMLの強みであるアクセシビリティに直結します。

-->

---
layout: section
---

# 2. VueでHTMLはどのように<br>使われているのか

<!--

次にVueの中でHTMLを書く際にどうコンパイラ側で解釈され、HTMLの正しさについてはどこまで保証するのかを見ていきます。

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

<!--
改めて、VueでもHTMLはDSLとして活用されています。見た目はHTMLですが、最終的には仮想DOM生成の関数へと変換されます。
-->

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

<!--
Vue SFCのコンパイルは次の3段階に分けられます。

1. Parse — void要素・名前空間・実体参照など、HTML寄りの字句ルールでASTを作る
2. Transform — Vueディレクティブや最適化をASTに適用する
3. Generate — 最終的にJavaScriptに変換する

まずParse時点で壊れているHTMLの書き方を検知してエラーを出せます。ここが字句的ルールの守備範囲です。
-->

---
layout: center
---

# Q. `<div />` はパース可能か

<!--
ここでパースにまつわるクイズです。

div 要素の自己完結タグはパース可能でしょうか？
-->

---

## A. パース可能

- Vueでは`<div></div>`として解釈される
- ASTに含まれる`isSelfClosing`の有無で判定している
- `<div v-text="Vue Fes Japan" />` = `<div>Vue Fes Japan</div>`
- `<div />Vue Fes Japan` は `<div></div>Vue Fes Japan` となる
- Custom Elements、Vueコンポーネントも自己完結タグが可能

<v-click>
  <div mt="12">
    <p text="8" font="bold">ただしHTMLの仕様として<code>&lt;div /&gt;</code>は有効ではない</p>
  </div>
</v-click>

<!--
答えは、パース可能です。Vueでは自己完結タグが付いているものをdiv要素の開始と終了タグのものとして解釈されます。

Custom Elements や Vueコンポーネントも自己完結タグが可能であり、これは解釈されるASTに含まれる isSelfClosing の有無で判定しています。

v-text を付けた自己完結タグは、中身が入った div としてレンダリングされます。

後ろにテキストを置いた場合は、空の div のあとにテキストが続きます。

ただしHTMLの仕様として、div の自己完結タグは有効ではありません。ここはVueのパーサーとHTMLの仕様とのズレとして理解しておくことが必要です。
-->

---

## 自己完結タグにまつわる余談

- Prettierのフォーマットでは必ず閉じタグが付くようになっている
- Biomeはオプションで変えられるようにしている
  - `--html-formatter-self-close-void-elements=<always|never>`
- SvelteはRich Harris氏が見直してマイグレーションツールが作成される
  - `npx svelte-migrate self-closing-tags`

<!--
Vue以外での自己完結タグに関する余談についても紹介します。

Prettierのフォーマットでは必ず閉じタグが付くようになっています。近年見直しがされそうな雰囲気もありますが、ここは変更できないことは注意です。

一方でBiomeのフォーマットではオプションで変えられるようになっています。デフォルトでは自己完結タグを付けないように変更されています。

SvelteにおいてはRich Harris氏が自己完結タグの挙動を捉え違いていたことを反省し、修復するためのマイグレーションツールが作られました。

ライブラリやフレームワークごとに慣習が分かれている、という部分についても覚えておくとよいと思います。
-->

---

## コンテンツモデルは警告してくれる

<img src="./images/vue-nesting-warning.png" alt="Vueのテンプレートで p の中に h1 や li を置いたときに、HTML仕様上のネスト違反として警告が出ているエディタ画面" width="720">

- `compiler-dom` の `validateHtmlNesting` (Vue 3.4)
- **開発時の警告**で、厳密にはコンパイルエラーではない
  - SSRにおけるハイドレーションミスマッチを防ぐ意図

<!--

では、Vueは字句的ルール以外何もしないのかというと、そうではありません。

Vue 3.4以降、compiler-dom の validateHtmlNesting により、不正なネストが開発時に警告されます。

SSRにおけるハイドレーションミスマッチを防ぐ意図のあるありがたいDXですが注意点があります。

これはあくまでも開発時の警告であり、明確なコンパイルエラーではありません。警告を無視すればそのまま動いてしまいます。
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

<!--
以上より、Vueコンパイラが見る範囲は次のとおりです。

字句的ルールはパースしてくれるような仕組みがあるという点では出来ていると思います。

語彙的ルールは開発時の警告のみという点で完全にできているかというと微妙なライン。

意味論的ルールに関するものはまったくないのでバツと判定しています。

そのため語彙的・意味論的なルールは別の仕組み、今回取り上げる静的解析の仕組みで対応する必要があります。
-->

---
layout: section
---

# 3. HTMLの正しさを<br>静的解析で守る

<!--
最後のパートになります。

ここからは残りのHTMLの正しさを各Lintツールでどのように守っているのかを見ていきます。
-->

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

<!--
そもそも、なぜ静的解析という手段が必要なのか。

私なりの結論としては、決定論としての判断をAIエージェントに与えられるようにするためです。

現在の開発において大半の人たちはAIエージェントを活用した開発をしていると思います。

ただAIのみの判定は非決定論的です。

賢くてもモデル依存となり、確実性は薄くなってしまいます。

HTMLの構造的に正しいか、型安全か、内部で矛盾していないかを静的解析で決定論的に証明して

そして解析するまでのスピードも兼ねているとなおよい、というのが今の現場感だと思います。
-->

---

## ESLint - eslint-plugin-vue

- [`vue/no-parsing-error`](https://eslint.vuejs.org/rules/no-parsing-error.html) で`<template>` 内の構文エラーを報告できる
  - WHATWG HTMLの**字句的**な構文エラーを多く検知できる
  - ただし自己完結タグに関するチェックのみはデフォルトで無効になっている
- 語彙的ルールを守れるものは確認できず
- [`vue/html-button-has-type`](https://eslint.vuejs.org/rules/html-button-has-type.html) が意味論的に扱える

<!--
最初に見ていくのはESLintです。

VueのESLintといえばeslint-plugin-vueが有名です。

このプラグインでは vue/no-parsing-error で template 内の構文エラーを報告できます。

HTML仕様における字句的な構文エラーを多く検知でき、essential 系プリセットにも含まれているルールです。自己完結タグに関するチェックのみは、デフォルトで無効になっています。

これは字句的なルールですが、ランタイムを通さずにコードだけ見て気付くことができることで優位性があります。

しかしこのプラグインにおいて語彙的ルールを守れるものは確認できませんでした。

代わりに意味論的に扱えるものとしてbutton要素のtype属性値を強制する vue/html-button-has-type などが唯一あげられそうです。
-->

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

<!--
アクセシビリティという形から意味論を守れるのが eslint-plugin-vuejs-accessibility です。

たとえば form-control-has-label では、ラベルと入力側のコンポーネントを指定できます。
-->

---

## ESLint - html-eslint

- HTMLのLintを行うeslint
- React, Svelte, Angularのサポートあり
- ただしVueは未対応

<!--
ちなみにESLintには、HTMLのチェック用途として html-eslint もあります。React / Svelte / Angular のサポートはありますが、現時点ではVueは未対応です。
-->

---

## Biome

- リンター・フォーマッターがまとまったオールインツール
- [`noMisplacedListElements`](https://biomejs.dev/linter/rules/no-misplaced-list-elements/) は語彙的チェック
- 部分的な意味論的なチェックもできる
  - [`noDuplicateAttributes`](https://biomejs.dev/linter/rules/no-duplicate-attributes/) 
  - [`noObsoleteTags`](https://biomejs.dev/linter/rules/no-obsolete-tags/) 
  - [`useSemanticElements`](https://biomejs.dev/linter/rules/use-semantic-elements/) 
- さまざまな言語やライブラリに対応しており、Vueでも使用可能

<!--
リンター・フォーマッターがまとまったオールインツールとして Biome があります。さまざまな言語やライブラリに対応しており、Vueでも使用可能です。

li要素を適切な親要素に使用しているかといった部分的な語彙的ルールのチェックができたり、
重複した属性をチェックしたり、非推奨のHTML要素を使っていないか、WAI-ARIAによる属性値の扱いが間違ってないかの意味論寄りのチェックもできます。

さらに Biome では、HTML拡張言語のサポートが進んでいます。

v2.3.0以降、Vue / Svelte / Astro を標準で扱え、ファイル内の HTML / CSS / JavaScript をフォーマット・リントできます。
フルサポートはまだ実験的なので、明示的に有効化する必要がありますが、一定使えるようなレベルに放っていると思います。
-->

---

## Oxc

- **OxLint**: Linterツール。Vueは固有のルールチェックが主
- 現時点では`<template>`の内部をチェックする機構はない
- [RFC: Embedded Framework Support for Oxlint (Language Plugins)](https://github.com/oxc-project/oxc/discussions/21936)
  - このRFCが進めば対応されそう？

<!--
OxLint は Linterツールで、Vueは固有のルールチェックが主です。

ただし現時点では template の内部をチェックする機構はありません。

Embedded Framework Support の RFC が進むと、対応の見通しが見えてきそうです。
-->

---

## Markuplint

- HTML Living Standard ベースの**適合性検証**ができる
- `@markuplint/vue-parser` / `@markuplint/vue-spec` で `.vue` を扱える
- HTMLの正しさを幅広くチェックできる

<!--
ESLint や Biome / Oxc が得意なのは主に字句・構文寄りのものです。コンテンツモデルや意味論的な部分までを、厚く見てくれるには足りていませんでした。

その隙間を埋めるように存在しているのが Markuplint です。

Markuplintの長所は、Living Standardベースの幅広い検証ができることです。

多くのパーサーやスペックを持っており、HTML以外でもチェックすることが可能となっています。
Vueにおいてはvue-parser と vue-specが用意されており、こちらを使用できます。
-->

---

## Markuplint - parse-error

HTML Living Standardにおけるトークナイズやツリー構築時の非致命的なパースエラーを検知

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

<!--
parse-error では、HTML Living Standardにおけるトークナイズやツリー構築時の非致命的なパースエラーを検知できます。重複属性を error にする、ネストしたコメントを warning にする、といった設定ができます。
-->

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

<!--
permitted-contents では、コンテンツモデルを仕様データから検証できます。ul の直下に div を置くと不正、li なら正しい、といった判定です。

ここでようやく語彙的ルールのチェックが可能となりました。
-->

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

<!--
Markuplintはその名の通りマークアップに対するLintができるものになります。つまり意味論寄りのルールも多く含まれています。

今回はその中でも有用なルールをいくつか紹介します。

no-pseudo-list は、ビュレット文字で箇条書きを擬似している箇所を止め、ul / li を使うよう求めます。
-->

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

<!--
no-consecutive-br は、連続する br に警告します。改行の重ね打ちで余白を作る代わりに、段落や余白用のスタイルへ寄せましょう。
-->

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

<!--
no-skipped-heading-level は、見出しレベルを飛ばすと警告します。h1 の次に突然 h3、といったジャンプをチェックします。
-->

---

## Markuplint - Pretenders

- コンポーネントを描画結果の**HTML要素に見立てるオプション**
  - `FileList` → `ul`、`FileListItem` → `li` のようにコンテンツモデルを評価できる
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

<!--
Markuplintの優れた機能として Pretenders というものがあります。これはコンポーネントを実際の描画結果のHTML要素に見立てるオプションです。

たとえば FileList を ul、FileListItem を li のようにコンテンツモデルを評価できるようになります。これによりVueコンポーネントにもHTMLチェックができるようになります。

v5からは experimental で自動スキャンも設定可能です。

Markuplintによって「コンテンツモデルをチェックする」と「意味論としてチェックする」ことができるようになりました。
-->

---

## Vize

- ubugeeeiさん作・RustによるVueのオールツールチェイン
- HTML適合性を Vue固有ルール / アクセシビリティから分離して扱える
  - Vue: https://vizejs.dev/rules/vue/index.html
  - HTML: https://vizejs.dev/rules/html/index.html
  - a11y: https://vizejs.dev/rules/accessibility/index.html

<!--
その流れの先に、近年登場しているのが Vize です。

これはubugeeeiさん作・RustによるVueのオールツールチェインで、HTML適合性を Vue固有ルール / アクセシビリティから分離して扱えます。
-->

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

<!--
特に重要なのが html/cross-component-nesting です。単ファイルでは合法でも、コンポーネント合成で壊れるネストを、ファイル横断で止められます。vize lint --cross-file でファイル横断チェックができます。

たとえば App.vue で p の中に InfoCard を置き、InfoCard のルートが div だと、各ファイル単体では合法でも、合成結果は実質 p の中に div となり不正です。

Vizeはこの「合成後」の確認が自動でできるところが優れている点だと思っています。
-->

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

<!--
あわせて templateSyntax もあります。コンパイラ側は自己完結タグがある場合に警告するようにしており、モードの切り替えでエラーとしたり無視することもできます。

このほかにもVizeはLintに限らない多機能なツールを兼ね揃えています。
15:05からウェルネス×hacomonoトラックにてubugeeeiさんの発表もあるので気になる方は是非聞きに行ってみてください。

-->

---

## まとめ：Vueで正しいHTMLと向き合うために

1. HTMLの正しさを保つためのルールを把握する
1. Vueコンパイラの守備範囲を理解する
1. 静的解析でHTMLの正しさを保障する

<!--
まとめです。Vueで正しいHTMLと向き合うために必要なことを発表しました。

１つはHTMLの正しさを保つためのルールを把握すること。

２つめはVueコンパイラの守備範囲を理解すること。

３つめは静的解析ツールのHTMLの正しさを守れる違いを知ること。

静的解析ツールは各人の環境で合わせて必要なものを組み合わせていくのが良いと思いますが、私個人としてはVizeがデファクトになっていく未来もいいなと思っています。

今回はVue SFCのtemplateに着目しましたが、Vue単体ではheadは触れてはいないためunheadといったライブラリなどの別のアプローチにて要素がどう入るか知る必要はあります。

HTMLの仕様は今も更新されています。

HTMLの用途が広がっても最終成果物はHTMLであるという前提を忘れず、今回の内容をもとに堅牢なマークアップとアクセシブルなアウトプットを実現していきましょう。

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
- [Oxlint & Oxfmt Compatibility | The JavaScript Oxidation Compiler](https://oxc.rs/compatibility)
- [Vue JSX](https://vuejsx.dev/)
- [eslint-plugin-validate-jsx-nesting](https://github.com/MananTank/eslint-plugin-validate-jsx-nesting)
- [弁護士ドットコム 新卒研修2025 HTML/CSS（太田良典）](https://speakerdeck.com/bengo4com/20250405-bengo4com-htmlcss)
