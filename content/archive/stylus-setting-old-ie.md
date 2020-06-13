---
title: stylusでOldIEの記述やりたい話
description: stylusでOldIEの記述やりたいなと思った話です
date: 2016-01-21
author: yamanoku
---

stylus便利なのでもうピュアなcssを書きたくないのですが、かねてから気になってた問題と解決法を記載。

## Old IE 問題

Old IEっていうよりかはfilterの記述法についてです。

通常の書き方だとこう書きたくなります。

```css
filter: progid:DXImageTransform.Microsoft.DropShadow(color=#ffffff,offx=1,offy=1)
```

しかしエラーを吐く。

```bash
expected "indent", got "outdent"
```

どうすんだよとのことなので調べました。

## 解決法

[http://stylus-lang.com/docs/selectors.html#disambiguation](https://stylus-lang.com/docs/selectors.html#disambiguation)の最下部でこういう記載。

```css
filter unquote('progid:DXImageTransform.Microsoft.BasicImage(rotation=1)')
```

上にならって書き直してみる。

```css
filter: unquote("progid:DXImageTransform.Microsoft.DropShadow(color=#ffffff,offx=1,offy=1)")
```

うまくいきます。unquoteで括れば良いとのことです。なるほど。

## 新たなる問題

`gulpfile.js`で単に`stylus`使うだけの設定ならいいんですが、[gulp-pleeease](http://pleeease.io/docs/)を設定しているとこんなことが起きます。

[![Image from Gyazo](https://i.gyazo.com/85334f91be37f4612b243e5b54366ed5.png)](https://gyazo.com/85334f91be37f4612b243e5b54366ed5)

何故。。。

## 今考えられる解決策

というわけでこのpleeease問題ですがパッと考えたところで以下の解決策です。

- pleeease使うのをやめる
- pleeeaseでfilter設定とかOld IE設定とかなんとかでゴリ押す（未確認）
- stylusを捨てる
- IE対応させようとしたクライアントを<s>殴り</s>説得しに行く

出来る限り平和的解決を望んでいますが、どなたか良い方法があれば教えて下さい。

こちらからは以上です。