---
title: Qiita記事のコードスタイル部分を以前のやつに戻すChrome Extension作った
description: chrome-extension Qiita CSS
date: 2017-12-04
author: yamanoku
---

## 経緯
Qiitaがサイトリニューアルされて、記事内のコード部分の色がガラッと変わり、個人的に見づらかったのでなんとか変えたかった。

メインブラウザがChromeなのでExtensionで自動的に変わるみたいなのがあったらいいなと思って作った。突発的に作って、個人的に使う程度のものなのでストアには登録してません。

## 内容
やってることは至極簡単で、読み込まれたら`</head>`の直前にオーバーライドされたCSSを読み込むようにしているだけ。

```js
document.head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("style.css") + '">'
);
```

`manifest.json`で以下の設定するのがミソっぽいです

```json
{
  "web_accessible_resources": [
    "style.css"
  ]
}
```

## デモ
[![https://gyazo.com/923e0fd8f4151121597121378f848b9d](https://i.gyazo.com/923e0fd8f4151121597121378f848b9d.gif)](https://gyazo.com/923e0fd8f4151121597121378f848b9d)

ラグありますが、読み込み完了したら反映みたいな感じです。

## Github
https://github.com/yamanoku/Qiita_Code-Style_Before
ここからクローンなりダウンロードでディレクトリ落としてもらってデベロッパーモードで追加してください。いらんかったら削除ください。

自分がよく見る分は補完してますがこの言語のここが対応していないなどあったらIssueかプルリクでもおなしゃす。

## 参考

- https://qiita.com/sqrtxx/items/19fd2114430e9e1fb57f
- https://developer.chrome.com/extensions/manifest/web_accessible_resources
- https://developer.mozilla.org/ja/Add-ons/WebExtensions/manifest.json/web_accessible_resources
