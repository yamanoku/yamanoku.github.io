---
title: CSSのプロパティ記述順についてどうするかの話
description: CSS CSS設計 css-comb
date: 2016-07-01
author: yamanoku
---

## 記述順どうしてますか？

会社ではルールを覚える前にアルファベット順で記載したらどうかという提案があり、[Googleの書式ルール](https://google.github.io/styleguide/htmlcssguide.html#Declaration_Order)ではそれらしい。

確かに複数人との作業では確実性のある法則性なんですが、個人的にはpositionのためのtop, bottom, left, rightや、widthやheightなどの本来関連する項目がアルファベット順で離れてしまってるのはかなり気持ち悪い気がしています。気のせいでしょうか。

```css
.hogehoge{
  bottom: 0
  height: 50px
  left: 0
  margin: auto
  position: absolute
  right: 0
  top: 0
  width: 100px
}
```

ちなみにプロパティのアルファベット順番は以下のとおりなんですって奥さん。
[http://ebisu.com/note/css3/#support](http://ebisu.com/note/css3/#support)

## なんとか他のプロパティ記述順ないんかな

調べてみたらMozillaとかW3Cで使っていたCSSガイドラインで良さ気なのがあった。

![20160310215214.gif](https://qiita-image-store.s3.amazonaws.com/0/49004/01d22edc-6844-6372-471d-1261073b9af7.gif)

引用：[http://unitopi.com/css-order/:title](http://unitopi.com/css-order/)

これは視覚的な要素に充てられるイメージなので自分としては管理やりやすい。
参考：[CSSプロパティ記述順序](http://qiita.com/devmgn/items/6154ccd2e23b2e65c769)

[サイバーエージェント](https://www.cyberagent.co.jp/techinfo/techreport/report/id=7926#section20)も似たような感じ。順番までは明確に書いてないけど

## どういうのがいいのか。結局元に戻る。

デメリットとしてはやはりこの順序を頭に叩きこまなければいかないので初期はどうしても時間がかかりそうってのが一番かな。

でも英語に馴染みのない人（プログラミングしててそれは酷いかもだけど）はアルファベット順を一度考えながら「Dの次はEだから」とか「bottomだからleftより上に記述せんと」と動きが止まっちゃうのも気になる。そもそもアルファベット順でやったことない人だって結局慣れの問題になるしそこまで大きく変わらん気はする。ということで元に戻ってしまった。

## CSScombを使用してみる

色々と悩んでみた中で、自分で記述順を悩むなんてアホくさいと思ったので**機械に全部処理してもらう**ということになりました。というわけで以下をインストール。

<img width="903" alt="csscomb.png" src="https://qiita-image-store.s3.amazonaws.com/0/49004/e238bc9b-77cb-b6bc-ff0d-319c5ff77e23.png">

```
npm install csscomb --save-dev
```

## CSScombってどういうものなの

[CSScomb](http://csscomb.com/)はcssのプロパティの整形をしてくれるプラグインで、[sublimeText](https://github.com/csscomb/sublime-csscomb)にもパッケージがあります。整形は[pleeease](https://github.com/danielhusar/gulp-pleeease)でもできそうな気がしたけど、思っているプロパティ整理はなさそうなので有用そうなものを使用してみました。

**以下はgulpを使っているので他の記述とは異なる箇所もあるのでご了承ください。**

### gulpfile.js

```js
var conf = require('./config.json');
var gulp = require('gulp');
var comb = require('gulp-csscomb');

gulp.task('style', function() {
  gulp.src(conf.PATH.css)
    .pipe(csscomb())
    .pipe(gulp.dest('./src' + conf.URL + 'css'))
});

// 僕の環境ではこんな感じ
gulp.task('stylus', function () {
  gulp.src(conf.PATH.stylus)
  .pipe($.plumber())
  .pipe($.stylus({
    use: function(style) {
      for(key in conf) {
        style.define(key, conf[key]);
      }
    }
  }))
  .pipe($.pleeease({
    autoprefixer: ['last 2 versions','iOS >= 8','Android >= 4'],
    rem: false,
    mqpacker: true,
    minifier: false
  }))
  .pipe(comb())
  .pipe(gulp.dest('./src' + conf.URL + 'css'))
});
```

### config.json

```json
{
      "TITLE": "test",
      "URL": "/",
      "hostname": "localhost",
      "PATH": {
            "css"        : ["css/**/*.css", "!css/_**/*.css"],
            "stylus"    : ["stylus/**/*.styl", "!stylus/_**/*.styl"],
      }
}
```
出力先のdestとかPATH設定とかは各自ご自由に。comb()追加するだけでやってくれます。


## 整形の設定を変えたい

gulpを走らせて、保存すれば自動的にcombしてくれるのですがこんな感じです。

<img width="512" alt="20160508211041.png" src="https://qiita-image-store.s3.amazonaws.com/0/49004/6ac8e8d8-4381-4e15-90ea-37c7ed36b1d3.png">

いわゆるデフォルトのソート順であったり、それぞれのプロパティの関連順に整列して1段空きがあったりなど、整形はしてくれたけど見た感じは微妙な感じかもしれません。また、このデフォルトの記述欄整形では他の人との連携でルールが明確で無いのでやりづらいのでこのままでは求めている記述順の正攻法にはなりません。

なのでCSScombの設定（config）をいじります。以下にアクセスどうぞ。

[http://csscomb.com/config](http://csscomb.com/config)

ここではどのような整形ルールにするかを設定できます。やってほしいrulesetを選んで順々に進めていきます（計24個）

```json5
{
  // プロパティが空のルールセットは削除
  "remove-empty-rulesets": true,
  // 最後のプロパティも含めてセミコロンを常に付ける
  "always-semicolon": true,
  // カラーコードを小文字にする
  "color-case": "lower",
  // インデントはタブ
  "block-indent": "\t",
  // 省略可能なカラーコードでも全部記載する
  "color-shorthand": false,
  // セレクター・要素は小文字にする
  "element-case": "lower",
  // ファイルの終端には改行する
  "eof-newline": true,
  // 小数点以下の指定時、0.1vhのように「0」を残す
  "leading-zero": true,
  // クオートはシングル指定
  "quotes": "single",
  // アルファベット順に整列
  "sort-order-fallback": "abc",
  // コロンの前にはスペースを入れる
  "space-before-colon": " ",
  // コロンの後にはスペースを入れる
  "space-after-colon": " ",
  // 子セレクタ・隣接セレクタ時の記号前にはスペースを入れる
  "space-before-combinator": " ",
  // 子セレクタ・隣接セレクタ時の記号後にはスペースを入れる
  "space-after-combinator": " ",
  // プロパティ指定が複数ある時は改行する
  "space-between-declarations": "\n",
  // 囲み部分の最初（｛）はセレクターのあと改行するようにする
  "space-before-opening-brace": "\n",
  // 最初のプロパティ指定は改行する
  "space-after-opening-brace": "\n",
  // 複数セレクターがある時は改行していく
  "space-after-selector-delimiter": "\n",
  // 複数セレクターの記号前にはスペースを入れる
  "space-before-selector-delimiter": " ",
  // 囲み部分の最後（}）は改行するようにする
  "space-before-closing-brace": "\n",
  // 囲み部分の最後に半角スペース１ついれる
  "strip-spaces": true,
  // タブサイズ指定時は以下自動設定される
  "tab-size": true,
  // 値が0のとき単位などは削除する
  "unitless-zero": true,
  // vendor-prefixは右揃えにする
  "vendor-prefix-align": true
}
```

すると設定をしてくれたjsonを吐き出すのでこれを **.csscomb.json** と命名して、gulpfile.jsと同じ階層のディレクトリに保存します。（もしくはプロジェクトのルートフォルダ）

んで整形したのが以下の感じです。

<img width="512" alt="20160508212012.png" src="https://qiita-image-store.s3.amazonaws.com/0/49004/d3bf3582-84fa-f6fa-dc4a-633580c5797e.png">

アルファベット順の整形、ベンダープレフィックスの頭揃え、カラーコードは小文字で３文字省略できるものは省略するなどでいじりました。

ちなみに自分で設定した.csscomb.jsonはこんな感じです。ご参考までにどうぞ。

```json
{
    "remove-empty-rulesets": true,
    "always-semicolon": true,
    "color-case": "lower",
    "block-indent": "\t",
    "color-shorthand": true,
    "element-case": "lower",
    "eof-newline": false,
    "leading-zero": false,
    "quotes": "double",
    "sort-order-fallback": "abc",
    "sort-order": ["..."],
    "space-before-colon": "",
    "space-after-colon": " ",
    "space-before-combinator": " ",
    "space-after-combinator": " ",
    "space-between-declarations": "\n",
    "space-before-opening-brace": " ",
    "space-after-opening-brace": "\n",
    "space-after-selector-delimiter": " ",
    "space-before-selector-delimiter": "",
    "space-before-closing-brace": "\n",
    "tab-size": true
}
```

これでcssだけを弄る人でもconfigのルールをガイドラインにしておけば、混乱はないんじゃないのかなと思います。テンプレートと素のcssとの併合とか考えだすとめんどくさくなるのでひとまずこれでいきましょう。

## その他

### sort-order機能について

もしアルファベット順ではなく独自の記述順がある際は **sort-order** で設定できたりします。なんかより分かりづらくなりそうですが。

```json
"sort-order": [
	[
	"font",
	"font-family",
	"font-size",
	"font-weight",
	"font-style",
	"font-variant",
	"font-size-adjust",
	"font-stretch",
	"font-effect",
	"font-emphasize",
	"font-emphasize-position",
	"font-emphasize-style",
	"font-smooth",
	"line-height"
	]
]
```
### アルファベット順とautoprefixerとの弊害について

以下のような場合は気をつけてください。

```css
.hoge {
  display: flex;
  display: -moz-box;
  display: -webkit-box;
}
```

アルファベット順に整理するようにするとwebkit系ブラウザでflexで指定したはずなのに後半の-webkit-boxが活きてflexレイアウトがうまくいかない場合がある。

その場合はsort-order機能でアルファベット順に揃えたくないものを設定すると外れます。

```json
"sort-order": [
    "display"
]
```

```css
.hoge {
  display: -webkit-box;
  display: -moz-box;
  display: flex;
}
```

### オンライン上での動作確認（.csscomb.json デフォルト設定）

以下にアクセスして整形したいプロパティを入れてcombボタンを押してください。
http://csscomb.com/online

![csscomb online](https://i.gyazo.com/29bd23845de49831e1bb29fd968c9cc7.gif)

割とスッキリできたので皆様もご参考にどうぞ。ちなみに僕はこの提案を社内で熱く語ってこの管理方法でやっていくこととなりました。

## 俺たちのプロパティ記述順道ははじまったばかり

とはいえ本当にこれでいいのかとぶち当たる日がいつか来るかもしれないので、そうならないためにも日々よい記述順をこだわってゆきます。俺の記述順はこんな感じだぜ！！みたいなのあったら是非とも教えて下さいませ。こちらからは以上です。

#### 参考にさせていただいた方々

- [gulp-csscombで任意のプロパティ記述順序を設定する](http://qiita.com/naoyashiga/items/bce4ad2fbc3cbeeff1d1)
- [gulp-csscomb（CSSのプロパティを並び替えてくれるプラグイン）の整形フォーマットを自分好みに変更する。](http://blog.sakurachiro.com/2015/07/gulp-csscomb/)
- [gulpで幸せにマークアップする](http://katoken.hatenadiary.jp/entry/2015/05/02/172537)
