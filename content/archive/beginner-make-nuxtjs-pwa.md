---
title: よく分かってなくてもNuxt.jsでPWAが作れた話
description: PWA nuxt.js Slack AWSLambda Netlify
date: 2018-12-06
author: yamanoku
---

この記事は[PWA Advent Calendar 2018](https://qiita.com/advent-calendar/2018/pwa)の6日目の記事になります。
既視感のあるタイトルですが気にしないでください。

毎年何かしら自分のレベルに合わせて新技術に触れてみる・作ってみるみたいなのを課してるのですが、
今年個人的にチャレンジしてみようと思ったものの１つにPWAがあります。

毎年何かしら自分のレベルに合わせて新技術に触れてみる・作ってみるみたいなのを課してるのですが、
今年個人的にチャレンジしてみようと思ったものの１つにPWAがあります。

そこで今回は大した知識が無くともPWAを作ることができた話をしようと思います。
内容として他の皆様と大したことやってないかもですが、こんなんでも形になったぞというのを知ってもらいたいのもあるので温かい目で見てくださいませ。

## Reading…

<img src="https://gyazo.com/60ae2a3a628a1c6b7ed77bc356fbaeab/thumb/1000" alt="Reading… Logo" width="320">

- Link: [https://reading.yamanoku.net](https://reading.yamanoku.net/)
- GitHub: [https://github.com/yamanoku/reading/](https://github.com/yamanoku/reading/)

日頃自分が見ているニュースを集約してまとめてみたらどうなるだろうか、情報の蓄積・可視化みたいなのを考えておりそういうのができないかなと思ってそれを題材にPWAにしてみようと思いました。以下は経緯みたいなやつです。

> [情報収集ってどうしてる？ - YAMALT vol.04](https://yamanoku.net/LT/lt04/)

### 動作イメージ

[![Reading… iPhoneシュミレーターによる実動作イメージ図](https://gyazo.com/8418eadc1713fd8f083a625706757786/thumb/1000)](https://gyazo.com/8418eadc1713fd8f083a625706757786)

自分が最近見た20件のニュース×５ページ分にした計100件を表示。
ページ間はページネーションで動きます。

### 使用技術

| API      | ホスティング | フレームワーク |
|:-----------------|:------------------|:------------------|
| Slack API <br> AWS API GateWay | Netlify | Nuxt.js |

Nuxt.jsのプラグイン・モジュールは以下を使用

- [vue-paginate](https://github.com/TahaSh/vue-paginate)
    - ページネーション。asyncもあって複数で連携できたり、
    - 個人的には色々あるページネーションの中で導入が簡単（な印象）
- [nuxt-community/pwa-module](https://github.com/nuxt-community/pwa-module)
    - 皆様ご存知のNuxt.jsでPWAにするなら必要になる
    - PWAにしなくともキャッシュ高速化にも使える

あと当初はNuxt1.0で作成していましたが、今年の2.0の発表に合わせて[アップデートしました](https://github.com/yamanoku/reading/commit/6124198e300dc1f8ccc74e14c6b9118e09f36a5d)。

> Nuxt 2でgenerateしたPWAサイトです
> https://twitter.com/yamanoku/status/1043119076489318401

### フローチャート

図です。

![フローチャート 以下説明](https://i.gyazo.com/6c87beb1a40364b5520050b0963fa3e9.png)

- 投稿自体はTwitter
    - シェアする内容の文頭に`Reading...`とつけてツイート
        - 例：[https://twitter.com/yamanoku/status/998900479487692800](https://twitter.com/yamanoku/status/998900479487692800)
    - 別に「Reading」じゃなくてもいいけど、昔使ってた[ニュースアプリ](http://fladdict.net/blog/2012/10/news-storm.html)の名残で自発的にやってる
    - 主な発言地帯がTwitterなだけなので、別にIFTTTと連携できるならなんでもいい
- DBは個人用Slack
    - IFTTTで投稿連携
        - Twitterから「Reading...」と紐づけた特定のものを拾ってくる
        - 連携して個人Slackに投稿されて全件検索される
        - [![Image](https://gyazo.com/1948eaf267fa165a4b4b1fef5afff211/thumb/1000)](https://gyazo.com/1948eaf267fa165a4b4b1fef5afff211)
    - Slack APIの制約もあり100件までを抽出。古いものは取得内から消えていく。
    - なぜSlackをデータベースにしたのか？
        - お手軽サーバーレス体験
        - Slack側のメッセージの修正や消去で即JSONに反映してくれる
        - 無料で作れて垢バンの心配がない
            - Twitter単体だと心配
        - 日経の米朝首脳会談の速報ページで前例あり
            - [こに@SocialDog/whotwiさんのツイート: 日経の米朝首脳会談の速報ページ、気味の悪い拡張子のファイルによるとSlackが使われているっぽい。現地からSlackに投稿するとそのまま公開される仕組みっぽい。すごい今風。](https://twitter.com/koni/status/1006452321583271936)
- AWSでAPI GatewayとLambda FunctionにてAPI変換
    - Slack APIから直接経由だと制約があってしんどかった
        - devtools使うとどのslackから持ってきてるのかとかがわかっちゃう
        - tokenを隠蔽しても`nuxt generate`しビルドしたJS内にtokenとかが見えると警告メールが来てAPI止められる（計4敗）
        - [![Image](https://gyazo.com/22343b9c3de68ed9a44d24d81064bc6b/thumb/1000)](https://gyazo.com/22343b9c3de68ed9a44d24d81064bc6b)
    - 変えてよかったこと
        - tokenを完全隠蔽した
        - CORS対応したのでどこでも取得できる
        - gzip配信もできる
        - 今のところは自分用なのもあって無料枠で収まる内容になってる
    - [Netlify Meetup Tokyo #2](https://netlify-meetup-tokyo.connpass.com/event/100705/)で`Netlify Functions`でもいけそうって話を@mottox2さんから聞けたのでNetlify内で完結できる方向に変えようかと考え中
- [Netlify](https://scrapbox.io/yamanoku/Netlify)でホスティング
    - [GitHub](https://scrapbox.io/yamanoku/GitHub)リポジトリと紐づけてる
    - `nuxt generate` &  `push-dir --dir=dist --branch=master --cleanup`
    - 静的書き出しした`dist`を`master`ブランチにプッシュ
    - `master`ブランチをホスティング
        - [![Image from Gyazo](https://i.gyazo.com/89e1780586aa0aee4322c9a1cdee3fed.png)](https://gyazo.com/89e1780586aa0aee4322c9a1cdee3fed)
    - SSL化やらカスタムドメイン可やらプレレンダリング（今回は未使用）やら無料でやってくれてすごい。
    - あとプライベートリポジトリも使える。

### パフォーマンス

#### lighthouse

- Device: Emulated Nexus 5X
- Network throttling: 150 ms TCP RTT, 1,638.4 Kbps throughput (Simulated)
- CPU throttling: 4x slowdown (Simulated)

上記設定で計測。Perfomance部分は変動ある感じですがだいたいこんな感じ

##### 2018/9/6 計測
[![Perfomance 91, PWA 96, Accessibility 88, Best Practice 100, SEO 100](https://gyazo.com/798f53d86ca89daf3d3d2c02187c44c2/thumb/1000)](https://gyazo.com/798f53d86ca89daf3d3d2c02187c44c2)

##### 2018/12/2 計測
[![Perfomance 95, PWA 96, Accessibility 90, Best Practice 100, SEO 100](https://gyazo.com/62f8aebc83ef63c8637401dca55fa6bd/raw)](https://gyazo.com/62f8aebc83ef63c8637401dca55fa6bd)

#### WebPageTest

- From: Tokyo, Japan - EC2 - Chrome - Cable

上記設定で計測。

##### 2018/9/6 計測
[https://www.webpagetest.org/result/180905_90_60fd3b52c101b6aaeb61fda8ac192468/](https://www.webpagetest.org/result/180905_90_60fd3b52c101b6aaeb61fda8ac192468/)

##### 2018/12/2 計測
[https://www.webpagetest.org/result/181202_Q9_0b087ea9b135cf3ee5e8c790e07853a7/](https://www.webpagetest.org/result/181202_Q9_0b087ea9b135cf3ee5e8c790e07853a7/)

### Fixed & Updates

あんまりPWA要素と関係ないかもですが、更新したことなど。

#### ページネーションをクリックするとスクロール位置が保存されたままになってる
- 中間くらいまでスクロールした状態で移動するとページ間でその位置のまま
    - `position: fixed`と`vh`を使っているせい
- ページが切り替わったときの制御に`scrollTop`をかませた

```javascript
methods: {
  onPageChange() {
    document.getElementsByClassName('news-list')[0].scrollTop = 0;
  }
}
```

```html
<paginate-links
  for="lists"
  @change="onPageChange" <!-- ここ -->
  :show-step-links="true"
  :limit="2">
</paginate-links>
```

#### 絵文字がパースされていない
[![🔥の絵文字が :fire: として出力されている](https://gyazo.com/515ea122571f395b03d8be35b82e4469/thumb/1000)](https://gyazo.com/515ea122571f395b03d8be35b82e4469)

単純にパースしてあげればいいのかなと思ったので、
[node-emoji](https://www.npmjs.com/package/node-emoji) を使いました。

[![🔥絵文字が適応された](https://gyazo.com/6586344df213347f483f99f7ea95c014/thumb/1000)](https://gyazo.com/6586344df213347f483f99f7ea95c014)

👍👍👍👍👍

#### ページネーションのボタンアクセシビリティ対応
今回ページネーションのライブラリで使用した[vue-paginate](https://github.com/TahaSh/vue-paginate)ですが、`<a>`タグのみで`href`で明確なリンク遷移が明示されていない、リンクとして未完成な状態のままでした。
また、`tabindex`指定もないのでタブキーでのフォーカスも効かない状態でした。

そこでページネーションのボタン部分をリンク要素としてではなく`button`タグに変更して、意味あるタグを設置・タブにおけるフォーカスの両方を解消しようと思いました。

ただ、この内容についてIssueで報告する・プルリクエストを提出することを考えた時、個人での運用なのでいつ見てもらえるか・かつ受け入れられるかもわからないという不安がありました。

そこで、リポジトリをforkして自分専用用のモジュールを作ったほうが早いと感じたので、早速対応しました。

- [https://github.com/yamanoku/vue-paginate](https://github.com/yamanoku/vue-paginate)

[![aタグからbuttonタグに変更してタブキーのフォーカスが効くようになった](https://gyazo.com/42475acc4d4f26575615095b57d77a70/thumb/1000)](https://gyazo.com/42475acc4d4f26575615095b57d77a70)

ただ、開閉時の`aria-expanded`ほかWAI-ARIA部分などはまだまだ対応しきれていないので、今後も改良する余地はありそうです（自前実装になる？）。

#### 今後の更新・TODOなど

以下Scrapboxのページにて順次手作業で更新予定です

[https://scrapbox.io/yamanoku/Reading…](https://scrapbox.io/yamanoku/Reading%E2%80%A6)

### PWAを作ってみての感想

- Nuxt.jsにおけるPWA導入が圧倒的にやりやすい・分かりやすいかなと思いました
    - Vue.js依存ですが…
- PWAだけに限らないですが、何かしら動くものを作ってみると、新しいものがきたらそこから派生してみる・検証することができる
- まだまだ改善の余地は大きい部分はあるが試行錯誤していろんなことが検証できるのが楽しい
    - こうしたらいいよ的なアドバイスお待ちしております（コメントでもTwitterでも）
- 今後の派生として、妻を個人Slackに招待して、家族間でのURL共有みたいなのがやれたらいいかなと思っている
    - 妻が結構検索しまくって共有してくれる（育児・買い物・行きたいところ等）
    - 夫婦間での共有を簡易・履歴として残すようにしたい
- 自分でPWAを実装してみてAndroid実機で動かせるのがこれまでにない感覚で面白かった
    - ちなみに[ポートフォリオサイト](https://yamanoku.net)もPWA化しています
    - GitHub Pagesと紐づけているので、配下のページ（リポジトリ）も自動的にPWA判定になっている？
        - [Birthday-Countdown.js](https://yamanoku.net/birthday-countdown-js/) など
        - Service Workerがルートディレクトリで設定されているから？
- 実際にPWAとして使えるものを使ってみたり検証したりしてみる
    - Service Workerがどのような感じで使われているかとか
    - 自分はTwitterはネイティブではなく[Twitter Lite](https://mobile.twitter.com)（PWA版）のを使うようにしています。
- 企業の制作実体験記みたいなのが気になりだす（業務内でのノウハウや失敗など）
    - 最近だとHTML5カンファレンスや7月のHTML5 APP CONFERENCE 2018でその辺が聞けました
        - [PWAの導入で得られた成果と見えてきた課題](https://speakerdeck.com/sisidovski/nikkei-pwa-html5conf2018)
        - [Web プラットフォーム再考 ～PWA のもたらす未来の光と影 ～]( https://scrapbox.io/yamanoku/Web_%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%86%8D%E8%80%83_%EF%BD%9EPWA_%E3%81%AE%E3%82%82%E3%81%9F%E3%82%89%E3%81%99%E6%9C%AA%E6%9D%A5%E3%81%AE%E5%85%89%E3%81%A8%E5%BD%B1_%EF%BD%9E)
        - [pixiv chatstory の PWA としての取り組み](https://speakerdeck.com/ikasoumen/pixiv-chatstory-false-pwa-tositefalsequ-rizu-mi)
        - [モバイルネイティブアプリに代わる存在！？初めてのPWA](https://speakerdeck.com/kasanomo/mobairuneiteibuapurinidai-warucun-zai-chu-metefalsepwa)
- **iOSマジお前．．．**となる気持ちがよくわかる

以上になります。ご覧いただきありがとうございました。
明日（12/7）は@_lemon2003_さんになります。

## 【弊社アドベントカレンダーPR】

[![株式会社GEEK ロゴ](https://i.gyazo.com/a2ce676febed730106792e210ad75eba.jpg)](https://gyazo.com/a2ce676febed730106792e210ad75eba)

最後に宣伝になりますが、私が所属している[株式会社GEEK](https://qiita.com/organizations/geekinc)でもアドベントカレンダーをやっております。良ければご覧になってみてください。
自分はこのアドベントカレンダーほか色んな所に出張執筆予定です。

- [GEEK Inc. Advent Calendar 2018](https://adventar.org/calendars/3108)
- 去年 → [GEEK Inc. Advent Calendar 2017](https://adventar.org/calendars/2422)

GEEKアドベントカレンダーの次回担当はマークアップエンジニアの大房さんになります。