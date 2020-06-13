---
title: opacity、visibilityで要素消した時の注意点
description: CSSでopacity、visibilityで要素消した時の注意点についてです
date: 2016-03-07
author: yamanoku
---

マテリアルデザインのCSSアニメーションが顕著になってきましたが業務での気付きがあったので共有メモ。

## opacityやvisibilityで要素を消したり出すアニメーション

```css
.hoge {
  opacity: 0;
  visibility: hidden;
  transition: all .5s linear; /* allだと重いから個別設定のがいい */
}

.hoge.anime {
  opacity: 1;
  visibility: visible;
}
```

適当ですがこんな感じで要素が表示されたりするやつ。アニメーション自体はクラスを付与する動き（clickで`addClass`するとか）を加えれば消えるのをアニメーションとして動作できる感じです。

## 注意点

これを使用する際の注意点は、使用している要素自体は非表示だけど要素の高さ自体は残っているので、予期せぬ高さが表示されてしまうかもしれないということです。

例：[EC-CUBEデモサイト](http://demo3.ec-cube.net/)

[![Image from Gyazo](https://i.gyazo.com/3cfe510ee02489ac12241e273b6b1b4c.png)](https://gyazo.com/3cfe510ee02489ac12241e273b6b1b4c)

EC-CUBEのデモサイトでカートに商品を追加してその中身を確認する時、カートをクリックして表示させます。

この時に上述したアニメーションを使用しているのですが、ここの商品に要素を追加しまくると…

[![Image from Gyazo](https://i.gyazo.com/5f1a3590a504d520c31e336dd5b06496.png)](https://gyazo.com/5f1a3590a504d520c31e336dd5b06496)

このようにfooter箇所を飛び抜けて表示してしまう現象が起こります。これはカートを開いていない時でも同様の現象が起こります。

つまり、<b>opacityとvisibilityで非表示にしても要素自体は消えてなくてそのまま画面内に残っている</b>のです。

## 対応策

なので対応策としては非表示の際には<b>display:none</b>をかけておく。そうすれば要素自体の高さも消える。そして表示する際には表示した際の高さの調整が必要です。要素を追加する必要がない箇所は問題無いですが。

こちらからは以上です。