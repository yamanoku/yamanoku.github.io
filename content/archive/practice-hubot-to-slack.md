---
title: Hubot弄ってみる 準備編
description: Slackでbotを動かすためのHubotを触ってみる話
date: 2016-01-17
author: yamanoku
---

## 経緯

[割と本気で家庭用Slack Botを作ってみた - 八発白中](https://blog.8arrow.org/entry/2016/01/13/183349)

[slackで残業申告時間前になったら残業するやつは申告しろって通知するbot作りたいんだけど、通知されたところで自分たちが申告するのを仕事一旦止めてすぐやれるかという人間性の問題について考えてる。](https://twitter.com/yamanoku/status/687067575998525440)

勉強がてら色々と弄ってみたい。とりあえず環境構築してみる。

## Hubot導入前

そもそもnodeのバージョンとかが古いんじゃないのかと思って-vしてみたら3.0くらいのやつだったので、アップデートしたい、というか環境周り色々と整えたいと思ったので自分の中でHubot入れる以前の話になった。

[nodebrew で Mac の Node.js 環境をスッキリさせた - akiyoko blog](https://akiyoko.hatenablog.jp/entry/2015/06/20/132239)

nodebrew入れた方がよさそう、とのことだったので上記参考にnodeとかnpmとかアンインストールして再度インストールした。

個人的に`~/.bash_profile`に追加するので躓きかけた。vimで直接入力してやった。

その後、動かすサーバーとテスト環境が欲しかったのでHerokuとslackを登録した。特に課金とかしなくていいです。

## Hubot導入

導入に先駆けてとりあえずググってみた。以下のが色々と参考になった。

[slackと連携するhubotを3分でインストールする（動画付き）](https://bitwave.showcase-tv.com/slack%e3%81%a8%e9%80%a3%e6%90%ba%e3%81%99%e3%82%8bhubot%e3%82%923%e5%88%86%e3%81%a7%e3%82%a4%e3%83%b3%e3%82%b9%e3%83%88%e3%83%bc%e3%83%ab/)

まずHubotのジェネレーターをインストール

```bash
$ npm install -g generator-hubot
```

そのあとHubotを動かすためのディレクトリを作成。yamabotというのを作ります。

```bash
$ mkdir yamabot
$ cd yamabot
$ yo hubot
```

そんでこのHubotを定義するために以下のが尋ねられます

- Owner（管理者）
- Bot name（Hubotの名前）
- Description（Hubotの内容）
- Bot adapter（Hubotと連携させるWEBサービス）

Bot adapterの箇所にはslackと入力しましょう。

動作確認としてローカルで動くかどうかを確認。
自分がつけたBot名が表示されてたらOK

```bash
$ bin/hubot
```

## Herokuにログイン、プロジェクト登録

ここまでの状態でHerokuにアップしてみたいのでまずはログイン。
そのあとHubot用のプロジェクトを作ります。
作った後はgitでadd、commit、pushしちゃいます。

```bash
$ heroku login
$ heroku create yamabot
$ git add -A
$ git commit -am "first commit"
$ git push heroku master
```

## Slack API 所得

次にslackに移動してAPIを取得してきます。

[http://my.slack.com/services/new/hubot](http://my.slack.com/services/new/hubot)

[![Image from Gyazo](https://i.gyazo.com/10c5e0bcff205475bac1a3e7142025b8.png)](https://gyazo.com/10c5e0bcff205475bac1a3e7142025b8)

名前を入力して決定を押すとAPIが表示されますのでコピーします。

[![Image from Gyazo](https://i.gyazo.com/323ce8c5a952d8090a05a53b4b665c26.png)](https://gyazo.com/323ce8c5a952d8090a05a53b4b665c26)

コピーしたAPIを以下`<Your token>`に入力して登録します

```bash
heroku config:set export HUBOT_SLACK_TOKEN=<Your token>
```

あとhubotのHerokuに登録したapp urlを以下で入力、確認して
HUBOT_HEROKU_KEEPALIVE_URLに[your bot app url]に入力、登録。

```bash
$ heroku apps:info
...
Web URL: https://yamabot.herokuapp.com/
...
$ heroku config:set HUBOT_HEROKU_KEEPALIVE_URL=[your bot app url]
```

Herokuのダッシュボードに入って登録したプロジェクトのSettings→Domainsでも確認できます。

## Slackを見る

[![Image from Gyazo](https://i.gyazo.com/6e2b8677ec2aa84f9291027947e6b42f.png)](https://gyazo.com/6e2b8677ec2aa84f9291027947e6b42f)

登録したslackを見るとslack bot以外にも自分が登録したHubotが居るかと思われるので
ひとまず適当なチャンネルを作ってInviteします。

そこでbot名を入力した後pingと入力。
直後にbotがPONGと返せたらたぶん設定完了。

[![Image from Gyazo](https://i.gyazo.com/d347e4c0add0fb1e3e4408e875061132.png)](https://gyazo.com/d347e4c0add0fb1e3e4408e875061132)

自分は色々右往左往しながらやったのでちゃんと設定がキレイにできてるか怪しいのですが
botが登録されてPONG言ってるしまあ良いか的な感じです。

もちろん、あっさり行く人はそれでいいです。いかなくても大体なんとかなります。

## 次回の予定

CoffeeScriptいじって色々発言させるのとか。一応の最終目標としては定時に何かしらの報告をしてくれるようにしたい。

進捗あったらまた書きます。

