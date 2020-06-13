---
title: Route53でドメイン買ってACMでSSL証明書発行してCloudFrontでGithub Pagesと買ったドメインと紐付けた
tags: AWS route53 GitHub CertificateManager CloudFront
date: 2018-01-04
author: yamanoku
---

## 追記：2018/05/02

Github側でカスタムドメインでもSSL化対応してくれるようになったそうです。

CloudFrontよくわからん、AWSヤダみたいな人は無理しなくても良さそうです😇

https://blog.github.com/2018-05-01-github-pages-custom-domains-https/

## なにこれ

タイトル通りの手順です。流れなので長いのはお許しください。

０からでもうまいことやれたので備忘録として書きました。参考までにどうぞ。

## 事前準備

- AWSへのアカウント登録関連は完了しておく
    - メール認証・クレカ登録などお忘れなく
- Github Pages作成
    - 無料垢でもOK

## Route53でドメインを買う

- Route53にアクセス。
- 「Register Domain」ボタンよりドメイン購入手続き
  - [![Screenshot from Gyazo](https://gyazo.com/1909db49bec796d6b74ac77ecfed36e9/raw)](https://gyazo.com/1909db49bec796d6b74ac77ecfed36e9)
- 購入したいドメイン名を入力
- 欲しいTLD（.com, .net, .orgなど）を選択
- 「Check」ボタンより購入可能なドメインを検索
  - [![Screenshot from Gyazo](https://gyazo.com/cf376fabe3486d6eb63e1251df94e7e0/raw)](https://gyazo.com/cf376fabe3486d6eb63e1251df94e7e0)
- 「Add to cart」で欲しいドメインをカートに追加
- ページ下部の「Continue」ボタンで次へ
  - [![Screenshot from Gyazo](https://gyazo.com/b0a01a379736ad1532a5686602ea2419/raw)](https://gyazo.com/b0a01a379736ad1532a5686602ea2419)
- 購入者入力画面で各種入力
  - [![Screenshot from Gyazo](https://gyazo.com/d4d87e3de77816c712fc21b60107bc69/raw)](https://gyazo.com/d4d87e3de77816c712fc21b60107bc69)
- 「Privacy Protection」項目は特に考慮することがなければ **Hide contact information if the TLD registry, and the registrar, allow it** にチェック
  - [ドメインの連絡先情報のプライバシー保護の有効化/無効化箇所](https://docs.aws.amazon.com/ja_jp/Route53/latest/DeveloperGuide/domain-privacy-protection.html) になります。
- 入力後、問題なければ「Continue」ボタンで確認画面に遷移
- 「Terms and Conditions」の同意確認箇所にチェックを入れ、「Complete Purchase」ボタンで購入確定へ
  - [![Screenshot from Gyazo](https://gyazo.com/b0959d18ff3a0a9bc131e7c060dea8bb/raw)](https://gyazo.com/b0959d18ff3a0a9bc131e7c060dea8bb)
- メールにて購入完了の旨を受け取る。ドメイン購入はこれにて完了。
    - 下図は実際に買ったときのやつ
- AWS Certificate Managerに移動
  - [![Screenshot from Gyazo](https://gyazo.com/b12ce54876c9078d4f5a56f4bc8fd9a4/raw)](https://gyazo.com/b12ce54876c9078d4f5a56f4bc8fd9a4)


## AWS Certificate Manager
- 右上のリージョンが「バージニア北部」になっていることを確認
  - なっていなかったら選択
  - CloudFrontで使用する際に必要
    - [![Screenshot from Gyazo](https://gyazo.com/e0cbe3bbc2412f31a873994c9c171384/raw)](https://gyazo.com/e0cbe3bbc2412f31a873994c9c171384)
- 「証明書のリクエスト」をクリック
  - [![Screenshot from Gyazo](https://gyazo.com/ea43c6b77f7daa425750617e7687e93f/raw)](https://gyazo.com/ea43c6b77f7daa425750617e7687e93f)
- ドメイン名の追加で先程購入したドメインを入力して「次へ」をクリック
  - [![Screenshot from Gyazo](https://gyazo.com/5a965cfe4fe959080d69fe97c73489c9/raw)](https://gyazo.com/5a965cfe4fe959080d69fe97c73489c9)
- 証明書のリクエスト検証はDNSにして「次へ」をクリック
  - [![Screenshot from Gyazo](https://gyazo.com/7492dbf9ddb80adf96005530188916ae/raw)](https://gyazo.com/7492dbf9ddb80adf96005530188916ae)
- 確認で問題なければ「確定とリクエスト」ボタンをクリック。
  - [![Screenshot from Gyazo](https://gyazo.com/00ff6b2169bf0ec63124959a96bbe5f3/raw)](https://gyazo.com/00ff6b2169bf0ec63124959a96bbe5f3)
- その後遷移する確定後の画面より「続行」ボタンをクリック。
- ダッシュボードに遷移して、検証保留中になっているのを確認したらCloudFrontに移動
  - [![Screenshot from Gyazo](https://gyazo.com/d3b93a580edf975761e57c5206a6e640/raw)](https://gyazo.com/d3b93a580edf975761e57c5206a6e640)

## CloudFront
- 「Distributions」ダッシュボードが開いているのを確認して、「Create Distribution」をクリック
  - [![Screenshot from Gyazo](https://gyazo.com/0e310f558925fc82235158f32597e8bd/raw)](https://gyazo.com/0e310f558925fc82235158f32597e8bd)
- Webの方の「Get Started」をクリック
  - [![Screenshot from Gyazo](https://gyazo.com/a62fcd9dca6394d764f93b6d6ef552c5/raw)](https://gyazo.com/a62fcd9dca6394d764f93b6d6ef552c5)

### 01. Origin Settings
- 「Origin Domain Name」に自分のgithub pageを入力
  - ここではgithub pageのURL＝インデックスページという想定です
  - [![Screenshot from Gyazo](https://gyazo.com/a6f565bcc0cd5749338eb8db11087d73/raw)](https://gyazo.com/a6f565bcc0cd5749338eb8db11087d73)

### 02. Default Cache Behavior Settings

- 「Viewer Protocol Policy」を**Redirect HTTP to HTTPS**
- 「Cache Based on Selected Request Headers」を**Whitelist**
- 「Whitelist Headers」で**Hosts**をAdd
  - [![Screenshot from Gyazo](https://gyazo.com/4e7f2fb903010864627793bd8b4b9760/raw)](https://gyazo.com/4e7f2fb903010864627793bd8b4b9760)

### 03. Distribution Settings

- 「Alternate Domain Names(CNAMEs)」 に適応させるドメインを入力
- 「SSL Certificate」は**Custom SSL Certificate**を選択
  - このときAWS Certificate Managerで作成したSSL証明書が選択できると思うのでそれを選択
  - [![Screenshot from Gyazo](https://gyazo.com/45f194497695a27eff634d943475298b/raw)](https://gyazo.com/45f194497695a27eff634d943475298b)
- 01~03までを入力したら「Create Distribution」ボタンをクリック
- その後生成された「Domain Name」（dから始まるやつ）のURLをコピー
  - [![Screenshot from Gyazo](https://gyazo.com/76a42865ccb51d7f3519bc6d07ca1477/raw)](https://gyazo.com/76a42865ccb51d7f3519bc6d07ca1477)
- コピーしたURLが見れる状態になってるかを確認
- アクセスできるのを確認したらRoute53に戻る

## Route53
- 左メニューより「Hosted Zones」を選択、ダッシュボードに購入したドメイン名あるのでクリック
- 「Create Record Set」ボタンをクリック
  - [![Screenshot from Gyazo](https://gyazo.com/75aa0fa79e8c62940ad33d62308e2555/raw)](https://gyazo.com/75aa0fa79e8c62940ad33d62308e2555)
- Nameは空でOK
- TypeはA
- AliasはYesをチェック
  - Alias Targetに先程コピーしたURLを貼る
- 「Save Record Set」クリックで追加
  - [![Screenshot from Gyazo](https://gyazo.com/30d54d9938cd894da5972f2d6b385edb/raw)](https://gyazo.com/30d54d9938cd894da5972f2d6b385edb)

## Github

- GitHub Pagesのリポジトリに移動
- 「Settings」タブより設定ページに移動
  - [![Screenshot from Gyazo](https://gyazo.com/b795df7853711780c14fda9f17a406c2/raw)](https://gyazo.com/b795df7853711780c14fda9f17a406c2)

### GitHub Pages

- 「Custom domain」箇所に購入したドメインを入力、Save
  - DNSの浸透がまだだとはじかれるかもなので、10分くらい待つのとか、CloudFrontのStatusがDeployedになっているかなど確認した上でやる
  - [![Screenshot from Gyazo](https://gyazo.com/cd4592176a225ad12c31d4dad40e106e/raw)](https://gyazo.com/cd4592176a225ad12c31d4dad40e106e)

## 反映を確認

🎉🎉🎉

[![Screenshot from Gyazo](https://gyazo.com/b1faf5eca06214f17314f3330e2ae58a/raw)](https://gyazo.com/b1faf5eca06214f17314f3330e2ae58a)

## 感想

- AWS、自分で１から触るのは始めてなのでDNS浸透なり証明書が無効だったりと色々ありしんどかった。
- ただここまでやっておけばある程度動かせる下地ができる感じなのでやっておいてよかった
- ドメイン買うのももっと安くやる方法もあるだろうけど、AWSサービス間で設定するなら全部まとめてやるのが分かりやすいかなと思ったのでこの手法で良かったと思う

## 参考

- [Github Pagesでホスティングしつつ、CloudFrontを使ってサイトをSSL対応の独自ドメインにする](https://qiita.com/kechol/items/9609e1ab4a673e05b613)
- [CloudFrontを利用して独自ドメインのGitHub PagesをHTTPS化する](https://qiita.com/iogi/items/82618c1d56abba6b9337)
- [CloudFrontからカスタムオリジンまでの通信をHTTPS化する方法を2パターン](https://dev.classmethod.jp/cloud/aws/2way-to-use-https-from-cloudfront-to-custom-origin/)
- [Route53とCloudFrontで独自ドメインのGitHub PagesをHTTPS化した](https://blog.pinekta.tech/aws/2017/02/21/sslchange/)
- [AWS Route53ドメイン取得からCertificate Managerでの証明書作成まで](https://qiita.com/sk565/items/2da1fc0c5fc676f54994)
