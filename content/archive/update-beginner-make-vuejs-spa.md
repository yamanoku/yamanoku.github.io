---
title: よく分かってないでvue-cliで作ったVue.js製SPAをアップデートした話
description: Vue.js vue-cli vue-router
date: 2018-01-21
author: yamanoku
---

前回 => https://qiita.com/yamanoku/items/41df5c05c5c89714ea3c

特にきっかけはないのですが、表題のまんまのことやりましたので記録です。

## 以前の環境について

- Vue v1.0.0
- vue-cli v2.5.0 （おそらく）
- vue-router v0.7.13

で作ってました。`vue-router`がまずv2.0.0でもないというのが驚きですが、いかんせんVue.jsどころか諸々のスキルが低すぎたのもあったので、言われるがままなすがままにこの環境のままでつくりました。

使用した`vue-cli`テンプレートは`webpack-simple`でした。

一応動きます。
https://github.com/yamanoku/vue_portfolio_templete/tree/ver1.0.0

## 強制アプデして直そうとした

まず以前の内容からブランチを切って`npm-check-updates`をかけ`package.json`周りを強制アップデートしてから、諸々インストールして、devを走らせましたが、早速**webpackからぶっ壊れる**。

### webpack

- `resolveLoader`箇所の`root`を`modules`に変更

```js
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
```

```js
  resolveLoader: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
```

- `module`箇所のloader部分に`-loader`接尾語？が必要

```js
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
```

```js
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
```


- `webpack.optimize.OccurenceOrderPlugin()` => `webpack.optimize.OccurrenceOrderPlugin()`
  - 一番ひどい

１つ１つ調べながら対応していたのもあってなかなか`build`や`dev`が通らず苦労しました。

webpackのほうを修正してnpm-scripts周りが動作するようになったので動かし始めたのですが、お次は**Vue1.x => Vue2.0.0**へのアプデ修正周りです。

### Vue.js

**vue-migration-helper**
https://github.com/vuejs/vue-migration-helper

世の中にはマイグレーションヘルパーツールなる優れたものがあるのでこちらを使用しました（変更した部分に関しては後述）。
ターミナルで吐かれたエラーを１つずつ治し、ようやく0になってコンソールもエラーなくなったのですが、肝心のvue-router部分が動かず、ここで立ち往生しました。

１つ１つ見直していけば問題判明できそうというのもありましたが、個人のプロダクトで特に機能も複雑化していないものだったので、1つずつ手直しするよりも**vue-cliで１から作り直してやろう**という気持ちが勝ったのでやり直しました。

ちなみにですが立ち往生した作業途中もブランチ切って上げてます。どんなのか気になる人は参考までに見てみてください。
https://github.com/yamanoku/vue_portfolio_templete/tree/fail/updates

## vue-cliから作り直し

グローバルにある`vue-cli`をアップデートして、前回は`webpack-simple`テンプレートだったので今回は`webpack`を選択しました。余談ですがいつの間にか`pwa`なるものも追加されていたのですね。

さっそく`assets`内に必要ファイルを格納しました。以下変更部分

- `src`内各コンポーネント => `assets/components`
- 画像各種
    - ソース内で使うもの => `assets/img`
    - json内で使用する部分 => `static`
- jsonファイル
    - `src/data/list.json` => `assets/data/list.json`

`App.vue`と `main.js`は既存のままですが、router部分の記述は`src/router/index.js`に移動しました。

## Vue.js変更箇所

### `v-for`で回した時に`:key`指定

#### before
```html
<template v-for="list in lists">
  <div class="detail" v-if="$route.path === '/work/' + list.id + '/detail'" :style="{ backgroundImage: 'url('+ list.image +')' }">
```

#### after
```html
<template v-for="list in lists">
  <div class="detail" v-if="$route.path === '/work/' + list.id + '/detail'" :style="{ backgroundImage: 'url('+ list.image +')' }" :key="list.id">
```

> 2.2.0 以降で、コンポーネントで v-for を使用するとき、key は必須です

https://jp.vuejs.org/v2/guide/list.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A8-v-for

### `v-for`で作成したエイリアス値の属性値での設定

#### before

```html
<a href="{{list.url}}" target="_blank">{{list.url}}</a>
```
#### after

```html:after
<a :href="list.url" target="_blank">{{list.url}}</a>
```

`{{ xxx }}`指定が不要になる。

### `this.$eval` 廃止

以下記事参考にしました。ありがとうございます。

https://qiita.com/tmiame/items/34823b22cd3829321120#eval

以前のはjsonの画像URL部分も一緒に引っかかるのをどうにかしたかったんですがこれで解決しました。

## `vue-router` 設定時

### `router.start`

#### before

```js
router.start(App, '#app');
```

#### after
```js
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
```
Vueインスタンスに`router`プロパティを渡す。

https://jp.vuejs.org/v2/guide/migration-vue-router.html#router-start-%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88

### `router.map`

#### before

```js
router.map({
  '/home': {
    component: Main
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

#### after
```js
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Main',
      component: Main
    },
    {
      path: '/work/:number/detail',
      name: 'Works',
      component: Detail,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
```

redirect部分も一緒に配列に追加。

https://jp.vuejs.org/v2/guide/migration-vue-router.html#router-map-%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88

### `hashbang` 機能
不要となりましたのでこちらは削除。

## vue-router コンポーネント使用時

### `v-link` 廃止

#### before
```html
<a class="detail_btn" v-link="{ path: '/home' }">Back Home</a>
```

#### after
```html
<router-link class="detail_btn" to="/home">Back Home</router-link>
```

path指定での記述ではなくなりました。

### 名前付きルート指定

#### before
```html
<a v-link="'/work/' + list.id + '/detail'" class="filetype">[{{ list.type }}]</a>
```

#### after
```html
<router-link :to="{ name: 'Works', params: { number: list.id }}" class="filetype">[{{ list.type }}]</router-link>
```

`router.map`設定時に`name`を指定しておくと、ここでルートを特定できて非常に楽になりました。
上記設定でたとえば `href="work/001/detail"` を書き出してくれます。

https://router.vuejs.org/ja/essentials/named-routes.html

### `transition` 指定

#### before
```html
<article transition="fade">
```

#### after
```html
<transition name="fade">
```

どこかのタグに対して`transition`属性として付与するのではなく、`<transition>`タグで独立。

いままで各コンポーネントごとでかけてましたが一括化するために`App.vue`にのみに変更・設定しておきました。

```html
<template>
  <div id="app">
      <transition name="fade">
        <router-view />
      </transition>
  </div>
</template>
```

### `.v-transition` 廃止
`.v-enter-active`や`.v-leave-active`に変更。

## ほか修正したこととか

アプデに伴い、webpackやVue.jsと関係なく修正した部分について

### `flex-box` => `grid layout`

#### before

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
  margin: auto;
}
.container::before {
  display: block;
  content: "";
  order: 1;
  width: 22.75%;
}
.container::after {
  display: block;
  content: "";
  width: 22.75%;
}
.card {
  width: 22.75%;
  margin-bottom: 2.5%;
  background: #456a8e;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.25);
  transition: all .25s ease-in-out;
}
```

#### after
```css
.container {
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
}
.card {
  background: #456a8e;
  border-radius: 3px;
  transition: all .25s ease-in-out;
}
```

IE11は`.card`が`width:100%`になるが、コード量的には減ってすっきり。
ただ、`grid-row-gap`が%指定しても空きができなかった。`grid-column-gap`はできたけど両方に指定はできないか？

### `transition`効果

[![Screenshot from Gyazo](https://gyazo.com/df45ce6f156ec940727777b982b6bbc7/raw)](https://gyazo.com/df45ce6f156ec940727777b982b6bbc7)

下から上に切り替わるような効果にしていたが、もうちょっとスムーズになるように調整したのと、タブレット〜スマホサイズ時は左から右に切り替わるようにした。

[![Screenshot from Gyazo](https://gyazo.com/edd54a09798aee161ecd8895f95b6de5/raw)](https://gyazo.com/edd54a09798aee161ecd8895f95b6de5)

```css
.fade-enter-active {
  transition: all .75s ease;
}
.fade-leave-active {
  transition: all .75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
@media screen and (min-width: 769px) {
  .fade-enter, .fade-leave-to {
    transform: translateY(100vh);
  }
}
@media screen and (max-width: 768px) {
  .fade-enter, .fade-leave-to {
    transform: translateX(-250vw);
  }
}
```

あと`height: 100%`でのSPAになってるのでページ下部までいって詳細ページに遷移する時にガクッとなる動きがあり違和感があったため、routerの`scrollBehavior`を使って詳細ページ時はページトップへ遷移（`setTimeout`でtransition部分の時間と調整）して、それ以外はページ位置を保持しておくという設定もつけておきました。

```javascript
  routes: [
    ...
    {
      path: '/work/:number/detail',
      name: 'Works',
      component: Detail,
      meta: { scrollToTop: true }
    },
    ...
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise(resolve => {
        if (to.matched.some(m => m.meta.scrollToTop)) {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 750)
        }
      })
    }
  }
```

まだ精度としては微妙なのでスタイル部分も合わせて見直す必要ありそうだけど、まぁいいかとなってます。

## ToDo
- [ ] `vue-head`入れてmeta情報周り整える
- [ ] 左メニュー一覧のレイアウト作成
- [ ] テンプレートから作成したが、これを個人単位でメンテできる構成にできるか。
- [ ] pwa化できるか。これはおそらくNuxt.jsでやったほうがよさそう

## 雑感
- CLIツールとは便利なものであり、`vue-cli`は未だに初学者に優しいテンプレート作成ツールである。
- ただ、どんな便利なCLIツールにしろアップデートされた機能・廃止された機能ほかも合わせて調整、最悪マイグレーションヘルパーみたいなのがあればいいが、そういうのはない。
- たぶんCLIツールを使い運用していくにはバージョンアップの都度、テンプレートも更新できているか、きちんと保守できるかどうかなど徹底的に付き合う必要はある。
    - `vue-cli`3.0以降でこの辺の煩雑な機能などを見直す予定とのこと（下部関連リンク参考）
- 今回のは大した機能もなく１からやり直せる範囲だったのでどうでもよかったが、規模が大きかったり機能が煩雑だったりするとこれの比ではない苦労や地獄が待っている可能性がある。
- なので個人的な１発ネタや突発性のある簡易的なツール、練習やどういう構成で動かすかの勉強としては自由に使っても良い。
- ただ自分できちんと動かしたり保守できたりするにはそれらに頼らない環境構築をしなければならない（上記ToDo３件目で言及済み）。
    - CLIツールがどういうものかを理解すればいいけど現状の自分にはそこまで読み解く力はない。
    - これは`vue-cli`、Vue.jsに限らず、あらゆる点で大切なことだと思う。
    - *You know, I learned something today.* （サウスパーク並の感想）

## 関連リンク

**Future of Vue.js (vue-cliについて)**

https://speakerdeck.com/player/7d437d38c31b46318998d120b2d9c929?slide=60

**vue-router 日本語ドキュメント**

https://router.vuejs.org/ja/
