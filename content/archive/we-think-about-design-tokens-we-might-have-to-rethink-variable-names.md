---
title: Design Tokensを考える前に俺たちは変数名について考え直すことがあるのではないか
description: CSSやSassの変数名について考え直してみようという話
date: 2019-10-02
author: yamanoku
---

## 今回の話すこと・話さないこと

- [Design Tokens](https://scrapbox.io/yamanoku/Design_Tokens)を通して変数名はどうあるべきか改めて考える
  - [CSS](https://scrapbox.io/yamanoku/CSS)というよりかは言葉についての考える回
- 正解についてを話す感じではない
- チームや会社に持ち帰って議論したり考え直すきっかけになれれば

## 前提：[デザインシステム](https://scrapbox.io/yamanoku/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)について

- [![Image](https://gyazo.com/bf04495c0db15a3056502137272cc99c/thumb/1000)](https://gyazo.com/bf04495c0db15a3056502137272cc99c)
- アプリケーションやウェブサイト上での一貫性が保たれ、ユーザーが期待する機能性やユーザビリティを提供できるもの
- デバイスを超えるものでWeb以外でもモバイルアプリにも提供できる
- スタイルガイドラインとの違い
  - そのブランドが何なのかをコード単位で表現されたもの
  - コンポーネント単位で「あ！　これってアレじゃん！」ってなれるもの
- 有名どころ
  - [Google](https://scrapbox.io/yamanoku/Google) - [Material Design](https://scrapbox.io/yamanoku/Material_Design)
  - [Salesforce](https://scrapbox.io/yamanoku/Salesforce) - [Lightning Design System](https://scrapbox.io/yamanoku/Lightning_Design_System)
  - [Microsoft](https://scrapbox.io/yamanoku/Microsoft) - [Office UI Fabric](https://scrapbox.io/yamanoku/Office_UI_Fabric)
  - [Atlassian](https://scrapbox.io/yamanoku/Atlassian) - [Atlassian Design](https://scrapbox.io/yamanoku/Atlassian_Design)
  - [GitHub](https://scrapbox.io/yamanoku/GitHub) - [Primer](https://scrapbox.io/yamanoku/Primer)
  - [USWDS: The United States Web Design System](https://designsystem.digital.gov/)
    - アメリカ合衆国のWebデザインシステム
  - そのほか → [https://designsystemsrepo.com/design-systems/](https://designsystemsrepo.com/design-systems/)
- 参考：[nwc_design#5c3abf5bc2cd3f0000566b24](https://scrapbox.io/yamanoku/nwc_design#5c3abf5bc2cd3f0000566b24)

## 世はまさに大デザインシステム時代
- デザインシステムツールの流行
  - [Figma](https://scrapbox.io/yamanoku/Figma)
  - [Invision](https://scrapbox.io/yamanoku/Invision)
  - [Storybook](https://scrapbox.io/yamanoku/Storybook)
  - [zeroheight](https://scrapbox.io/yamanoku/zeroheight)
  - [Zeplin](https://scrapbox.io/yamanoku/Zeplin)
- [designsystems_tokyo](https://scrapbox.io/yamanoku/designsystems_tokyo)
  - 事業会社がデザインシステムについてガチンコで考えるコミュニティ
    - 参加企業
      - メルなんとか
      - サイバーなんとか
      - ビズなんとか
      - リクルートテクなんとか
      - frなんとか
      - 弁護士なんとか.com
  - 参加メモ書き → [ds.t #Clarity2019 Redux in Tokyo](https://scrapbox.io/yamanoku/ds.t_%23Clarity2019_Redux_in_Tokyo)
- [Clarity](https://scrapbox.io/yamanoku/Clarity) Conference
  - [https://www.clarityconf.com/](https://www.clarityconf.com/)
  - [デザインシステム](https://scrapbox.io/yamanoku/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)のカンファレンス
    - 2019年で4回目
  - [Design Systems Coalition](https://scrapbox.io/yamanoku/Design_Systems_Coalition)
    - 前身のイベント
    - [https://design.systems/coalition/](https://design.systems/coalition/)
  - デザインシステムのツールが増えたのはこうした機会で議論されて開発された背景があるそうです

## [Design Tokens](https://scrapbox.io/yamanoku/Design_Tokens)とは？
- [デザインシステム](https://scrapbox.io/yamanoku/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)における、いわゆるスタイル変数集
- `Single Source of Truth`（単一の情報源）と呼ばれるもの
  - 利用することのメリット
    - そのToken値こそが真である（信頼できるデータ）
    - デザインデータから逐一カラーコード・空き・余白などを取得しなくてもいい
    - 一括置き換えしやすくなる
      - 大元を一気に変える
      - スタイルを使ってる箇所を変更する
- Tokensの例
  - カラー
    - テキスト
    - 背景色
    - ボーダー
  - フォント
  - シャドウ
  - メディアクエリ
    - スマートフォン
    - タブ
    - デスクトップ
  - アニメーション
- Tokens形式
  - [CSS variables](https://scrapbox.io/yamanoku/CSS_variables)
  - [SASS](https://scrapbox.io/yamanoku/SASS)、[SCSS](https://scrapbox.io/yamanoku/SCSS)変数
  - [json](https://scrapbox.io/yamanoku/json)ファイル
  - [yaml](https://scrapbox.io/yamanoku/yaml)ファイル
- [Design Tokens Generator](https://quinalha.me/design-tokens-generator/)

デザインシステムというものを構築する面で考える必要がある１つの部分

本題：Design Tokensを設定する上で気をつけなければいけないと思ってること

（もとい変数名についてを考え直したいこと）

## 例：スタイル名と実際のカラーが不一致
- 起こりうる悲劇
  - [![Image](https://gyazo.com/5dba2a8c0cbbcb58bde3bdf6f81b1108/thumb/1000)](https://twitter.com/8845musign/status/1176725368696270850)
- 使い方として多様なシーンで利用されていたのではないか
- クラス名だけが形骸化してしまった
- 色が目視でわかる人ならいいが、わからない人はこの違いに気付けるのか？

## 変数名を色名でつけるのは悪手なような気がしてる
- その色名はほんとうにその色なのか？
  - `$green`だけど青緑
    - 「いやまぁgreenじゃん」「まぁそうですが…」
    - 色盲の人はその色がちゃんと見えるか？
      - 「これはgreenだから」「（そうは見えないのですが…）はい！」
- [![Image](https://gyazo.com/95a0518dfd6707eb677e5a9ef2a9e26e/thumb/1000)](https://twitter.com/murokaco/status/1179702099354902528)
  - わかる
- 曖昧な色名はどうつける？
  - [![Image](https://gyazo.com/1f3d9374a1f7d12b658c5ebcf9c25505/thumb/1000)](https://gyazo.com/1f3d9374a1f7d12b658c5ebcf9c25505)
    - どう変数名をつける？
  - [![Image](https://gyazo.com/6c1a2c95c104ec489de50d84da8a9c20/thumb/1000)](https://gyazo.com/6c1a2c95c104ec489de50d84da8a9c20)
    - 赤い方が`purple`、青いほうが`violet`
      - と、分かっていたとしてもコードベースだけで瞬時に切り替えられるだろうか？
- 教養あるなしになってこないか？
  - ある程度教養は必要な気はするが…
  - 皆が同様に使うために必要なハードル・バリアは減らしていきたい

## 色についてのアプローチ例
- [Atlassian](https://scrapbox.io/yamanoku/Atlassian)のデザインシステム
  - カラー名が「色の名前」に準拠しきってない
  - [![Image](https://gyazo.com/f8eb734831a0b41139e7c1b1ce4bc5a9/thumb/1000)](https://gyazo.com/f8eb734831a0b41139e7c1b1ce4bc5a9)
    - `Pacific bridge`
    - `Squid ink`
    - `Doctor`
  - 「赤」についてもRed〜みたいなのばかりではなくバリエーションがある
    - [![Image](https://gyazo.com/ca9662a3cd4e78206ccbda34f54f8a3d/thumb/1000)](https://gyazo.com/ca9662a3cd4e78206ccbda34f54f8a3d)
    - 覚える内容は増えるが、独立性は保てている

## 例：その単語はイメージしやすいものか
- プログラミングは英語
- 皆さんの英語力はいかほどか？
  - 聴きも読みも杜撰なレベルです
- `primary`, `secondary`
  - `button-color-primary`、`button-color-secondary`
  - みたいな感じで、よく見るWordですね
  - ではその次はなんでしょうか？
  - [![Image](https://gyazo.com/3649c05e400db327ff4b11af9315f87a/thumb/1000)](https://kw-note.com/trivia/what-comes-after-primary-secondary/)
    - 教養問題
    - そもそも「プライマリ」ってなんだよ
- 番号名でやることが正解だろうか？
  - 見出しレベルのようなイメージ
  - `$button-color-01`,  `$button-color-02`, `$button-color-03`, `$button-color-04`...
  - うーん
- モーション・アニメーションがあったりしたら…
  - [![Image](https://gyazo.com/febc491246a35fa4dd0590c25d45089b/thumb/1000)](https://gyazo.com/febc491246a35fa4dd0590c25d45089b)
    - [Easing Functions Cheat Sheet](https://easings.net/)
  - 指定された変数名で動きは統一されるけど
  - 果たしてその言葉で想起しやすいだろうか？

## 親しみやすいWordを考える
- [freee株式会社](https://scrapbox.io/yamanoku/freee%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE)のデザインシステム名は[vibes](https://scrapbox.io/yamanoku/vibes)（バイブス）
  - [デザインシステムの設計とアクセシビリティの実現 - Speaker Deck](https://speakerdeck.com/ymrl/dezainsisutemufalseshe-ji-toakusesibiriteifalseshi-xian?slide=21)
  - [![Image](https://gyazo.com/aba4581a5e8fc595d9d2a95908b6b693/thumb/1000)](https://twitter.com/hattorixxx/status/917720911914004481)
  - バージョンが上がるのを`バイブスが上がる`とか言ってたらしい
- 変数名は所詮変数でしかないが
- 普段使っているものを使いやすくする仕組みはあってもいいと思った

## yamanoku.netの実装から見る反省・改善点
- ポートフォリオサイトでもカスタムプロパティを通してDesign Tokensを利用している
  - [https://yamanoku.net/about/#about:color-contrast_heading](https://yamanoku.net/about/#about:color-contrast_heading)
- [![Image](https://gyazo.com/e89b92732c8eec1fc66826bb88ab5f99/thumb/1000)](https://gyazo.com/e89b92732c8eec1fc66826bb88ab5f99)
  - このほか[バーティカルリズム](https://scrapbox.io/yamanoku/%E3%83%90%E3%83%BC%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%AA%E3%82%BA%E3%83%A0)の指定もある
    - `--rhythm: 24px`
    - marginとかpaddingはここに準拠する
      - 2倍や1/2の場合は[calc](https://scrapbox.io/yamanoku/calc)で制御してる
        - `line-height: calc(var(--rhythm) * 2);`
- 問題点
  - カラーの変数は色名指定してしまってる
    - 一部ハードコーディング箇所あり
  - [ダークモード](https://scrapbox.io/yamanoku/%E3%83%80%E3%83%BC%E3%82%AF%E3%83%A2%E3%83%BC%E3%83%89)での指定
    - ライト
      - [![Image](https://gyazo.com/3c7cb17698b69af30a920bd28d53e146/thumb/1000)](https://gyazo.com/3c7cb17698b69af30a920bd28d53e146)
    - ダーク
      - [![Image](https://gyazo.com/2633a27e6eb32e7f4e69cb5890aa1e7c/thumb/1000)](https://gyazo.com/2633a27e6eb32e7f4e69cb5890aa1e7c)
    - リンクカラーはライトが`linkBlue`だけどダークは`blue`を使用している
      - 後付でやってしまったがための功罪
      - そもそも`blue`とは何のためのものなのか？
      -  それ専用の指定もあっていいのかなと感じるところ
  - 今はページ・コンポーネント数が少ないので破綻しているところはないが大規模だとどうなる？
  - Issue建てた
    - [カラーCSS変数名を色による名前にしておかない · Issue #124 · yamanoku/yamanoku.github.io](https://github.com/yamanoku/yamanoku.github.io/issues/124)

## そんな感じの話で伝えたいこと
- [デザインシステム](https://scrapbox.io/yamanoku/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)とは今後関わらんから…とこういう話題に参加しなくてもいいわけではない
- 「人間が使うもの」を想定してどう設計するのがいいかを今一度考えてみてほしい
  - 新卒・中途の人が参入してきたときに使いやすくなってるか？
  - 外部に依頼出ししたときにも使いやすくなっているか？
  - 再び参画したときに開発しやすいままになっているか？
- 見た目だけではない文字情報における留意もしていかないといけない
  - それが万人に使いやすいものを目指すならなおのこと

俺たちは変数名について考え直しておかないといけない気がする
