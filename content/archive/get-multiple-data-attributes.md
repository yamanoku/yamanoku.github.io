---
title: 【HTML5】カスタムデータ属性（data-*）の値に複数設定、それを取得する方法
description: HTML HTML5 data属性 jQuery
date: 2017-06-22
author: yamanoku
---

カスタムデータ属性（`data-\*`）は基本、属性値を１つのみしか設定できませんが、いわゆる**配列** 、**オブジェクト**化させることで複数設定が可能になります。

以下方法です。

## 複数設定パターン
### 1. 配列

```html
<div id="id1" data-test1='["name","age","sex"]'></div>
```

### 2. オブジェクト

```html
<div id="id2" data-test2='{"name":"名前","age":"年齢","sex":"性別"}'></div>
```

## 取得方法

```js
var arr = $('#id1').data('test1');
var obj = $('#id2').data('test2');
console.log(arr[1]); // age
console.log(obj.name);  // 名前
```

## 注意点

### 要素の括りについて
複数設定する時は必ずシングルクォーテーションで囲んで、中の文字列はダブルクォーテーションで囲みましょう。

#### デモ（成功パターン）
https://jsfiddle.net/z56ryn6L/

![demo2](https://i.gyazo.com/b765e53468af449c647ee78431270049.png)

#### デモ（失敗パターン）
https://jsfiddle.net/z56ryn6L/1/

![demo1](https://i.gyazo.com/f70f6b62962682d57cefdfb1779e5ce0.png)

失敗パターンでは、配列時は全体が文字列と化しているので、そこから何番目のものかを取得してきています。
オブジェクトの場合はkeyからvalueを参照できません。

ちなみにvalue部分に数値が入る時はダブルクォーテーションで囲まなくても大丈夫ですが、01や001といった場合は判定されないようです。

### 取得時のメソッド
カスタムデータ「属性」ではあるのですが、配列とオブジェクトを設置している時に ```attr()``` で対応すると上記の失敗パターンと同じ結果で返ってきます。

#### デモ（失敗パターン）
https://jsfiddle.net/z56ryn6L/2/

```attr()``` 自体はあくまでも属性名を取得してvalueを返すメソッドで、 ```data（）``` はkeyやobjectとして取得してきてくれるメソッドなので、対応できるようです。

* http://api.jquery.com/attr/
* http://api.jquery.com/data/

配列やオブジェクトのように複数設定した属性取得の場合は ```data()``` で行うようにしましょう。

### undefinedについて
データ値として判定できないので、この時に限り使用できません。

当たり前ですが文字列として設定すれば取得できます。

```html
<div id="id3" data-test3='{"key1":"value1","key2":"value2","key3":"undefined"}'></div>
<div id="id4" data-test4='{"key1":"value1","key2":"value2","key3":undefined}'></div>
```

```js
// 成功例 -- オブジェクトで返ってくる
var obj1 = $('#id3').data('test3');
console.log(obj1);
// Object {key1: "value1", key2: "value2", key3: "undefined"}
//  key1:"value1"
//  key2:"value2"
//  key3:"undefined"

//　失敗例 -- 文字列で返ってくる
var obj2 = $('#id4').data('test4');
console.log(obj2);
// {"key1":"value1","key2":"value2","key3":undefined}
```

また、現状jQueryではなく、ネイティブjavascriptで上記のようにデータ属性の配列・オブジェクトを取得する方法は見つけられませんでした…（文字列として返ってくる）。情報求む。

## 参考記事

* http://cly7796.net/wp/javascript/use-an-array-in-the-data-attribute/
* http://dot-town-lab.com/laboratory/item/66
