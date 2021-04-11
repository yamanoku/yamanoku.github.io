---
title: 言語の違いによるデザインの崩壊
description: ローカライズにおけるタイポグラフィも維持できているかについて
date: 2014-07-05
author: yamanoku
---

海外のサイトなりアプリが日本にリリースされる時、本来使われていたフォントを日本語フォントに代用するとなんかダサいなあといった事案があります。下図のは一例です。

[![Image from Gyazo](https://i.gyazo.com/a32bcb3c5221631fee1ce3b109c2b730.png)](https://gyazo.com/a32bcb3c5221631fee1ce3b109c2b730)

国が違うということは使う言葉も違うわけでそれに伴って使用されるフォントも変えなきゃいかんってことがあるんですが、これ日本の場合かなり顕著な問題として見えるような気がします。僕は。

ディズニーの映画を日本語吹き替え版で見ると分かると思いますが、映画内で見られる英語が日本語訳で表示される時と日本語訳がそのまま日本語フォントで変更されていることがあります。

最近だと日本語に変更されて表示されてるものが多くなってるとは思います。これは子供が観る時にも分かりやすく見れるようにしてる措置してるのかなと思われます。

それに対して僕はどうも違和感があって今後Webがグローバルな対応を求められるとするなら、こうした言語やフォントの差異を先にどうにかしないといけないんじゃないかなと思ってます。

言語の問題っていうのはサイト閲覧したりアプリを使う時にもっともコストがかかってるものだと思ってて、たしかに表示速度やインタフェースの反応といったものも起因すると思いますが、結局は「そこに何が書かれているのか？」といった情報に注目することのが一番重要だと思います。

パッと目に入る画像や文字やインタフェースを含めたイメージ像がファーストビューとして重要な部分に当たりますが、その注目したあとにどこへ動くかはその人が判別可能な情報へと移動するかと思われます。

ここでいう判別可能、というものは

- 「この文章はなんと書かれているのか」
  - 「この写真はどういったものが写っているのか」
- 「このナビゲーションは何色なのか」

といった単純な情報があげられます。

その中でもっとも詳細的に情報を与えているのは文章です。サイトやアプリのサービス紹介だったり操作ボタンみたいなものがそれに当たりますがこれが多ければ多いほど情報量が多いものとなります。

情報量が多いか少ないかというのはモノによって違いますが、少なくとも情報量が多いものはニーズ幅としては狭い層向けなのかなという印象です。そしてその情報が多い分、言語やフォントの差異による影響を比例的に増やすことになります。

サイト内で多国語を用いる場合、そのサイトデザインのまま言語を変更するので見出し文字だったり文章幅だったりが違うせいでデザインが崩れてしまうことがあります。

最近はフラットデザインが流行してますが英語圏で設計されたものと日本で設計した場合では見た目が変わるということがあり、グローバルに対応するよりかはその国にあったデザインを提供することが優先されるかと思われます。

言語が違うせいでダサいデザインになるというタイトルで煽るように書きましたが、ダサいという違和感を抱かせてしまうとそれだけでユーザビリティとしてマズい影響を与えかねないので軽視できない問題ではないかと思っています。

一番分かりやすい解決策としては言語を用いずともアイコンや画像による説明できるものを用意することかと思われます。しかしながら文化圏が違えばそのアイコンや画像から引っ張ってこれる意味合いも違うことがあるので万能薬ではないです。

この部分に関して完全な解決策はまだ見当たりませんが僕個人としては言語に頼らなくても感覚的に理解が出来るものをコンテンツとして作れるかどうかかなと考えてます。もしくはそうした諸々の事情を介さずとも不便と感じないような設計が必要になるかな、とも。

## 関連リンク
- [訳文における文字サイズ – W3C国際化](https://www.w3.org/International/articles/article-text-size.ja)