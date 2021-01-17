---
title: 自分の周辺情報をまとめる静的サイトをつくった
description: CSSやSassの変数名について考え直してみようという話
date: 2019-12-19
author: yamanoku
---

## 令和元年台風第19号すごかったですね
- みなさん大丈夫でしたでしょうか
- yamanokuの家のアンテナが魚の骨なので怖かった
  - 大丈夫でした

## エンジニアの端くれとしてなにか作りたい
- まずは「知る」ことに特化しよう
- あとは自分がメインで使えるようにしたい

## やれること
- [経験のある技術](https://scrapbox.io/yamanoku/%E7%B5%8C%E9%A8%93%E3%81%AE%E3%81%82%E3%82%8B%E6%8A%80%E8%A1%93)
  - コッテコテのフロントエンド太郎
    - バックエンド側でなんとかやってくれてるのに付随する
- よっしゃフロントエンド太郎だし静的サイトでもつくるか！！

## [https://nagareyama.yamanoku.net/](https://nagareyama.yamanoku.net/)

- [![Image](https://gyazo.com/d4b4fad35f4449b38284acf64b523a43/thumb/1000)](https://gyazo.com/d4b4fad35f4449b38284acf64b523a43)
  - 流山市避難所
  - 小児科
  - ご飯どころ
- 現状周辺のことを載せてるだけですね
  - 全然足りんし

## 利用技術
- [GatsbyJS](https://scrapbox.io/yamanoku/GatsbyJS)
  - そういや[React.js](https://scrapbox.io/yamanoku/React.js)最近触っとらんし素振りするか
    - helmetこうなってんのねと改めて理解した
  - サクッと[SSR](https://scrapbox.io/yamanoku/SSR)できる
    - ほんとにできた
  - [GraphQL](https://scrapbox.io/yamanoku/GraphQL)試してみる
    - はーなるほどねーとなった
    - 社内で`使い方ちょっと不思議だから`と言われる
  - [PWA](https://scrapbox.io/yamanoku/PWA)とかやりたい
    - キャッシュで爆速！！！！！！！
    - プラグインで簡単にいけた
  - [Netlify](https://scrapbox.io/yamanoku/Netlify)
    - みなさんご存知のやつです
      - [GitHub](https://scrapbox.io/yamanoku/GitHub)リポジトリ登録してdeploy設定してドーン
      - HTTPS対応も簡単
    - 便利
- [AWS Route53](https://scrapbox.io/yamanoku/AWS_Route53)
  - ドメインはすでにここで取ってる
    - サブドメに[CNAME](https://scrapbox.io/yamanoku/CNAME)で[Netlify](https://scrapbox.io/yamanoku/Netlify)の値をあてるだけ
  - 便利

## [GatsbyJS](https://scrapbox.io/yamanoku/GatsbyJS)に関する不満点
- `React.Fragment`ができない
  - 内包しているReactがv16じゃない
  - ちゃんと[HTML](https://scrapbox.io/yamanoku/HTML)書きてえなぁ
- スタイルが余計なものを考慮しないといけない
  - `height: 100%`をしたかったのですが
  - `___gatsby`が果てしなく邪魔
    - `html.js`なるものを弄らないと困るやつ
- [TypeScript](https://scrapbox.io/yamanoku/TypeScript)対応
  - `gatsby-plugin-typescript`が必要
  - そのほか色々設定した
    - 大正義[Takepepe](https://scrapbox.io/yamanoku/Takepepe)さんがまとめてた
      - [https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb)
  - ハマりどころが多かった気がする
  - そもそもいらんやろ
- 脱[React.js](https://scrapbox.io/yamanoku/React.js)できるか
  - ガッツリ[React.js](https://scrapbox.io/yamanoku/React.js)依存
  - 素振りの感覚だったし別にそこまで心中する気はない

## 最近[11ty](https://scrapbox.io/yamanoku/11ty)というのがいいというのを聞く
- [静的サイトジェネレーター](https://scrapbox.io/yamanoku/%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC)
  - [Node.js](https://scrapbox.io/yamanoku/Node.js)製
- いいとこ
  - なにも気にしなかったら`@11ty/eleventy`だけで完結できちゃう
    - `npx eleventy`でビルド
  - 様々なテンプレートがひっぱれる
    - [markdown](https://scrapbox.io/yamanoku/markdown)ほか[HTML](https://scrapbox.io/yamanoku/HTML)とか[pug](https://scrapbox.io/yamanoku/pug)とか[nunjucks](https://scrapbox.io/yamanoku/nunjucks)とかも
  - サイトのURL設計がツールに縛られない
  - コレクションの設定が柔軟
    - [https://11ty.io/docs/collections/](https://11ty.io/docs/collections/)
  - Dataディレクトリが便利、JSを書いたりもできる
  - ファイルを生成する前にフックで加工できる（`.addTransform`）
  - [https://twitter.com/_yuheiy/status/1200976795396235264](https://twitter.com/_yuheiy/status/1200976795396235264)
- 実例
  - [https://web.dev/](https://web.dev/)
  - [https://accrefs.jp/](https://accrefs.jp/)
  - [https://takanorip.com/](https://takanorip.com/)
- 試してみた
  - クセはあった
    - 設定を自分であれこれカスタマイズできる
  - 記法の慣れは必要
    - モジュールのcssを読み込みたい時

```liquid
{% set css %}
  {% include "node_modules/yama-normalize/yama-normalize.css" %}
{% endset %}
```

- 移行できそう
  - [https://github.com/yamanoku/Nagareyamanoku/tree/feature/11ty](https://github.com/yamanoku/Nagareyamanoku/tree/feature/11ty)

## ネクストステップ
- そもそも[API](https://scrapbox.io/yamanoku/API)にしてみるか
  - [FROKAN × UIT #2 「年忘れLTバトル」#5df9fb9ec2cd3f0000d46b25](https://scrapbox.io/yamanoku/FROKAN_%C3%97_UIT_%232_%E3%80%8C%E5%B9%B4%E5%BF%98%E3%82%8CLT%E3%83%90%E3%83%88%E3%83%AB%E3%80%8D#5df9fb9ec2cd3f0000d46b25)
    - 自分の個人情報をAPI化してるやつが居た
  - それをビルドして静的サイトジェネレートする
- 天気情報とかがあってもいいかな
- 流山市役所の情報クロール
  - [Puppeteer](https://scrapbox.io/yamanoku/Puppeteer)の素振り
- なんかいいネタください
