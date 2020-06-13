---
title: jQuery - スクロールバーも入れて幅検知する
description: jQueryを使ってスクロールバーも入れて幅検知する話
date: 2015-12-14
author: yamanoku
---

## 背景

レスポンシブさせるときにサブカラムの幅は維持してメインカラムの幅を縮めようとしたかった。そしてある幅になったらカラム落ちさせて1カラムにさせる。

やりたいこととして、リサイズ＆ロードさせて、全体分の幅からサブカラム＋横のmargin分を引いた値をメインカラムの幅にする計算をした。

自分の環境では問題なく動いてたのだが、他の環境ではサブカラムが下に崩れてしまう状態が出た。

## 原因

全体の幅をレスポンスする時にスクロールバーの部分を加味していなかった。

つまり1カラム落ちさせるタイミングの時、スクロールバー幅分だけズレて表示されてしまうみたい。

全体の幅を取るために以下のように設定してた。

```js
var Width = $(window).outerWidth();
```

これだと表示されているエリアのみの取得になるらしい

## 対応策

以下のように変更・動作させるように変更

```js
$(window).on('load resize', function(){
  var $contents = $('#contents');
  var $main = $('#main');
  var $sub = $('#sub');
  var sWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if( sWindow < 1200 && sWindow >= 1001 ) {
    var allWidth = $main.parent().outerWidth();
    var mainWidth = $main.outerWidth();
    var w = allWidth - 254;
    // 254はサブカラム＋横margin分
    $main.css('width', w);

  } else if( sWindow >= 1200 ) {
    $main.css('width','966');
  } else {
    $main.css('width','100%');
  }
});
```

勉強になりました。

[javascript jQuery スクロールバーの幅を含むウィンドウサイズを取得したい。 - かもメモ](https://chaika.hatenablog.com/entry/2015/02/12/054602)
