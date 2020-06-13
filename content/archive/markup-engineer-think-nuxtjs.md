---
title: マークアップエンジニアから見たNuxt.jsの可能性
description: Vue.js nuxt.js
date: 2017-12-21
author: yamanoku
---

この記事は[Vue.js #2 Advent Calendar 2017](https://qiita.com/advent-calendar/2017/vue2)の21日目の記事です。

去年も参加させていただいたのですが、今年は４つもカレンダーが作成されてVue.jsの勢いすごいですね。

今回、自分がこの記事で書く内容は特にテック的なことではなく、`Nuxt.js`への感想記事や思い出記事みたいなのになりますので、`Nuxt.js`の技術的な内容を期待していた方はすみません。こういった人間もいるのか程度にご覧いただけたら、という感じです。


今回、自分がこの記事で書く内容は特にテック的なことではなく、`Nuxt.js`への感想記事や思い出記事みたいなのになりますので、`Nuxt.js`の技術的な内容を期待していた方はすみません。こういった人間もいるのか程度にご覧いただけたら、という感じです。

## テンプレートエンジン・プリプロセッサの多様化

いきなり`Vue.js`、`Nuxt.js`という主題から脱線してしますがご了承ください。

Node.jsというものが世に出てから、おそらく、宗教上の理由などを抜きにすれば、HTMLやCSSを素で書くことはなくなったと思います。いわゆるテンプレートエンジン・プリプロセッサの時代。

人々はHTMLを`Pug`(`Jade`)で書いたり、CSSを`Less`、`Sass`、`Stylus`といったもので書くようになったおかげで作業効率は格段にあがったと思います。ここに各種タスクランナーを組み合わせれば更に恩恵を受けられるものになることでしょう。

とくに`Pug`というものと出会って、マークアップエンジニアとしての自分は今までSSIやphpでの処理しかできなかった「共通化」部分を実現して静的に出力できるというのは感激ものでした。たとえば、

```pug
doctype html
html(lang="ja")
	head
		meta(charset="UTF-8")
		meta(http-equiv="X-UA-Compatible" content="IE=edge")
		meta(name="viewport" content="width=device-width, initial-scale=1")
	body
		block contents
```

みたいな感じにして

```pug
extends _tmpl

block contents
	h1 Hello World!
```

な感じで出力すると

```html
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<h1>Hello World!</h1>
	</body>
</html>
```

みたいな感じになります。あとは変数での宣言も出来るので先程の`_tmpl.pug`に以下のように`param` という変数を設定して

```pug
doctype html
html(lang="ja")
	head
		meta(charset="UTF-8")
		meta(http-equiv="X-UA-Compatible" content="IE=edge")
		meta(name="viewport" content="width=device-width, initial-scale=1")
		block param
		title #{title}
		meta(name="description" value=description)
		meta(name="keywords" value=keywords)
	body
		block contents
```
以下のようにして出力すると

```pug
extends _tmpl

block param
	- var title = "なにかのサイト"
	- var keywords = "キーワード1, キーワード2, キーワード3";
	- var description = "なにかしらの説明";

block contents
	h1 Hello World!
```

こんな感じで、ページ毎に共通のものと、そのページ独自のメタデータなどを静的ファイルとして入れ込むことができます。

```html
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>なにかのサイト</title>
		<meta name="keywords" content="キーワード1, キーワード2, キーワード3">
		<meta name="description" content="なにかしらの説明">
	</head>
	<body>
		<h1>Hello World!</h1>
	</body>
</html>
```

これを今まで手動ですべて管理していた身と考えれば革新的だったのがわかると思います。

## フロントエンドとの境界線をどう超えるか問題
自分がマークアップエンジニアとして仕事をしてからは、上記のようなテンプレートエンジンやプリプロセッサを駆使して業務を行っていたのですが、まれにJS開発におけるフロントエンド領域の仕事依頼がくることがあります。

マークアップ上ではせいぜい`VanillaJs`や`jQuery`を使用して身軽なアニメーションや状態の管理などは行えました。しかしガッツリとしたフロントエンド業務であれば、様々なモジュールを駆使して、`npm`コマンドや`browserify`や`webpack`などを駆使してバリバリ開発しているわけで、そういったものを通常では使用しない人間にとっては、環境設定の時点で大きな障壁となっていたりします。

自分自身としてもそうしたフロントへの境界線をどう飛び越えていくかについて思い悩みつつも、先人が敷いてくれた環境設定というレールの上で、どういう軌跡をおってきたかを逐一調べながらやるしかなかったので、いきなりバリバリと進められるわけでもなく、どうやって段階を追ってやっていけばいいのかをヤキモキしていた時期がありました。

## Vue.jsとの出会い

そんな自分でも何かうまく扱えるフレームワークはないかと調べてみた所、どうやらVue.jsというものが分かりやすいという情報を仕入れ、昨年に、稚拙ではありますが、SPAなるものを作り上げるところまでできました。[(去年の記事)](https://qiita.com/yamanoku/items/41df5c05c5c89714ea3c)

なるほどこうして動かせるのかと理解を進めるのと同時に、「[vue-cli](https://github.com/vuejs/vue-cli)」というコマンドラインから簡単にプロジェクトを作れるものを知って、参入障壁というかどうやっていけばいいのかの理解を進めるのにはもってこいでした。

もちろん他のフレームワークでも近しいものがあるかもですが、フレームワークの明快さと馴染みのある感じ、そして`vue-cli`という存在において、`Vue.js`は自分にとって道を切り開いてくれる開拓者のような存在でした。

## Nuxt.jsを知る
そんな中、`Vue.js`からの派生フレームワークで今年バージョン1.0がリリースされた`Nuxt.js`というものの存在を知りました。

[![Screenshot from Gyazo](https://gyazo.com/0a683b30754e8e77285eb23fd5230cb0/raw)](https://gyazo.com/0a683b30754e8e77285eb23fd5230cb0)

最初は`Vue.js`を使ってSPAやSSRといった開発が容易にできる！といった評判を聞いており、自分は「へ〜こういうのがリリースされたのね」という感覚で受け取っていて、あとで触ってみるかなーという感じで、知った当時はそれほど興味なりはそこまでといった感じでした。

時は変わって10月某日、さくらインターネットさんに開催していただいた「[さくらの夕べ　「さくらインターネットのエンジニアは Vue.js をこんな風につかってます](https://connpass.com/event/67740/)」にVue.js関連の話をやるとのことで参加してきました。=> ([レポート記事](http://yamanoku.hatenablog.com/entry/2017/10/31/%E3%80%8C%E3%81%95%E3%81%8F%E3%82%89%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%81%AE%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AF_Vue_js_%E3%82%92%E3%81%93%E3%82%93))

その中で@esukeiさんがNuxt.jsに関連してを紹介していただいたのですが、ひとつ自分の中で引っかかったとある機能がありました。

それは **静的ファイルを出力する** という`nuxt generate`コマンドがあるということでした。そしてそれをもとにウェブサイトを作れるのではないか？という内容をおっしゃられていました。

先述したように、これまでマークアップエンジニアとしての私は各種テンプレートエンジンやプリプロセッサ、そしてタスクランナーを使い業務を行っていました。

それはそれで問題なかったのですが、**CSSの管理問題**や**コンポーネントとしての共通化**、そして**JS部分との連携**も考えねばならないのに、それぞれを別個として出力させて、合わせたときにどうなるかを考えなければならなかったというのがあります。
そういった部分を解消しうる静的なマークアップ環境が整う都合のいいものは何か無いだろうか…と考えていました。

その問題をおおよそ解決しうるプロダクトとして`Nuxt.js`、そして`nuxt generate`というものがなのではないか、と感じました。

## Nuxt.jsの良さそうな所
### ディレクトリ構成が明瞭的
Nuxt.jsは取っ組みやすい[スターターキット](https://github.com/nuxt-community/starter-template)を用意してくれているスグレモノで`vue-cli`を使えるようにして以下で作成できます。

```bash
$ vue init nuxt-community/starter-template test
```
```bash
? Project name test
? Project description Nuxt.js project
? Author yamanoku <0910yama@gmail.com>

   vue-cli · Generated "test".

   To get started:

     cd test
     npm install ## Or yarn
     npm run dev
```

で上記プロジェクト名やプロジェクト説明、著者の入力をエンターでタンタンターンッとやって、作成したディレクトリ（上記で言うとtest）に移動するとこのような構成になっています。

```
├── assets
├── components
├── layouts
├── middleware
├── pages
├── plugins
├── static
└── store
```
ディレクトリの詳細は[公式ページ](https://ja.nuxtjs.org/guide/directory-structure)を参照いただければ、と思いますが、単純にページのみをつくる想定で考えると、

```
├── components（パーツ集）
├── pages（ページ単位）
└── static（画像ほか静的なファイル置き場）
```

最悪これだけでもページ作れると思います。必要なものは適時追加いただければという感じで。

ここで良いなと感じる部分は**どこに何を担当しているのかを一見して分かりやすい**というのがあります。なのでこれはここに入れておくというルールも固定化できると思います。

### 詳細な環境構築が不要
ここから開発をはじめるにあたり、まず`npm i`か`yarn`でモジュール一覧をダウンロードするのですが、通常であれば`webpack`だったり`gulp`なりのビルドツールやタスクランナーを設定することがあると思いますがそれらは不要です。

必要なモジュールほかは`npm i -D`や`yarn add -D`で追加して`import`などで導入できるのですが、ここからCSSフレームワークなども簡単に設定することができます。例えば

```bash
yarn add -D bulma
```
このように追加した後に、以下`nuxt.config.js`に以下を追記すると、

```js
module.exports = {
  head: {
    css: [
      'bulma/css/bulma.css'
    ],
  }
}
```

全ページ共通で`bulma.css`が使えます。

### １ソース完結、scoped CSS革命
`Vue.js`をベースとしているので、１ソースの中で、`html`、`css`、`JavaScript`をそれぞれ書ける利点があります。さらに、`html`には`pug`と`css`には`sass`、`less`、`stylus`のプリプロセッサ言語も使用できちゃいます。
コンポーネント設計やAtomicDesignにおける個々のパーツを管理する設計思想が流行ってはいますが、`Nuxt.js`はそれを実現しやすいものだと思っています。

そしてCSS管理においては`scoped CSS`を使用すると、コンポーネントやレイアウト、ページ単体のCSS管理ができます。

[![Screenshot from Gyazo](https://gyazo.com/3ba66219ffec42b5e34e50a659d165f4/raw)](https://gyazo.com/3ba66219ffec42b5e34e50a659d165f4)

こうすると

[![Screenshot from Gyazo](https://gyazo.com/a72042dcd05dfb09e4b085f427e1cf95/raw)](https://gyazo.com/a72042dcd05dfb09e4b085f427e1cf95)

クラスにユニーク名が付与されてこういうことができます（画像のはNuxt.jsではないのですがイメージとして）。

@yasshさん投稿による「[vue-loaderのScoped CSSのスタイルが子コンポーネントのルート要素に効いてしまって辛い](https://qiita.com/yassh/items/7fb75904de19ff3bd3e8)」といった仕様の問題もありますが、使いこなせば強力な武器になるのではないかなと思います。

### ES6/ES7も対応できる＆トラインスパイルしてくれる
JavaScriptのナウい書き方にもバベルで対応しているので、レガシーな書き方からも脱せそうです。

### `<head>`情報も簡単に設定できる
こうしたJSフレームワークにおいて、`meta`情報などの`head`要素を弄るのはあまり情報がなかった、bundleされたjsを置くindex.htmlに設定するだけと思うのですが、共通であったり各種ページでの個別設定も簡易的にできます。

先程登場した`nuxt.config.js`で以下設定できます。

```js
module.exports = {
  head: {
    title: 'test', // <title>部分
    meta: [ // metaタグ関連
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '説明文説明文' }
    ],
    link: [ //linkタグ関連
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
```

さらに個別ページでは以下のような個別設定も可能です。

```html
<template>
  <h1>{{ title }}</h1> <!-- => <h1>Hello World!</h1> -->
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title, // => <title>Hello World!</title>
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
        // => <meta name="description" content="My custom description">
      ]
    }
  }
}
</script>
```

### PWA化も楽々導入。
話題のPWAに関しても`pwa-module`を追加すると利用できちゃいます。以下manifest設定とicon.pngを`static`に追加しておくと簡単に作成できます。

```js
module.exports = {
  modules: ['@nuxtjs/pwa'],
  manifest: {
    name: 'testApp',
    short_name: 'shortName',
    title: 'test',
    'og:title': 'ogtest',
    description: 'appDescription',
    'og:description': 'ogDescription',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
  workbox: {
    dev: true, //開発でもPWAができる
  }
}
```
これでオフラインでも確認できる静的ページを作成できちゃいます。

## Nuxt.jsの悩ましい所
上述した点はプロダクトを利用する面で良さ気なところでしたが、すぐに導入するには難しいところもあります。

### minifyされる点
`yarn generate`で`dist`ディレクトリが作成されると、生成された`html`は基本minifyされています。
そのままでよければいいのですが、出力されたファイルを確認したいときに可読性がわるくブラウザのデベロッパーツールでminify解除するなどしないと階層化されている内容をみれないです。
どうやらminify制御は`nuxt.config.js`内では`html-minifer`を使用しているので`generate`内で以下のように設定してみると多少なりの制御はできるみたいです。ただ思い通りの調整をするにはもう少し調査が要りそうです。

```js
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    },
  }
```
関連： https://nuxtjs.org/api/configuration-generate#minify

### 同ディレクトリ内に違うファイルを作成できない
これは自分の知見不足なのかもしれませんが

```
pages
├── index.vue
└── one
    ├── two.vue
    └── index.vue
```
このような構成の場合に`generate`を動かすと

```
├── index.html
└── one
    ├── two
    │   └── index.html
    └── index.html

```
という感じで`one/two.html`というファイルは作成されません。この辺はrouterの設定次第なのかなと思いますが、少々不便です。

### Vue.jsを前提としているための学習コスト＆他フレームワークで再利用ができない
当たり前な部分ではありますが、`JavaScript`部分を動かすには多少なりとも`Vue.js`を理解しておく必要はあります。（個人的な感想ではありますが他のものと比較すれば理解はしやすいかなと思いますが）
また、他のフレームワークやモジュールなどを利用することもできないので、もしVue.js以外のフレームワークを使っていたりするときは選定する技術にするかを考える必要はあるかなと思います。

### まだまだ情報が少ないので知見を集め続けなければならない
公式日本語ドキュメントもある`Nuxt.js`なのですが、まだまだ出て日が浅いのもあるのと、制作事例も少ないため「こうするにはどうすればいい？」という情報共有がまだ少ないかなという印象です。
上述した不明点もすぐ調べてわかれば良いのですが多少のググり力がないと厳しいor見つからない場合もあるので、「こうしたときにどうすればいいのか？」というのを出来る限り埋めておかないと厳しいかなとは思います。
[公式のIssue](https://github.com/nuxt/nuxt.js/issues)などを眺めてみるとどうすればいいのかなどの話はちらほら見れます。

## 導入は難しいかもしれないが、動かしてみる価値はある。
メリット面とデメリット面を自分なりに上げてみましたが、１つのプロジェクトを無事完結するためにはまだまだ難はあるかなと思います。もしかしたら、前よりも効率が落ちる可能性もあるかもしれません。ですが、動かしてみる価値はあるのではと思っています。

今後`Nuxt.js`を使った案件として実績をあげるためにも、まずは個人的に動かしてみるのと、これまでに携わった案件でどこまで代用できるのか、というのを考えてみると良いのかなと思っています。そうすればどの点で有利でどの点で不利になるかが明確になるんじゃないかなと感じます。

今回はマークアップの視点で考えてみましたが、SPAやSSRを簡単にやってみるなど「試してみたかったことをアレコレやってみる」最初のきっかけとしてはかなり導入の敷居が低いと思うので、どんどん利用者や利用実績が増えていけばいいなぁと感じています。
