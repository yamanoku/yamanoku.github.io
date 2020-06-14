---
title: よく分かってなくてもVue.jsで動くモノが作れた話
description: Vue.js 初心者 JavaScript
date: 2016-12-09
author: yamanoku
---

この記事は、[Vue.js Advent Calender 2016](http://qiita.com/advent-calendar/2016/vue) 9日目の記事です。

（アドベントカレンダーには）初投稿です。使うべきではない言葉なので修正してくださいタイトルですが実際そうだったので、何卒よろしくお願いします。

## これを書いてるひとのスペック

マークアップエンジニアとフロントエンドエンジニアの境目を行ったり来たりしています。
あまりフレームワークの理解がそれほどないので地味にフルスタック気味でJS書いたりしています。最近はどっちかというとディレクションとか進行の方に首突っ込んでいます。

## 発端

フレームワークをそろそろ何か触ってみないといかんとは思っており、社内のとあるプロジェクトでReactを使ってはいましたが大規模だったのと、どうやら暖かそうだったのもあり、そこまで敷居が高くなさそうな別のものはないかと探した所、Vue.jsと巡り会いました。

## 開発環境を整える

Vue.jsはサンプルコードで見るからに簡単に使えるウリではあるのですが、これを使ってちゃんとサーバーにアップして確認できるものをビルドできるようにしたいと思いました。

自分はまだバベったりするのとかビルドさせるのに全然慣れてないのでいろんなチュートリアルを見てもうまく活かしきれてませんでした。

そんな中１からVue.jsを使うのではなく、[vue-cli](https://github.com/vuejs/vue-cli)と出会ったことで自分は形にできるところまで進められました。ありがとう[vue-cli](https://github.com/vuejs/vue-cli)。

なので初めてVue.jsを触る人はvue-cliを使いましょう。

### vue-cli

自分よりも分かりやすくご解説されている方のがあるのでこちらご確認ください。

[Vue.js を vue-cli を使ってシンプルにはじめてみる](http://qiita.com/567000/items/dde495d6a8ad1c25fa43)

つまりはCompomentとしてhtmlとjsとcssが一括で扱えるのがとても分かりやすくて良いということです（自分基準）。あとwebpackかbrowserifyをガッチリしたのかシンプルなのかを選べるのも良いかもです。

### バージョンに関して
vue-cliでいろいろやろうとしていた所だったんですが、Vue.js 2.0の正式リリース前だったのもあり、ひとまず1.0でやったほうがいいかなということで実は1.0で作っています。
しかしながら今は2.0が主流と化したようです。正直途中で直す勇気がありませんでした。ごめんなさい。

## やりたいこと

一応やりたいことは考えており、自サイトをそろそろドメイン新しくしてリニューアルしたいなという気持ちが高まっていたのでこういうのはどうだろうと考えた。

- [ ] 成果物を一覧で表示しよう
- [ ] ページはコンポーネントで１つ１つ作るんじゃなくてjsonとかから拾ってきて表示したい
- [ ] データバインディングできるみたいなので検索窓つけたい
- [ ] あとルーター使いたい
- [ ] できればウザくない程度にトランジション効果もつけたい

よく分かってないところもあったので苦労しましたが、なんとかこれを形にできました。個人的にはjsonのところがしんどかったです。

## 成果物

こんなんになりました。以下よりご確認ください。

- [デモページ](https://yamanoku.github.io/vue_portfolio_templete/)
- [GitHub](https://github.com/yamanoku/vue_portfolio_templete)

結局こういうのってSPAと呼べるんでしょうか？　なんとなく違う気はします。

## 個人的にアレコレしたこと

ソースはGitHubに置いてますので確認していただければですが、一応アレコレした部分も軽く紹介です。

### router設定
![e9122c8c2d50af61f34acaa0a81a7068.gif](https://qiita-image-store.s3.amazonaws.com/0/49004/12fe11ae-f0c4-0c12-d26d-b4bfc9c5c2cb.gif)

```js
router.map({
    '/home': {
        component: Timeline
    },
    '/work/:number/detail': {
        component: Detail
    },
    '/profile': {
        component: Profile
    },
    '*': {
        component: NotFound
    }
})
router.redirect({
    '/': '/home'
})
```
404を出させたかったが色々と苦労した。最初は:number部分を出していたから、どんなものでも受け入れてしまってました。うまくやれるやり方もあるんだろうけどこの形で落ち着きました。

### 詳細部分
![9706be07692adf9fa25b2742f65b43bf.gif](https://qiita-image-store.s3.amazonaws.com/0/49004/86774d6c-f37e-b9c5-0bf4-bc50a4643811.gif)

```vue
<template>
  <article transition="fade" v-cloak>
    <template v-for="list in lists">
      <div class="detail" v-if="$route.path === '/work/' + list.id + '/detail'" :style="{ backgroundImage: 'url('+ list.image +')' }">
        <h2 class="detail_heading">No.{{list.id}} - {{list.title}}
          <span class="detail_type">{{list.type}}</span>
        </h2>
        <p>{{list.desc}}</p>
        <a href="{{list.url}}" target="_blank">{{list.url}}</a>
      </div>
    </template>
    <a class="detail_btn" v-link="{ path: '/home' }">Back Home</a>
  </article>
</template>

<script>
import jsonData from './data/list.json'
export default {
  data() {
    return {
      lists: jsonData,
    }
  }
}
</script>
```
最初v-forの回し方をどこにするか考えてて結局templeteの中で書くことに成功したのだがこれでいいのかと自問自答しました。結局よい返し方が思い浮かばなかったのでここに落ち着いてます。

### 検索部分＋メイン部分
![30ab3916b6c6b4adc3fd444c4e1763df.gif](https://qiita-image-store.s3.amazonaws.com/0/49004/1cd16c7f-234e-e626-499d-9130aab3662a.gif)

```vue
<template>
  <section class="main" transition="main" v-cloak>
    <div class="textfield">
      <input class="textfield_input" type="text" placeholder="Search Words..." v-model="filterKey">
    </div>
    <p class="logo"><a v-link="{ path: '/profile' }"><img src="/images/icon_beta.png" alt=""></a></p>
    <div class="container">
      <div class="card" v-for="list in filterItems | filterBy filterKey">
        <a v-show="filterItems.length" v-link="'/work/' + list.id + '/detail'" :class="'card_img'+ list.id + ' card_img'">
          <img :src="list.image" :alt="list.title">
        </a>
        <div class="card_detail">
          <a v-link="'/work/' + list.id + '/detail'" class="filetype">[{{ list.type }}]</a>
        </div>
      </div>
    </div>
    <h2 class="no-result" v-show="!filterItems.length">
      <span>No results.</span><br />
      <span>\(^Д^)/</span>
    </h2>
  </section>
</template>
<script>
let filterKey
import imagesData from './data/list.json'
export default {
  data() {
    return {
      filterKey : '',
      lists: imagesData,
    }
  },
  computed: {
    filterItems: function () {
      return this.$eval('lists | filterBy filterKey')
    }
  }
}
</script>
```
検索ヒットしなかった場合も下の方で書いています。絵文字なのはGoogle fontsのパクリです。

ただ、検索に関してはjsonデータの文字列を全部もってくるみたいなので、/images/〜みたいに書いてると全部ヒットしちゃう。この辺もよい回避を探らなければならなそう。
（すみません間に合いませんでした。配列でヒットしたい部分だけfilterとか使うんですかね）。

## Vue.jsのよかったところ

Vue.jsのよいところは[とにかく公式で日本語ドキュメントがしっかりとしてある](https://jp.vuejs.org/v2/guide/)ということで、これは単にお前の英語力が足りてないだけだろというだけの話ではありますが、ともかく安心感がありました。良さ。

Vue.js紹介記事とかを見ていると割と簡単な実装をするものには使えるようで、コンポーネント単位で作れるというのも自分にはやりやすかったです。
対応もモダンブラウザのみという先進性も良いです（IE9どころかIE11ももういらない）。
それとScopedCSSもできるのでそのコンポーネント内だけで管理できるのでECSS的なCSS設計としてはよいなーとも。→ [感想記事](http://yamanoku.hatenablog.com/entry/2016/11/14/ScopedCSS%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E6%80%9D%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8)

## Vue.jsの悪かったところ

2.0リリースに伴いrouterもバージョンアップをして、公式日本語ドキュメントが一時的に消えたことですかね。絶望感がすごかったです。

あとこれは別に悪いところじゃないんですけど、GitHubでサンプルコードとか検索していると中国人の方が多かった印象です（作者の方も中国出身だから？）

## フレームワークを使ってみて

ひとまずこうした感じで形になるものを作ることが出来たのですが、出来上がったものをみると「これVue.js使う意味あったのか…」と思うような出来で、結局はまともなサービスを作っていない人間にまともなものは作れないという学びはありました。

とはいえ、現状のものよりもだいぶマシになるであろうレイアウトが天啓として頭に落ちてきたので、引き続き作ってみようということにはなっています。今度は2.0で作ってみます。できたらまた何かしら書いてみます。

あとホント恥ずかしい話ですが未だにFluxとかVuexについて理解が乏しいです。この辺も作りながら理解していければと思っています。それとES6も。

## おわりに

よく分かってなくても動くものが作れることに感銘を受けていたわけですが、何だかんだでここに至るまで色々な技術記事を拝見しました。先人の方々、ありがとうございます。

他の方々と比べて参考にならない記事ではありますが、一歩踏み出せない方たちに少しでも響けばいいかなと思っております。ともかく動けるものを触る・作るってのは大事ですね。
ここまでご覧いただきありがとうございました。

## 参考文献
- [https://jp.vuejs.org/v2/guide/forms.html](https://jp.vuejs.org/v2/guide/forms.html)
- [http://vegibit.com/vue-js-tutorial/](http://vegibit.com/vue-js-tutorial/)
- [http://engineer.recruit-lifestyle.co.jp/techblog/2016-09-15-try-vue-flux/](http://engineer.recruit-lifestyle.co.jp/techblog/2016-09-15-try-vue-flux/)
- [http://qiita.com/hosomichi/items/25041c1d46452de84aa6](http://qiita.com/hosomichi/items/25041c1d46452de84aa6)
- [http://qiita.com/hosomichi/items/e37c47d3f22e5738eb84](http://qiita.com/hosomichi/items/e37c47d3f22e5738eb84)