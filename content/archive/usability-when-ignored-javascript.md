---
title: JavaScript無効にしたときのユーザビリティとかについて
description: JavaScript無効にしたときのユーザビリティとかについて
date: 2017-05-01
author: yamanoku
---

社内で話した内容で気づけてよかったことなのでまとめてみる。自戒も込めてます。

## 話し合ったこと

- 最近はJavaScript無効な環境とかに対して優しくする意識はないのではないか
  - SPAとかなんかJavaScriptあり気なんだしでかいFlashを1つ置いててiPhoneで見る場合のと同義っぽい（※SPAをdisってる訳ではない）
- JavaScriptでガッチリ組みすぎてるのもアレだけど、とはいえ今のレイアウトはJavaScriptありきのものばかりだよね
- そうなるとJavaScriptが動作してなくて崩れてたとしても情報はちゃんと見せてあげたい
- リッチな表現はJavaScriptにのみ任せて、それ以外の基本動作は抜きでもちゃんと機能するようにしたい
- 以下例みたいな考え方をスタンダードにしたい
  - アコーディオンは通常時は出しておき、JavaScript読み込みで非表示にする
  - ローディングとかを入れる時、ローディング自体をすでに出しておきsetTimeOutで消えるみたいな処理にしない（消えなくなる）
  - Googleとかのウェブフォントも極力js読み込みなどを避ける
  - JavaScriptで動作しないと表示しないテキストをやめる（重要なやつだと特に）
    - `text()`とかで出来る限り入れない・表示非表示で切り替える。
  - formのバリデーションはブラウザのバリデーションも意識してやる（最低限required付けるとか）
    - [クライアント側のフォームデータ検証 - ウェブ開発を学ぶ | MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Forms/Data_form_validation)
  - WAI-ARIAについても考えておく必要はある
  - JavaScriptバリバリ使っているサイトだったら最低限の礼儀としてnoscriptタグをちゃんと使おう

## まとめ

結局のところマークアップなりの時点で **HTMLの構造をしっかり作れ** という感じなのですが、デザインでもJavaScript使えて当然なリッチなものも多いのでその辺意識しないと結構大変だなと思うようになってます。

まあ結局ケースバイケースでJavaScriptやれる部分はJavaScriptでやるという部分はやっておき、万一のことは`<noscript>`なりできっちり表示しといたほうがいいよなと感じます。

というか最近フロントエンド界隈でのフレームワークだのビルドツールだのどうだこうだの話もありますが、まずは根本の話をしませんか、という気持ちがあります。こちらからは以上です。

## 参考
- [ユーザビリティ/アクセシビリティとJavaScript | Accessible & Usable](https://accessible-usable.net/2007/07/entry_070701.html)
- [フロントエンド開発者が実践したい、アクセシビリティに配慮したJSを書くコツ – WPJ](https://www.webprofessional.jp/writing-javascript-with-accessibility-in-mind/)
