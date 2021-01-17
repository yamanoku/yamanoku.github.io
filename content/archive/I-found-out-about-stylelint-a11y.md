---
title: stylelint-a11yについて調べてわかったこと
description: stylelint-a11yについて調べてわかったことについてです
date: 2019-08-04
author: yamanoku
---

## 今回のテーマ「`stylelint-a11y`」

[https://github.com/YozhikM/stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

- [VueConf US 2019](https://www.vuemastery.com/conferences/vueconf-us-2019/)の発表で取り上げられていた
  - [Accessibility for Everyone or Accessibility 101 - VueConf US 2019 | Vue Mastery](https://www.vuemastery.com/conferences/vueconf-us-2019/accessibility-for-everyone-or-accessibility-101)
- どのようなルールがあるのかについて調べたので発表
- 最後に個人的な総括

## `content-property-no-static-value`
- > Disallow unaccessible CSS generated content in pseudo-elements
- `aria-label`属性のコンテンツと空の文字列以外の[CSS](https://scrapbox.io/yamanoku/CSS)が生成した`content`を許可しない

```css
.hoge {
  content: "見出し";
}
```

- [content - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/content#Accessibility_concerns)
- > [CSS](https://scrapbox.io/yamanoku/CSS) の生成コンテンツは [DOM](https://scrapbox.io/yamanoku/DOM) に含まれません。そのため、アクセシビリティツリーに現れず、支援技術とブラウザーの組み合わせによってはアナウンスされません。
  - 支援技術＝[スクリーンリーダー](https://scrapbox.io/yamanoku/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC)に認識されない場合がある
    - [![Image](https://gyazo.com/c4f785d430b250de7aea70937190f29e/thumb/1000)](https://gyazo.com/c4f785d430b250de7aea70937190f29e)
      - [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) （2015/3/29）
    - [F87: 達成基準 1.3.1 の失敗例 － CSS の :before 及び :after 疑似要素並びに 'content' プロパティを用いて、非装飾のコンテンツを挿入している | WCAG 2.0 達成方法集](https://waic.jp/docs/WCAG-TECHS/F87.html)

## `font-size-is-readable`
- > Disallow font sizes less than 15px
- 15px以下（11.25pt）を許可しない

```css
.foo {
  font-size: 10px;
}
```

- ちなみにpx指定にするとブラウザ側のフォントサイズ変更が効かなくなるので相対指定にしましょう
  - ％, em, rem

## `line-height-is-vertical-rhythmed`

- > Disallow not vertical rhythmed line-height
- [バーティカルリズム](https://scrapbox.io/yamanoku/%E3%83%90%E3%83%BC%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%AA%E3%82%BA%E3%83%A0)となっていない`line-height`を許可しない
  - [![Image](https://gyazo.com/2d3fc8a922e2c0d63bf9ae26bc8d64f5/thumb/1000)](https://gyazo.com/2d3fc8a922e2c0d63bf9ae26bc8d64f5)
  - px指定の場合、24の倍数にする
  - 整数値指定の場合、1.5以上にする
    - > 主要な段落コンテンツでは、 line-height の値の最小値が 1.5 になるようにしてください。
    - > [アクセシビリティの考慮事項 - line-height - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/line-height#Accessibility_concerns)
    - > Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.
    - > [Success Criterion 1.4.8 Visual Presentation - Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

```css
.foo {
  line-height: 12px;
}
.foo {
  line-height: 1.3;
}
.foo {
  line-height: 50px;
}
```

- バーティカルリズム対応には`line-height-step`が有用ではあるが、まだすべてのブラウザでは未対応
  - [line-height-step - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/line-height-step)
  - [CSS Rhythmic Sizing で Vertical Rhythm | blog.jxck.io](https://blog.jxck.io/entries/2017-10-09/css-rhythmic-sizing.html)
  - [もっと細かい値を基準にしたVertical Rhythm - yuhei blog](https://yuheiy.hatenablog.com/entry/2017/04/02/210214)

## `media-prefers-reduced-motion`

- > Require certain styles if the animation or transition in media features
- ユーザー側でアニメーションのモーションを切れるようにする（していないとエラー）

```css
.bar {
  animation-name: skew;
}
@media screen and (prefers-reduced-motion: reduce) {
  .bar {
    animation: none;
  }
}
```

- [MacOS](https://scrapbox.io/yamanoku/MacOS)
  - 環境設定 > [アクセシビリティ](https://scrapbox.io/yamanoku/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3) > ディスプレイ > `視差効果を減らす`をチェック
- [iOS](https://scrapbox.io/yamanoku/iOS)
  - 設定 > [アクセシビリティ](https://scrapbox.io/yamanoku/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3) > `視差効果を減らす`をオン
- [Windows](https://scrapbox.io/yamanoku/Windows)
  - Windowsの設定 > 簡単操作 > `Windowsでアニメーションを再生する` をオフ
- [Android](https://scrapbox.io/yamanoku/Android)はPie（ver.  9）から支援技術（アクセシビリティ）で視差効果減らすのができる
  - 8以前はデベロッパー機能を開放しないといけない
    - [【Android】動作がサクサクに！アニメーション設定を変更してスマホ操作の体感速度をアップさせる方法 ≫ 使い方・方法まとめサイト - usedoor](https://usedoor.jp/howto/digital/android-smartphone/animation-henkou-dousa-taikansokudo-up/)

## `media-prefers-color-scheme`

- >Require implementation of certain styles for selectors with colors.
- 色付きのセレクタに特定のスタイルの実装を要求
- メディアクエリでの[ダークモード](https://scrapbox.io/yamanoku/%E3%83%80%E3%83%BC%E3%82%AF%E3%83%A2%E3%83%BC%E3%83%89)の設定を忘れてないかチェック

```css
.foo {
  color: red;
}
@media screen and (prefers-color-scheme: dark) {
  .foo {
    color: white;
  }
}
```

- 色指定したときにメディアクエリでの指定をしていないとエラー

```css
.foo {
  color: red;
}
@media screen and (prefers-color-scheme: dark) {
   .foo {
     background-color: black;
   }
}
```

## `no-display-none`

- >Disallow content hiding with `display: none` property
- コンテンツを隠す時に `display: none`プロパティを使うのを許可しない
  - 視覚的に隠すときに使用すると、スクリーンリーダーで確認できないため
    - 目次用の見出しとか
- 使い方を誤るとヤバそう
  - 本当に見せないようにしている時に引っかかるので
  - `visibility: hidden`のチェックもほしい気がする

## `no-obsolete-attribute`

- >Disallow obsolete attribute using
- 廃止された属性の使用を許可しない
- 一覧
    - [https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-attribute/obsoleteAttributes.js](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-attribute/obsoleteAttributes.js)

```css
body[link] {
  background-color: pink;
}
a, img[datasrc] {
  color: pink;
}
img[align], a[name] {
  color: pink;
}
```

## `no-obsolete-element`

- >Disallow obsolete selectors using
- 廃止されたセレクターの使用を許可しない
- 一覧
  - [https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-element/obsoleteElements.js](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-element/obsoleteElements.js)

```css
blink {
  color: pink;
}
marquee {
  font-size: 200%;
}
```

## `no-spread-text`

- >Require width of text in a comfortable range
- テキストの幅を45文字より大きく80文字未満にする必要がある
- [ディスレクシア](https://scrapbox.io/yamanoku/%E3%83%87%E3%82%A3%E3%82%B9%E3%83%AC%E3%82%AF%E3%82%B7%E3%82%A2) 対応になりうる
  - > テキストの長い行を読む際に、現在読んでいる位置を維持することが困難な[読字障害](https://scrapbox.io/yamanoku/%E8%AA%AD%E5%AD%97%E9%9A%9C%E5%AE%B3)や視覚障害のある利用者が、より効率よくコンテンツをを閲覧したり操作したりできるようになる。
  - > この達成方法はまた、文字サイズの拡大に合わせてカラム幅を広くすることにもなり、それによって、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなる。
    - [C20: ブラウザがサイズ変更されるときに、行が平均で 80 字以下になるようなカラムの幅を設定するために、相対長さを使用する | WCAG 2.0 達成方法集](https://waic.jp/docs/WCAG-TECHS/C20.html)
- 英字だと80字、日本語40字あたりが良い
  - 国際化、海外展開などを考えるときには有用
  - ほか言語だとどうなるのかは気になる
    - 中国語、韓国語
    - アラビア語

## `no-outline-none`

- >Disallow outline clearing
- アウトライン除去を許可しない

```css
.foo:focus {
  outline: 0;
}
.bar:focus {
  outline: none;
}
.baz:focus {
  outline: none;
  border: transparent;
}
```

- なぜ`outline: none;`がいけないか
  - キーボード操作でフォーカス位置が分からなくなる
  - 現在地がどこか確認できなくなる
  - 詳細は記事参照 => [outline: none;](https://scrapbox.io/yamanoku/outline:_none%3B)

## `no-text-align-justify`
- >Disallow content with `text-align: justify`
- テキストの両端揃えをしたコンテンツを許可しない
  - 余白 (隙間) の川ができてしまうのを防ぐ
    - [![Image](https://miro.medium.com/max/1400/1*yCJ2EkFtsYyKJ9K2FTDW6g.png)](https://miro.medium.com/max/1400/1*yCJ2EkFtsYyKJ9K2FTDW6g.png)
  - > 認知障害のある利用者の多くは、両端揃え (左右両端を揃えた配置) されたテキストのブロックで重大なトラブルに陥ることがある
    - [F88: 達成基準 1.4.8 の失敗例 － 両端揃え (左右両方のマージンを揃える) のテキストを使用している | WCAG 2.0 達成方法集](https://waic.jp/docs/WCAG-TECHS/F88.html)

## `selector-pseudo-class-focus`

- >Require or disallow a pseudo-element to the selectors with `:hover`
- セレクタ疑似要素で`:hover`のとき`:focus`を追加するか、それのみを禁止する

```css
a:hover {
  /* settings */
}
```

- [PostCSS](https://scrapbox.io/yamanoku/PostCSS)で設定できるのもある
  - [https://github.com/postcss/postcss-focus](https://github.com/postcss/postcss-focus)

## yamanoku が思ったこと・考えたこと
- 機械チェックでの限界はやはりあると思った
  - > 残念ながら、Webページのアクセシビリティを自動的にチェックできるのは、チェック作業全体の20％前後といわれています。
  - > [【質問】チェックツールを使えば、自動的にチェックできるよね？｜基礎知識｜エー イレブン ワイ［WebA11y.jp］](https://weba11y.jp/basics/faq/automate-testing/)
  - `display: none`自体は悪くない。問題は使い方。
  - あくまでもLintツールであることを忘れない
    - 逆にチェックを通したことによって不利益が生じる人はいないか？
  - [アクセシビリティ](https://scrapbox.io/yamanoku/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3)考慮したユーザーテストはしないといけない
- あえて使うとするなら
  - 廃止属性やセレクタのチェッカーとしてはアリ？
    - レガシー環境での刷新とか
  - 文化を定着させるための１つのツールとしたい
    - 知識として蓄積することは良い

## 関連

[タピオカは出ません!?「タピオカLT」を開催しました!｜太田 良典｜note](https://note.mu/bakera/n/n9dac96dcc572)
