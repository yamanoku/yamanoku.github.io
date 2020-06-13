---
title: stylelint社内勉強会資料
description: stylelint lint 勉強会
date: 2018-01-29
author: yamanoku
---

※このスライドは社内勉強会（18/01/30）にて使用した資料です。公開用に一部修正・改訂などしております。

## Lintとは

コード検査。これを利用するとコード構造の品質に関する問題を特定して修正することができる。

## いろいろあるLintツール

- [JSLint](https://github.com/douglascrockford/JSLint) ... JavaScriptのLintツール（ルールは決まっている）
- [ESLint](https://eslint.org/) ... JSLintよりも汎用性のあるルールの改変ができるLintツール
- [htmllint](https://github.com/htmllint/htmllint) ... HTMLのLintツール
- [markuplint](https://github.com/YusukeHirao/markuplint) ... マークアップに特化したLintツール（開発中）
- [commitlint](http://marionebl.github.io/commitlint/) ... Gitのコミットメッセージにルールをつける（プレフィックスなど）
- [textlint](https://github.com/textlint/textlint) ... 文章やマークダウンの構文チェックツール
- etc...

## メリットは？

- コードの品質維持
- 制作ガイドラインを逐一確認しなくてもよくなる
  - どう守れているか？は最悪ターミナルで確認できる。
- ハックを利用しなければいけない書き方を廃絶していける
- 「標準的な」コードの書き方が身につく

Lintをすることでバグ0が実現できるわけではないが（ブラウザチェック・テストコードも別途必要）

全体で **「見通しの良い」コード**は実現できる。

=> その結果、後天的なバグを回避できる可能性はあがるので多少なりにも貢献はできている。

## CLIで試してみる

```bash
 yarn add --global stylelint
 yarn install -y
 yarn add @geekcojp/stylelint-config
 stylelint --config node_modules/@geekcojp/stylelint-config/index.js styles.css
```
(npmでも可)

すぐに使える！

## 公式サイトのデモもあるよ。

https://stylelint.io/demo/

## ルールは色々ある。

- 「:」の前後にスペースを入れるかどうか
- `!important`を書いていないか
- 重複したプロパティは無いか
- 詳細度、ネストなどは深くなっていないか（数値で調整可能）
- プロパティや値が空の宣言箇所はないか
- etc...

https://stylelint.io/user-guide/rules/


「クライアントの要望でスタイル上ここのルールは絶対無視しないといけない…！」みたいなことがあった際

=> **disableコメントアウトでルールの無視が可能**

## disable 使用例

```css
 /* stylelint-disable */
 a {}
 /* stylelint-enable */
```

もしくは

```css
a {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

ただし、`disable`は出来る限り使わないようにする（したい）。

もしくは他プロジェクトでも頻繁にするようであればルール自体を見直す機会が必要かもしれないので考えてみるなど必要。

独自でルール設定することも可能（`extends`で`@geekcojp/stylelint-config`は読み込むこと）

```js
 module.exports = {
   "extends": "./node_modules/@geekcojp/stylelint-config",
   "rules": {
   	// ルール追記
   }
 }
```

```bash
stylelint --config config.js index.css
```

ルールは厳しいルールセットみたいなものから、自分で必要箇所を埋めていく緩いものまで必要に応じて設定できる。

- https://github.com/stylelint/stylelint-config-standard
  - stylelintの公式推奨ルールセット
  - ルール制定が分からなかったらこれ入れてみても良さそう

ちなみに `@geekcojp/stylelint-config` で参考にしている`.stylelintrc`内容は以下参照

https://github.com/benfrain/ecss-postcss-shell/blob/master/.stylelintrc

※ 社内では[ECSS](http://ecss.io/)の設計思想をベースにコーディングしています

`@geekcojp/stylelint-config` は絶賛パブリックなので内容に意義があればプルリクバンバン投げてくれ！

https://github.com/geekcojp/config/tree/master/packages/stylelint-config

**TODO**

- [ ] CHANGE.LOGを書く（どのバージョンで何のルールが追加されたか等）

Lintはあくまでも「警告」をするものなので、無視したり気づかなかったりする場合、コードが悪いまま通ってしまう。

=> 警告があるものは絶対にコミットなどを通さないような仕組みも必要。

## husky 🐶

```json
 "scripts": {
   "test": "stylelint",
 },
 "husky": {
   "hooks": {
     "pre-commit": "yarn test"
   }
 }
```

https://github.com/typicode/husky

コミットした時に`test` が作動し（stylelintが動く）、Lint警告文を出してくれる（無かったらコミットが通る）

## どう動かすのか分からんし時間がない…

試せる下地を作ったよ！

https://github.com/geekcojp/stylelint-boilerplate

使うのはこのコマンドだけ！

```bash
## リポジトリclone
git clone https://github.com/geekcojp/stylelint-boilerplate.git

## 依存パッケージをインストール
yarn

## developモード(gulpを動かす)
yarn dev
## or gulp

## stylelint単体動かす
yarn lint-styles
```

## 雑感

- 何事も見るよりやって慣れろ
- 問題のある箇所のみチェックしながら書けるのは良い
- `!important` は悪しき存在
    - これまでの書き方を見直すよいきっかけにもなる。
- 記述スピードは多少上がった気がする
- ガイドラインはもう必要なさそう？
    - config自体がガイドラインになる

## Lintやっていきましょう💪
