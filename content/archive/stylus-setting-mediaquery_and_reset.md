---
title: mediaqueryとreset.cssの管理
description: stylusによるmediaqueryとreset.cssの管理について
date: 2016-02-11
author: yamanoku
---

## mediaquery管理

自分なりに考えた結果です。

嘘です[参考にした](https://gist.github.com/eyy/53292ee421a911231399)結果です。

```css
pc()
	@media all and (min-width: 769px)
		{block}
sp()
	@media all and (max-width: 768px)
		{block}
```

をどこでもいいけど、base.stylみたいなのに設定しといて呼び出す時

```css
.element
	+pc()
		// ~ pc時のスタイル ~
	+sp()
		// ~ tab・sp時のスタイル ~
```

ってやれば以下のように生成。

```css
@media all and (min-width: 769px) {
	.element {
		/* ~ pc時のスタイル ~ */
	}
@media all and (max-width: 768px) {
	.element {
		/* ~ tab・sp時のスタイル ~ */
	}
```

mediaquery大量に生成するじゃねーかクソがって話のときはこうすればいいんじゃないですかね

```css
+pc()
	.element
		// ~ pc時のスタイル ~
	// …以下続く
+sp()
	.element
		// ~ tab・sp時のスタイル ~
	// …以下続く
```

### メリット
- 案件でpc用とsp用のソースを１つにまとめる時の作業とかには便利
- 他の人と作業するとき（PCとSPで分ける時）コンフリクトしづらいんじゃない
- 一括でmediaqueryの値変えられる（ガバガバ仕様書の時）

## reset.css

管理というか他人の褌拝借しているだけですが、以下ソースを参考に使ってます。

[https://github.com/tj/nib/blob/master/lib/nib/reset.styl](https://github.com/tj/nib/blob/master/lib/nib/reset.styl)

```css
global-reset()
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td
    reset-box-model()
    reset-font()

reset-box-model()
  margin: 0
  padding: 0
  border: 0
  outline: 0

reset-font()
  font-weight: inherit
  font-style: inherit
  font-family: inherit
  font-size: 100%
  vertical-align: baseline
```

上記のように変数で登録して使用する箇所のみ呼び出すみたいな感じです。

自分は`reset()`を作成してその下に必要なのを拝借するみたいな感じ

```css
reset()
	global-reset()
	reset-html5()
```

自分はclearfix用も追加したりしてます。（内容が古いので後で更新する…）

```css
clearfix()
	.clearfix:before
	.clearfix:after
	.row:before
	.row:after
		content: ""
		display: table
	.clearfix:after
	.row:after
		clear: both
```

後は書出したいところに呼び出す感じです。

```css
@import 'reset'
reset()
```

### メリット
- 汎用性が高め
- 修正とかが楽だし、呼び出すものを選別できる
- 追加するのも変数名を変更するとかでアレコレできる

こちらからは以上です。