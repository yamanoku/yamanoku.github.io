---
title: CodeClimateで.vueファイルも判定させる
tags: CodeClimate Vue.js JavaScript YAML
date: 2017-08-29
author: yamanoku
---

## 概要

vue.jsで作ったプロジェクトを[CodeClimate](https://codeclimate.com/)で試そうと思ったのだけれど、
通常時では `.vue` ファイルはCodeClimateの判定に入らない。

[![https://gyazo.com/3b6d92ed3d572446412316149a671855](https://i.gyazo.com/3b6d92ed3d572446412316149a671855.png)](https://gyazo.com/3b6d92ed3d572446412316149a671855)

## 解決
### 公式ドキュメント
https://docs.codeclimate.com/v1.0/docs/eslint#section-extensions

> Extensions
> You can configure our ESLint Engine to analyze the file types you’d like by configuring the extensions in your `.codeclimate.yml` , as shown in the example below:

```yaml
eslint:
  enabled: true
  config:
    extensions:
    - .es6
    - .js
    - .jsx

ratings:
   paths:
   - "**.es6"
   - "**.js"
   - "**.jsx"
```
eslintエンジンに対応するように、こういう感じで追加していけとのこと。

### .codeclimate.yml
以下をプロジェクトルートに追加、pushする。

```yaml
---
engines:
  duplication:
    enabled: true
    config:
      languages:
      - javascript
      extensions:
      - .js
      - .vue
ratings:
  paths:
  - "**.js"
  - "**.vue"
```
### リポジトリを追加する
[![https://gyazo.com/d7b3f4fefe8bd36f1728c77524f5ad18](https://i.gyazo.com/d7b3f4fefe8bd36f1728c77524f5ad18.png)](https://gyazo.com/d7b3f4fefe8bd36f1728c77524f5ad18)

「Open sourse」 → 「Add a repository」 で移動して、対象のリポジトリを追加する。

[![https://gyazo.com/723ddf55036630f0a108a0d11d155e5e](https://i.gyazo.com/723ddf55036630f0a108a0d11d155e5e.png)](https://gyazo.com/723ddf55036630f0a108a0d11d155e5e)

判定、通過しているか確認。

### 結果
[![https://gyazo.com/12753c13ba022e6e4fe5504fc17ac2d2](https://i.gyazo.com/12753c13ba022e6e4fe5504fc17ac2d2.png)](https://gyazo.com/12753c13ba022e6e4fe5504fc17ac2d2)

判定できた！ ちなみに今回は細かい `.eslintsrc` ほか、詳細なeslint設定などはしてないです。

## 備考
試したプロジェクト：[https://codeclimate.com/github/yamanoku/vue_portfolio_templete](https://codeclimate.com/github/yamanoku/vue_portfolio_templete)

作った経緯：http://qiita.com/yamanoku/items/41df5c05c5c89714ea3c
