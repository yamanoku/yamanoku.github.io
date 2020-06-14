---
title: vue-cliで作ったNuxtスターターキットでNuxt1 => 2に上げるやり方
description: Vue.js vue-cli nuxt.js nuxt2 初心者
date: 2018-09-21
author: yamanoku
---

## 追記（2018/10/26）

[![Image from Gyazo](https://i.gyazo.com/e91df68c9bb73a2637ad2fb09da78d64.png)](https://gyazo.com/e91df68c9bb73a2637ad2fb09da78d64)

`vue init nuxt-community/starter-template` が公式発表10/14で**deprecated**になったようです。

https://github.com/nuxt-community/starter-template/commit/82513c7306563b2dd42c7da3efed57803d25aea2

今後はこんな記事なんぞ参照せず**create-nuxt-app**を使うようにしましょう👋👋👋

## Nuxt.js 2.0 Release !

[![Image from Gyazo](https://i.gyazo.com/f8a82a7c384f33360aed3884a2fbdba8.png)](https://gyazo.com/f8a82a7c384f33360aed3884a2fbdba8)

[Nuxt.js 2.0: Webpack 4, ESM Modules, create-nuxt-app and more! 💫
](https://medium.com/@nuxt_js/nuxt-js-2-0-webpack-4-esm-modules-create-nuxt-app-and-more-6936ce80d94c)

ついに来ましたNuxt2.0。ということで初心者でもすぐ体験できるNuxt2の世界の話をします。

たぶんこのあと`vue-cli`がちゃんとアップデートしてくれると思いますが、それまでの僅かな命だと思ってご覧ください。

## install
npm 5.2.0以上だったら`npx`使うとラクチンです。

```bash
npx vue-cli init nuxt-community/starter-template nuxt2
? Project name nuxt2
? Project description Nuxt.js project
? Author yamanoku <0910yama@gmail.com>

   vue-cli · Generated "nuxt2".

   To get started:

     cd nuxt2
     npm install ## Or yarn
     npm run dev
```

```bash
cd nuxt2
yarn
```

宗教上の都合で`yarn`を使ってますが別に`npm`でも問題ないです

## package.json

現時点（9/21）ではこうなってると思います

```json
  "dependencies": {
    "nuxt": "^1.0.0"
  },
```

ここから２にあげる

```bash
yarn add nuxt
```

```json
  "dependencies": {
    "nuxt": "^2.0.0"
  },
```

## run
とりあえず動かしてみましょう

```bash
yarn dev
yarn run v1.9.4
$ nuxt
```

[![Image from Gyazo](https://i.gyazo.com/d790ef2cbcef0071a90531d7cbe157e2.png)](https://gyazo.com/d790ef2cbcef0071a90531d7cbe157e2)

おっ動いてる

[![Image from Gyazo](https://i.gyazo.com/22a2bd507b01a49725c8221be7b93a88.png)](https://gyazo.com/22a2bd507b01a49725c8221be7b93a88)

と思いきや`eslint`でなにやらコケてる

## fix

以前@potate4dさんの記事で拝見した[Migrate from isServer to process.server](https://qiita.com/potato4d/items/7b3119c88869d7622a7d#migrate-from-isserver-to-processserver)で該当箇所を修正してみる。


### before
```js
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
```

### after
```js
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config) {
      if (process.server && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
```

[![Image from Gyazo](https://i.gyazo.com/b0864a60c02e61e7e90d58f43887f7ac.png)](https://gyazo.com/b0864a60c02e61e7e90d58f43887f7ac)

エラー消えた！

[![Image from Gyazo](https://i.gyazo.com/c0cc3fead577df1aa4edcabc985866a7.gif)](https://gyazo.com/c0cc3fead577df1aa4edcabc985866a7)

`build`も動く

[![Image from Gyazo](https://i.gyazo.com/394756cc959d76f9ccfa09fd63bfd1ac.gif)](https://gyazo.com/394756cc959d76f9ccfa09fd63bfd1ac)

`generate`も動く

以上！！！！！！！！！！！！！！！！！！

## etc
他なにかわかったら追記します。

### vendorがあると警告が出る
```js
  build: {
    vendor: [
      'axios',
    ]
  },
```
こういうのがあったと思うんですが、Nuxt2にアプデしてこのまま動かすと警告が出ます。

```
⚠ warn vendor has been deprecated due to webpack4 optimization
```

webpack4の最適化による非推奨になったためだそうです。
