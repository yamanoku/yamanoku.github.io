---
layout: layout
title: Vue SFCから見直す正しいHTMLの守り方
description: yamanokuのVue Fes Japan 2026登壇資料
lang: ja
---

![スライドタイトル：Vue SFCから見直す正しいHTMLの守り方](../images/title-ja.png)

[日本語ページ](../ja/) / [English page](../en/)

## スライド

[スライド版ページ](https://records.yamanoku.net/vuefes-japan-2026/slide/)

## 発表概要

VueのSFCにはtemplateブロックにてHTMLを記述できる構文が備わっていることは周知の事実だと思いますが、Vue.jsを使った開発をするときにどのように「HTMLの正しさ」を検証しているか皆さんは説明できますでしょうか？

VueのSFCにおけるtemplate内ではHTMLの要素間のネスト違反があっても、開発時に警告してきますが明確にコンパイルエラーにはなりません。HTMLの字句的・構文的ルールについても検出されますが、具体的なHTML要素の使い方に関しては関与していません。

本セッションでは、Vue SFCのtemplateブロックで書かれたHTMLの内容をコンパイラがどのように解釈しているかについてを仕組みから紐解き、DOMのコンパイラだけでは保てないHTMLの正しさについてをLinterといった静的解析エコシステム（ESLint、Markuplint、Biome、OxC、Vizeなど）たちによって今現在どのように守れるかについてを紹介します。

HTMLの仕様はLiving Standardとして今なお更新されています。そんなHTMLと正しく向き合いながら、Vue.jsで堅牢なマークアップとHTMLによるアクセシブルなアウトプットを実現する知見を提供します。