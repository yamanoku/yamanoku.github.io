---
title: Promise処理について雑にまとめる
description: JavaScript ES6 Promise
date: 2017-05-28
author: yamanoku
---

## Promiseとは

簡単に言うと非同期処理を行う時にコールバック地獄、ネストの深層化を回避して記述をだいぶ楽にするオブジェクト。ES2015です。

### 非同期処理とは

例えばAの処理の後にBの処理があるとする。javascriptとは<b>シングルスレッドで動く</b>＝<b>同時に処理を行うということができない</b>ものなので、通常であればA、Bの処理で動く。その辺の順番を変えて処理を行うのを非同期処理という。

分かりやすい例はApiと連携するAjax通信を受け取ったレスポンス(200とか404とか)の結果によって処理を行うやつ。

### 非同期処理の例
* setTimeout
* setInterval
* addEventListener（イベントハンドラ）
* jQuery.Deferred
* Promise ←これ
* async/await

### 例 -- ajax通信後順番に処理を行う
```javascript
var fetchSomething1 = function(done) {
  // API1にアクセス
  doAjaxStuff(someOptions, {
    success: function(data) {
      done(); // 成功したら渡されたfunctionを実行
    }
  });
};

// fetchSomething1と同じようにそれぞれ別のAPIにアクセスするfunction群
var fetchSomething2 = function(done) { /* 省略 */ };
var fetchSomething3 = function(done) { /* 省略 */ };
var fetchSomething4 = function(done) { /* 省略 */ };

var doSomethingFinally = function() {
  // APIにアクセスして取得してきたデータを使って何かする
};
```
こういう関数を登録しておき、順番に処理を行うとする。通常だと
```javascript
fetchSomething1(function() {
  fetchSomething2(function() {
    fetchSomething3(function() {
      fetchSomething4(doSomethingFinally);
    });
  });
});
```
こうなるが、これが
```javascript
fetchSomething1()
  .then(fetchSomething2)
  .then(fetchSomething3)
  .then(fetchSomething4)
  .then(doSomethingFinally);
```
こうなる。コールバック地獄、ネスト深層化問題の回避がよく分かる。
```javascript
// Callback
fetchSomething1(function() {
  fetchSomething2(function() {
    fetchSomething3(function() {
      fetchSomething4(doSomethingFinally, function() {
        // fetchSomething4のエラー処理
      });
    }, function() {
      // fetchSomething3のエラー処理
    });
  }, function() {
    // fetchSomething2のエラー処理
  });
}, function() {
  // fetchSomething1のエラー処理
});

// Promise then & catch
fetchSomething1()
  .then(fetchSomething2)
  .catch(/* fetchSomething1のエラー処理 */);
  .then(fetchSomething3)
  .catch(/* fetchSomething2のエラー処理 */);
  .then(fetchSomething4)
  .catch(/* fetchSomething3のエラー処理 */);
  .then(doSomethingFinally)
  .catch(/* fetchSomething4のエラー処理 */);
```
エラー処理も含めると更に分かりやすくなる。こういう風に書くと見やすくなってメンテナンス性も上がりますね。

## ブラウザ対応状況 -- CanIUse

[![Image from Gyazo](https://i.gyazo.com/27f6663a05cf677796e44911a766c161.png)](https://gyazo.com/27f6663a05cf677796e44911a766c161)

発表されてからだいぶ時間が経ったのでブラウザ対応であれば、現状IE11以外だったら大丈夫。

## パフォーマンス対決

[jsPref](https://jsperf.com/)にて計測。

### Promise vs Callback

[![Image from Gyazo](https://i.gyazo.com/9eb43867d18465da067d59ea659365e1.png)](https://gyazo.com/9eb43867d18465da067d59ea659365e1)

### Native Promise vs Callback

[![Image from Gyazo](https://i.gyazo.com/363caf653209063133a294aca9e1e8e1.png)](https://gyazo.com/363caf653209063133a294aca9e1e8e1)

非同期処理だとそこまで差はないけどそのまま使うPromiseだと圧倒的にCallbackのがパフォーマンス良い。素で使わないほうがよさそう。

### 参考

* [Promiseで簡単！JavaScript非同期処理入門【前編】](https://html5experts.jp/takazudo/17107/)
* [Promiseで簡単！JavaScript非同期処理入門【後編】](https://html5experts.jp/takazudo/17113/)
* [Promise - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
