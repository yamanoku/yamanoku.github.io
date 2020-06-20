---
title: PlayBackTech2018
description: 2018年に関わってきた技術に関する振り返り
date: 2018-12-01
author: yamanoku
---

[![Image](https://gyazo.com/48d84dac71d8c0ece8e16379ede834ba/thumb/1000)](https://gyazo.com/48d84dac71d8c0ece8e16379ede834ba)

- feat. [平成ドロー生成](https://walkingmask.github.io/heiseidraw/)
- 2017年 => [PlayBackTech2017](/archive/playback-tech-2017)

## CSS Grid Layout

[![Image](https://gyazo.com/6f82a1382d08fee4cca8e04dea5c4536/thumb/1000)](https://gyazo.com/6f82a1382d08fee4cca8e04dea5c4536)

- 今年様々な案件で利用できた
- レスポンシブにおける複雑なレイアウトに対応するのに向いている気がする
  - PCとSPとでレイアウトが異なる時
    - PCのときだけ親にwrapperなどを挟んで妥協するなどしていたが
    - 不必要なDOMを書かずに済むようになった
  - 例：[複雑なフッター階層の配置](https://codepen.io/yamanoku/pen/ZmVRrv)
- autoprefixerのおかげでIE対応もおおよそできるようになったと思う
  - [CSS Gridのgap（grid-gap）が遂にIE 11でも再現できるように。Autoprefixerが待望のアップデート - Qiita](https://qiita.com/tonkotsuboy_com/items/10fc250ac579a32e9ee9)

## アクセシビリティ活動

[![Image](https://gyazo.com/9e358448e053d1f1998bd045d413562b/thumb/1000)](https://gyazo.com/9e358448e053d1f1998bd045d413562b)

- 去年からやっていくぞみたいなことをやってたので個人的に色々やってみてます。
- WAI-ARIAの導入・実施
  - 去年より引き続き
  - パンくず、ハンバーガーボタン、タブ切り替え、アラート表示などに導入
- タブキーなどのキーボード移動への意識
- A11YJ_Slackへの参加
  - 質問してみたり色々とながめてみたり
  - アクセシビリティおじさんたちは非常に頼もしい
- 入門書を書いてみた
  - 後述する技術書典#5参加において発表
  - WCAGの翻訳をされているもんどさんにFBをもらえた（対応遅れてすみません…）
    - [もんどさんからのFB対応 – 第4章 · Issue #2 · yamanoku/accessibility_book-issues](https://github.com/yamanoku/accessibility_book-issues/issues/2)
    - [もんどさんからのFB対応 – 第6章 · Issue #3 · yamanoku/accessibility_book-issues](https://github.com/yamanoku/accessibility_book-issues/issues/3)
- 社内アクセシビリティ勉強会を開けた
  - [誰がためにアクセシビリティ対応をするのか？](https://scrapbox.io/yamanoku/%E8%AA%B0%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E5%AF%BE%E5%BF%9C%E3%82%92%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B%EF%BC%9F)
  - プログラマーだけではなく、職務に関わらず誰もが取り組めることを強調
  - プロダクトにどう取り組むか？`alt`どうするか？　などが議論できた
  - 株式会社インフォアクシア様が運用しているWebA11y.jpに取り上げてもらえた！（嬉しい）
    - [https://twitter.com/weba11y/status/1065428929165455360](https://twitter.com/weba11y/status/1065428929165455360)
- 外部勉強会でも啓蒙してきた
  - [outline: none;](https://scrapbox.io/yamanoku/outline:_none%3B)
- 来年もやっていくぞ！　！！！！！！！！！！！！！！！

## Sublime TextからVisual Code Studioの乗り換え

[![Image](https://gyazo.com/9a84874ffd2020a35f33fae6e5abe305/thumb/1000)](https://gyazo.com/9a84874ffd2020a35f33fae6e5abe305)

- Sublime Textのアップデートにより使えないパッケージがでてきたので物は試しで乗り換えてみた
  - するといろいろ便利機能があることが判明して無事乗り換え成功した
- [Visual_Studio_Codeに移行してよかったこと](https://scrapbox.io/yamanoku/Visual_Studio_Code%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8)
  - 統合ターミナル
  - ESLint / prettierの自動整形
  - TypeScript関連の強さ
  - `Git clone`機能（拡張）
  - 最近まで会社のエディタにeditorconfig入ってなくて戦慄した（修正済み）

## ホスティングサービスがアツい

- Netlify
  - [![Image](https://gyazo.com/9f86f8a1f474ab9eb6f3ccbe109795eb/thumb/1000)](https://gyazo.com/9f86f8a1f474ab9eb6f3ccbe109795eb)
  - 個人的一押しサービス
  - プライベートリポジトリも無料でホスティングできる
- Firebase
  - [![Image](https://gyazo.com/c6e057f43e4dc45e6a30fa051d61d668/thumb/1000)](https://gyazo.com/c6e057f43e4dc45e6a30fa051d61d668)
  - 最近人気がある？　GCPよりかは名前をよく聞く
  - 年収1000万いけるらしい
  - [11. フロントエンドエンジニアのキャリアパス](https://bkkcast.me/011/)
- now
  - [![Image](https://gyazo.com/8ffaa569d5871e67db9ad4292e2aa9e5/thumb/1000)](https://gyazo.com/8ffaa569d5871e67db9ad4292e2aa9e5)
  - ビルドがめちゃくちゃ簡単
  - アプデが頻発
- 昔はHeroku、AWS_S3だけだった気がするけど、だいぶ競合が増えた気がする
  - reInventで新しいのが出たっぽいです
    - [新サービス「AWS Amplify Console」登場！簡単3ステップでWebアプリのCI/CD環境を構築！ #reinvent ｜ DevelopersIO](https://dev.classmethod.jp/cloud/aws/amplify-console/)

## Renovate

[![Image](https://gyazo.com/330388a9f5d6d18640bd029b0bf20a0e/thumb/1000)](https://gyazo.com/330388a9f5d6d18640bd029b0bf20a0e)

- サイボウズフロントエンドMeetUpの[Teppeis](https://twitter.com/teppeis)さんのスライドで知った
  - [Automated Dependency Updates with Renovate](https://www.slideshare.net/teppeis/automated-dependency-updates-with-renovate-102769685)
- npmパッケージのアップデート自動化をより用意にしてくれた
  - Pull_Requestで通知
  - Greenkeeperの上位互換？
- パッケージ管理が多い場合はマージを自動化するなどがよさそう
  - メジャーバージョン以外をマージするのでOK？
  - 特定のパッケージは管理しないなどもできる

## 脱jQueryの機運を高める

- 個人的な目標としてjQueryの使用をやめようとしてみた
- 今年GitHubも実施していた
  - [Removing jQuery from GitHub.com frontend](https://githubengineering.com/removing-jquery-from-github-frontend/)
- 何故やめようとしたか
  - 単純なセレクタ取得は`querySelector`がやってくれる
  - ライブラリを読み込まなくてもよい（容量）
  - よしなにしてくれたのを廃止してロジックを理解する
  - 依存しないコードでほかモダンフレームワークなどに派生できる
  - 最近のバージョン更新頻度から見て、進化を感じられなくなった
    - [jQuery 3.3.0 – A fragrant bouquet of deprecations and…is that a new feature? | Official jQuery Blog](https://blog.jquery.com/2018/01/19/jquery-3-3-0-a-fragrant-bouquet-of-deprecations-and-is-that-a-new-feature)
- しかし頼るべきところがあればそこは頼る
  - `offset().top` 周りの挙動
  - プラグインを使用したデザイン・仕様
- 結果として
  - ES6でモリモリ書けるようになった
  - 頼っていたことは大したレベルのことではなかったとわかった
  - 社内の新規開発案件では今後目にすることは無いと思う
  - リニューアル案件やビジュアル重視とか納期重視だとまだ残るとは思う
    - なんだかんだで楽なので
  - レガシーなものを書き換えていきたい欲が出た

## Scrapboxの社内活用

[![Image](https://gyazo.com/5f93e65a3b979ae5333aca4f32600611/thumb/1000)](https://gyazo.com/5f93e65a3b979ae5333aca4f32600611)

- もともと自分で使ってみていた
- 会社内でもやってみようとのことでクリエイティブチーム内で実施
- [Scrapbox Drinkup #4 Tokyo Edition](https://nota.connpass.com/event/87600/)に参加してみて改めてその凄さを実感
- 社内啓蒙で悩んでたら[Nota Inc.]Nota_Inc.)さんに来てもらって勉強会をやってもらった
  - [Nota社主催でScrapbox勉強会をやってもらった話 – 株式会社GEEKクリエイターズブログ](http://blog.geek.co.jp/archives/2411)
- 有料使用して現在680ページ超え
  - プロジェクトのWikiとして
  - 自己紹介ページ
  - 知見の共有
  - 勉強会のメモ残し
  - 会議の議事録
  - デザインレビュー
  - 社内での意見を募る場として
- などなど様々な活用をしてもらっています
- スタータープランなども出て、ビジネス利用も今後増えそう？
  - [Scrapbox 利用期限なし無料の新プラン ”Business Starter”を発表。社内でスモールスタートしよう。](https://medium.com/@scrapbox/business-starter-95c4355a2035)
- Nota Inc.様からScrapbox情報整理術を献本いただきました。感謝

## パフォーマンス・チューニング

- とあるパフォーマンス・チューニング結果の紹介
- lighthouse Performance評価
  - Before
    - [![Image](https://gyazo.com/f17c1d5c17a0110f02b1fe6040ab4dd8/thumb/1000)](https://gyazo.com/f17c1d5c17a0110f02b1fe6040ab4dd8)
    - First Contentful Paintを除き赤点。全体評価として25点
  - After
    - [![Image](https://gyazo.com/5d0e20c2072216fbda4757339a7e8211/thumb/1000)](https://gyazo.com/5d0e20c2072216fbda4757339a7e8211)
    - First Meaningful Paint, Speed Indexが合格判定、ほか赤点箇所も秒数をほぼ減らせて合計53点
- 初回ロード時のリクエスト比較
  - Before
    - [![Image](https://gyazo.com/3695db66547ec47ceeec0ede67462be2/thumb/1000)](https://gyazo.com/3695db66547ec47ceeec0ede67462be2)
    - 主に画像や動画などの読み込みが多重化しており、20000msかかっていた
  - After
    - [![Image](https://gyazo.com/eb0aa95ee51f245a875b1843fe94c668/thumb/1000)](https://gyazo.com/eb0aa95ee51f245a875b1843fe94c668)
    - 遅延読み込みを活用し、初回のリクエストを減らした結果2000msという1/10の短縮に成功！
- lighthouseと少し仲良くなれた
  - [Lighthouse によるウェブアプリの監査  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/lighthouse/?hl=ja)
- コンテンツの遅延取得でIntersection_Observer無双した
- HTTP/2が大事だなと感じた
  - ただ使い所をきちんと理解しないといけない
  - [HTTP/2が速いという幻想 - Webパフォーマンスについて](http://takehora.hatenadiary.jp/entry/2017/12/27/011121)
- 劇的によくなったというわけではない。パフォーマンス改善とは計測・検証してわずかながらでも数値をあげていこうとする地道な戦いである
  - [http://azu.github.io/slide-pdf.js/?slide=http://azu.github.io/slide//2018/roppongijs/webpagetest-performance.pdf](http://azu.github.io/slide-pdf.js/?slide=http://azu.github.io/slide//2018/roppongijs/webpagetest-performance.pdf)
    - **速くするのではなく遅くしない（not-slow）**
- [超速本](http://gihyo.jp/book/2017/978-4-7741-9400-4)にはお世話になりました。

## stylelint

- 社内configのものにsassルールも追加
  - [update stylelint-config · geekcojp/config@eae7a70](https://github.com/geekcojp/config/commit/eae7a70641be2a97832d8b2ec934bae0e7a08cfa)
- 要望によりdepth周りを設定しようと画策中

## Nuxt.jsで爆速開発体験

- 1月に1系がリリース
- 9月に2系がついにリリース
  - [Nuxt.js 2.0: Webpack 4, ESM Modules, create-nuxt-app and more! 💫](https://medium.com/@nuxt_js/nuxt-js-2-0-webpack-4-esm-modules-create-nuxt-app-and-more-6936ce80d94c)
  - 2系が出て[最速でvue-cliで作ったNuxtスターターキットでNuxt1 => 2に上げるやり方](https://qiita.com/yamanoku/items/6eb9cf3cd35356ce0ba8)というのを書いた
    - その後、公式がvue-cliで作成するのは**deprecatedと発表**
- とにかく爆速で開発できるメリットがある
  - モダン開発環境を一瞬で用意してもらえる
  - webpackなどのバンドル処理周りを気にしなくていい
  - ディレクトリが決まっている＝ルール・規約を制定しやすい
  - 公式配布のプラグイン周りが豊富
  - コンポーネント単位で再利用した設計ができる
  - scoped cssが書ける。CSS設計思想など死んだ
  - 爆速静的サイト作成ツールとして認識してもいい
    - 今年のAdobe MAX JapanのサイトもNuxt.js製
    - [Nuxt.jsによるAdobe MAX Japan 2018公式Webサイト制作の舞台裏 – Speaker Deck](https://speakerdeck.com/haribote/nuxt-dot-jsniyoruadobe-max-japan-2018gong-shi-websaitozhi-zuo-falsewu-tai-li)
  - もちろんVue.js記法で書かないといけないが大きいデメリットでもないと思う
- 社内勉強会を実施
  - [Nuxt.jsで爆速開発最高だぜ勉強会@2018-11-16](https://scrapbox.io/yamanoku/Nuxt.js%E3%81%A7%E7%88%86%E9%80%9F%E9%96%8B%E7%99%BA%E6%9C%80%E9%AB%98%E3%81%A0%E3%81%9C%E5%8B%89%E5%BC%B7%E4%BC%9A@2018-11-16)
- 開発のみならず制作会社としても今後使っていく層はどんどん広がっていきそう

## PWA

[![Image](https://gyazo.com/5dec5cb8c410a2ab9238e79a0aee2f0b/thumb/1000)](https://gyazo.com/5dec5cb8c410a2ab9238e79a0aee2f0b)

- Progressive Web App
  - Progressive = 漸進的
  - Webをアプリのものに徐々に近づけていく思想
- 以下の条件で構成されている
  - レスポンシブ
  - ネットワーク接続に依存しない
    - [Service Worker]Service_Worker)
  - 常に最新
  - https通信必須
  - [Web Push通知]Web_Push％E9%80%9A%E7%9F%A5)
  - manifest.json
  - ホーム画面へのインストール可能
- HTML5 Conference 2018でもamp同様話題にあがってた
- つくったやつ
  - [https://yamanoku.net](https://yamanoku.net/)
    - ポートフォリオ
    - Nuxt.jsで作成
  - [Reading…](https://reading.yamanoku.net/)
    - 去年のRSS作成の流れを受けてやってみた
    - [自分用rssリーダーを作ろうとした](/archive/playback-tech-2017#自分用rssリーダーを作ろうとした)
    - 詳しくは [PWA Advent Calendar 2018 - Qiita](https://qiita.com/advent-calendar/2018/pwa) ６日目にて

## 勉強会・MeetUp・ワークショップ・カンファレンスへの参加、登壇

気がついたら結構参加していた

- [参加した勉強会、MeetUp、カンファレンス、ハンズオン](https://scrapbox.io/yamanoku/%E5%8F%82%E5%8A%A0%E3%81%97%E3%81%9F%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%80%81MeetUp%E3%80%81%E3%82%AB%E3%83%B3%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9%E3%80%81%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3#5afce094c2cd3f0000e0366d)
  - UIT#5わたしたちにとってのVue.js
  - UX Cafe: チームで取り組む！　サイボウズのアクセシビリティ
  - HTML5 Conference 2018
  - We Are JavaScripters! @26th
  - Vue Fes Japan 2018 Reject Conference]
  - Meguro.css#4
  - CI/CD Test Night#1
  - Vue Fes Japan 2018
  - DIST.23「マークアップを止めるな！」
  - NuxtMeetup#5
  - すくすく！　子育てエンジニアMeetup#3
  - STUDIO Workshop#3 @ OHAKO
  - Netlify Meetup Tokyo#2
  - Roppongi.js#6
  - Vue.js Tokyo v-meetup#8
  - Roppongi.js#5
  - Meguro.css#2
  - We Are JavaScripters! @22nd
  - DXEL.1エンジニアとデザイナーが「いい関係」を築くために
  - HTML5 APP CONFERENCE 2018
  - さくらの勉強会フロントエンドナイト
  - Cybozu Meetupフロントエンド#2
  - 第69回HTML5とか勉強会「UIフレームワーク最前線」
  - Scrapbox Drinkup#4 Tokyo Edition
  - Nuxt Meetup#2
  - Roppongi.js#2
  - 技術書典#4
  - すくすく！　子育てエンジニアMeetUp#2
  - すくすく！　子育てエンジニアMeetUp#1
- 地味に登壇もしていました
  - すくすく！　子育てエンジニアMeetup#3発表資料📄[scroll handlerを捨てよ、Intersection Observerへ出よう](https://scrapbox.io/yamanoku/scroll_handler%E3%82%92%E6%8D%A8%E3%81%A6%E3%82%88%E3%80%81Intersection_Observer%E3%81%B8%E5%87%BA%E3%82%88%E3%81%86)
  - Meguro.css#4発表資料📄[outline: none;](https://scrapbox.io/yamanoku/outline:_none%3B)
  - We Are JavaScripters! @26th発表資料📄[家庭内にScrapboxを導入してみる提案](https://scrapbox.io/yamanoku/%E5%AE%B6%E5%BA%AD%E5%86%85%E3%81%ABScrapbox%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B%E6%8F%90%E6%A1%88)
- 来年も引き続き色々参加していきたい

## 技術書典#5参加

[![Image](https://gyazo.com/bf7b22b3e820bbb41c7f6336a0cc26ca/thumb/1000)](https://gyazo.com/bf7b22b3e820bbb41c7f6336a0cc26ca)

- [サークル詳細 | こんのいぬ | 技術書典](https://techbookfest.org/event/tbf05/circle/41130001)
- [これからはじめるWebアクセシビリティ - こんのいぬ - BOOTH](https://booth.pm/ja/items/1044446)
- [技術書典#4]％E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B8%234)に参加してみて「本を作って発信する」ことに久々に熱を感じた
  - 昔同人活動をやっていたのも影響あったかも（もう絵も描かなくなりましたが）
- なんとなく応募してみたら受かってしまったので何かやってみるかとなった
- アクセシビリティの入門書みたいなものを書いたらどうかと思った
  - 自分の知識を深めるきっかけになる
  - 啓蒙もできる
  - アクセシビリティに何かしら貢献できそう
- 色々と反省箇所・準備不足な部分があったが、やってみてよかったと思うことが多かった
  - ただ個人参加すると、欲しいものが入手できないというつらさがあった
- この活動を通して、ようやくアクセシビリティ活動の輪に入れたのかなと感じた

## 2018年もいろいろありましたね（順不同）

- Vtuberラッシュ
- 漫画村閉鎖
- WCAG 2.1の勧告
- Hagexさん
- Osushi
- メルカリ エンジニア大量雇用
- はてなブログ、SSL化
- Yahoo!ジオシティーズ終了のお知らせ
- はてなダイアリー、はてなハイクサービス終了のお知らせ
- 五反田バレー、シブヤ・ビットバレー
- mineo通信の最適化実施
- Twitter User Streams API廃止
- Pixel3日本上陸
- [Internet Explorer の今後について – Japan IE Support Team Blog](https://blogs.technet.microsoft.com/jpieblog/2018/07/18/internet-explorer-support/)
- 国際信州学院大学
- Node.js 10系リリース
- GDPR
- サイトブロッキング騒動
- GitHub、Microsoft買収
- ニコニコ動画、SSL対応
- Mac OS Mojave
- Chromeアドレス欄からサブドメイン削除
- React Hookの衝撃
- 東京オリンピックボランティア申し込みフォーム
- ZOZOタウン社長、月へ行く宣言
- リニューアル国税庁URLリダイレクト無効
- DX: Developer Experience（開発体験）
- 侍エンジニア塾
- [azuさん転職活動開始](https://azu.github.io/open-job-letter/)
- WordPress 5.0リリース（まもなく）
