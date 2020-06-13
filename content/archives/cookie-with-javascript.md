---
title: cookieとかを使ってjsで云々
description: cookieとかを使ってJavaScriptでいろいろやってみる話
date: 2016-08-02
author: yamanoku
---

仕事とか実験で色々試してみたので雑まとめ。

## js-cookie便利

[https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)

jsでのCookie処理が楽なので是非導入してみよう。以下はそれを使った処理になります。

## ページ固有のcookieを記録したい

`http://xxxxx.xxx/xxxxx/xxxx/001/`

みたいなアドレスがあったとき

```js
// ページ番号
var Num = window.location.pathname.split('/')[3]
// 全体パス
var p = window.location.pathname.replace(new RegExp("(?:\\\/+[^\\\/]*){0,1}$"), "/");
Cookies.set(Num,Num,{ path: p });
```

ってやると「001」っていうcookieが残る。valueも同じ。

path設定はそのページ特有のものになるので、２度目の訪問の時は変えるみたいな処理に使える。（別に全ページ共通でもいいなら"/"でもいいです）

## ページ遷移した時に高さを保持

たとえばページのどこかで何かしらのボタンを押して同ページ内で読み込みがある際に、押したボタンの位置でまた再開して欲しいみたいなことがあったとするときの対応。

```js
$('#btn').click(function() {
  keepPosition();
});
var key = 'keep-position-'+location.pathname;
function keepPosition(){
  Cookies.set(key, $(window).scrollTop());
}
if(Cookies.get(key)){
  setTimeout(function(){
    $(window).scrollTop($.cookie(key));
    Cookies.remove(key);
  },0);
}
```

やってることは以下の通りです。

1. 対象のボタンを押す
2. その際に現在のパスと現在表示しているウィンドウの位置を保存したCookie作成
3. 再度読み込まれる時にそのCookieが保存してたウィンドウ位置を読み込んで移動
4. 終わったら削除する

## パラメータごとでの判定

今回はパラメータの最後の部分（name）で判定するっていう場合のやつです。

`http://xxx.xxx/xxx/?xxxx=xxxx&yyyy=yyyy&name=aaaa`

```js
// パラメータ取得
var params = [];
var param = location.search.substring(1).split('&');
for(var i = 0; i < param.length; i++) {
	params[i] = param[i].split('=');
}
var target = 'name';
var value;
for(var i = 0; i < params.length; i++) {
	if(params[i][0] == target) {
		value = params[i][1];
		break;
	}
}
switch (value) {
	case 'aaaa':
		Cookies.set('param1','aaaa');
	break;
	case 'bbbb':
		Cookies.set('param2','bbbb');
	break;
	case 'cccc':
		Cookies.set('param3','cccc');
	break;
}
```
判定箇所を絞ればわかりやすくcookieを保存してくれるはずです。

## json（配列）使うのやりたい

js-cookieさんは使えるようにしている。有能。

```js
var obj = {
	a : 'aaa',
	b : 'bbb',
	c : 'ccc'
}
Cookies.set('json',JSON.stringify(obj));
var read_obj = JSON.parse(Cookies.get('json'));
console.log(read_obj);
```

```js
Object { a : "aaa", b : "bbb", c : 'ccc'}
```

## 余談 LocalStorage

本題からそれるけどCookieでの処理だとブラウザ消しても残るので、ブラウザを消した時点で消去されるSessionStorageが使えるLocalStorageはすごいって話になった。有効期限も特になく保存量がすごいけど、使い過ぎるとまずまず重くなってくるので大したことないものならCookieで十分かと。