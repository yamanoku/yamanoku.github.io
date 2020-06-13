---
title: colorbox - iframeでYoutube使う時の諸注意
description: colorboxでYoutube使う時の諸注意について
date: 2016-03-23
author: yamanoku
---

## 経緯

colorboxでyoutube動画をモーダルギャラリーで見せるみたいな流れになった。

やり方は以下の感じ。

```html
<p>
  <a href="https://www.youtube.com/embed/00000000" class="colorBox">
    <img src="~~" alt="">
  </a>
</p>
```

```js
// 事前にjquery.jsとcolorbox.js読み込んでおく
$(".colorBox").colorbox({rel:'colorBox', iframe: true, width: 640, height: 480, fixed: true, top:'20%',});
```

概ね順調に実装できてたけどWin7のIE11で動画が表示されてから「次へ」「前へ」「閉じる」ボタンが見えなくなった。おそらく被さってたためと思われる。

z-indexで弄ってみたが効果なし。iframeの遅延読み込みでもまったく効果がなかったのでどうしたもんかと悩んでた。

## 解決策

iframeで表示させるのでその辺で調べてみたら以下の記事にぶち当たった。

[IEで埋込みYouTubeが最前面に表示される - knowledge base](http://shinimae.hatenablog.com/entry/2016/01/08/184617)


どうやら読み込み先リンクに<b>「?wmode=transparent」</b>をつければ解決するとのこと。（パラメータがすでに付いている場合は?を&へ変更する）

つまり上記のHTMLを以下のように変更

```html
<p>
  <a href="https://www.youtube.com/embed/00000000?wmode=transparent" class="colorBox">
    <img src="~~" alt="">
  </a>
</p>
```

これで見れた。IE7~9くらいの出来事かと思ってたけど普通にIE11でも起こってたのでそういう問題でもなさそうだった。

変に疲れた。iframeでいい思い出まったくないので早く廃れて欲しい。こちらからは以上です。

[Colorbox - a jQuery lightbox](http://www.jacklmoore.com/colorbox/)
