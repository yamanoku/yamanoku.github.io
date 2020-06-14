---
title: Intersection Observer が良さそうなので試してみた
description: テスト
date: 2017-07-18
author: yamanoku
---

## スクロールでのイベント制御はしんどい。

jQueryにてscrollイベントで制御していた時代

```javascript
$(function(){
  $(window).on('scroll', function(){
   // some event
  });
});
```
### 個人的に辛いと思っていたこと

- レスポンシブ時で要素のスクロール位置がレイアウトによって変化する場合（SPだとレイアウトが縦長になるため）
    - **感覚的に**書けないつらさ
- １回のみの動作させるときはflag処理が必須（スクロールさせてfalseにしてfalse時は動作させないなど）
- スクロールイベントの発生は断続的なのでブラウザでの負荷がヤバい。
    - setTimeoutとかrequestAnimationFrameとかで軽減させる方法は一応ある ⇛ ([関連記事](http://qiita.com/yoshiiiiie/items/135dafcdde1f9b097fcf))
- lazyloadなどの遅延読み込みをネイティブで分かりやすく出来ないか。

## Intersection Observer という技術について

[こちらの記事](https://developers.cyberagent.co.jp/blog/archives/6057/)で「Intersection Observer」というAPIを要素の遅延読み込みに利用していると知り、なんとなく調べてみることにした。

### 概要
Intersection（交点）Observer（監視）ということで要素自体が交差した瞬間にイベントを発火させる監視APIである。

これの重要な点は上述した **スクロールによるイベント監視** というつらさ部分を解消してくれて、条件分岐に至ってもより分かりやすく実装できることが出来る。

### サンプル
以下よりご確認ください

<p data-height="500" data-theme-id="0" data-slug-hash="KqLWZM" data-default-tab="js,result" data-user="yamanoku" data-embed-version="2" data-pen-title="Intersection Obeserver Test code" class="codepen">See the Pen <a href="https://codepen.io/yamanoku/pen/KqLWZM/">Intersection Obeserver Test code</a> by Oyama Michinoku (<a href="https://codepen.io/yamanoku">@yamanoku</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

[![https://gyazo.com/bebf722e1e507c4b4a1fe9b5c01dd81b](https://i.gyazo.com/bebf722e1e507c4b4a1fe9b5c01dd81b.gif)](https://gyazo.com/bebf722e1e507c4b4a1fe9b5c01dd81b)

いわゆる「ある程度の表示にきたらヘッダの色を変える」アレです。スクロール量に制御されないので、レスポンシブなどで要素の高さが変わった場合でもこの調整は効きます。
#### サンプルコード（ES6）
```javascript
(() => {
	const clientHeight = document.documentElement.clientHeight;
	const header = document.querySelector('.header');
	let observer = new IntersectionObserver((changes) => {
		for (const change of changes) {
			let rect = change.target.getBoundingClientRect();
		  	let h = (0 < rect.top && rect.top < clientHeight)		// 対象の上端は表示領域に入っている
				|| (0 < rect.bottom && rect.bottom < clientHeight)	// 対象の下端は表示領域に入っている
				|| (0 > rect.top && rect.bottom > clientHeight);	// 上端下端も表示されてないがその間が表示されている
			if(h) {
					header.classList.remove('scrolled');
			} else {
					header.classList.add('scrolled');
			}
		}
	});
	let target = document.querySelector('.main-middle'); // この要素のから外れたら
	observer.observe(target);
})();
```
コード内でいうところのtarget部分に何を指定するかでどの位置で変化するか制御することが出来ます。

```javascript
let target = document.querySelector('.main-middle');
```

また```unobserve()```を使用することでその対象の監視を終了させることができるので、１度限りの処理も対応できます。


#### 画像遅延読み込み
Intersection Observerを使うと以下制御で実現出来る感じです

```html
<img src="" data-src="/img/img_1.jpg" alt="img_1" class="lazy" />
<img src="" data-src="/img/img_2.jpg" alt="img_2" class="lazy" />
<img src="" data-src="/img/img_3.jpg" alt="img_3" class="lazy" />
<img src="" data-src="/img/img_4.jpg" alt="img_4" class="lazy" />
<img src="" data-src="/img/img_5.jpg" alt="img_5" class="lazy" />
...
```

```javascript
let observer = new IntersectionObserver(onChange);
function onChange(changes) {
  changes.forEach(change => {
    // data-src属性の画像URLをsrcに挿入
    change.target.src = change.target.dataset.src;
    // 挿入し終わったら監視を終了
    observer.unobserve(change.target);
  }
}
// 配列化した画像一覧
const imgs = [ ...document.querySelectorAll('.lazy') ];
// それぞれに順次監視処理
imgs.forEach(img => observer.observe(img));
```

ちなみに上記の場合だと、画像が小さかったりして読み込みがない表示があるなどラグが起こりうるので、オプションの```rootMargin```で要素の上下左右に空きを指定しておけば、その要素がくる前の段階でイベントを発火させることも出来ます。
marginの指定の順序はCSSのそれと同じです。

```javascript
{ rootMargin: '10px 0px' } // 上下10px、左右0pxの空き
```

```javascript
{ rootMargin: '-10px 10px -5px' } // 左記のようにマイナス値も設定できる。
```

ちなみに、0の時は必ず単位を省略せずに書かないとエラー判定になります。

### Callback 例
以下参考までに。

```javascript
let observer = new IntersectionObserver(changes => {
  for (const change of changes) {
    console.log(change.time);               // 変化が生じた時点でのタイムスタンプ
    console.log(change.rootBounds);         // root の getBoundingClientRect()
    console.log(change.boundingClientRect); // target の getBoundingClientRect()
    console.log(change.intersectionRect);   // 交差領域の getBoundingClientRect()
    console.log(change.intersectionRatio);  // 交差している領域の割合
    console.log(change.target);             // target にされている要素
  }
}, {});

const target = ... // ターゲットとする要素
observer.observe(target); // 特定のtargetに対して，監視開始
observer.unobserve(target); // 特定のtargetに対して，監視をやめる
observer.disconnect(); // すべての target に対し，監視をやめる

```

### Polyfill（2017/07現在）
現状Intersection ObserverはIE Edge最新、Firefox最新、Chrome最新、Androidブラウザ最新のみの対応につきPolyfillが必要となります。([Can I Use](http://caniuse.com/#feat=intersectionobserver))

```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
```

#### 追記（2019/02/05）

Safari12.1でもIntersection Observer APIがサポートされるようになりました。

- [Safari 12.1 Release Notes | Apple Developer Documentation](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes)
- [IntersectionObserver in WebKit | WebKit](https://webkit.org/blog/8582/intersectionobserver-in-webkit/)

## 所感
監視する要素の設定があるので感覚的かと言われると怪しいですが、上記にも書いた辛くて煩わしいスクロールイベントからは離れられそうでそこは安心しました。また、スクロールイベントではなくなるので処理に負荷がかかっていた場合に原因を特定する際にも役立ちそうです。

現状は縦イベントのみで確認していますが、横スクロールのコンテンツの場合でもこれは有効なAPIっぽいなと感じたので後で試してみます。


## 参考URL・記事
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Intersection Observer 1 日本語訳](https://triple-underscore.github.io/IntersectionObserver-ja.html#intersection-observer-callback)
- [FRESH! Web パフォーマンス改善 〜クライアントサイド編〜](https://developers.cyberagent.co.jp/blog/archives/6057/)
- [Intersection Observer を用いた要素出現検出の最適化](https://blog.jxck.io/entries/2016-06-25/intersection-observer.html)
- [Quick introduction to the Intersection Observer API
](https://jeremenichelli.github.io/2016/04/quick-introduction-to-the-intersection-observer-api/)
