# 雛形と Slidev の型

依存は `records/presentations/package.json` に集約されている。資料ごとに `package.json` は置かない。

## flat型（原稿のみ）

```
<name>/
├── .eleventy.js
├── .eleventyignore      # README.md
├── README.md
├── images/
└── pages/
    ├── index.md         # 多言語なら ja.md / en.md / ko.md
    └── _includes/layout.11ty.js
```

```js
// .eleventy.js
import { configureEleventy } from "../_shared/eleventy-base.js";

export default function (eleventyConfig) {
  return configureEleventy(eleventyConfig);
}
```

## monorepo型（原稿 + Slidev）

```
<name>/
├── README.md
├── 11ty/
│   ├── .eleventy.js
│   ├── images/
│   └── pages/
│       ├── index.md     # 多言語なら ja.md / en.md / ko.md
│       └── _includes/layout.11ty.js
└── slidev/
    ├── slides.md
    ├── setup/main.ts    # base path 補正。既存資料からそのままコピー
    ├── style.css        # 任意
    ├── images/
    └── components/      # 任意
```

```js
// 11ty/.eleventy.js
import { configureEleventy } from "../../_shared/eleventy-base.js";

export default function (eleventyConfig) {
  return configureEleventy(eleventyConfig, { output: "../docs" });
}
```

## 既存資料からのコピー

ゼロから書かずに、近い既存資料からコピーして `<name>` を置換する。

- `layout.11ty.js`: 多言語なら `tskaigi-2026/11ty/pages/_includes/layout.11ty.js`、日本語のみなら `burikaigi-2026/11ty/pages/_includes/layout.11ty.js`。OGP 画像の URL 内の資料名を置き換える
- `slidev/setup/main.ts`: `tskaigi-2026/slidev/setup/main.ts` をそのまま使う
- `README.md`: イベント名・日付・ページ URL・スライド URL を書く（`tskaigi-2026/README.md` が例）

`docs/` はビルド成果物なので作らない。

## 登録

`records/scripts/presentations.mjs` の配列の先頭（新しい順）に追加する。

```js
{ name: "<name>", type: "monorepo", wip: true },
```

公開時に `wip` を外す。

## Slidev headmatter

```yaml
---
theme: apple-basic
layout: intro
title: タイトル
mdc: true
fonts:
  sans: Roboto, "Noto Sans JP"
seoMeta:
  ogDescription: {イベント名}のyamanokuの発表資料
  ogImage: https://records.yamanoku.net/<name>/images/ogp-image-ja.png
  twitterCard: summary_large_image
routerMode: hash
htmlAttrs:
  lang: ja
duration: 15min   # 持ち時間が決まっていれば
---
```

## 定型スライド

**タイトル（intro）**

```md
<h1 mt="8">タイトル</h1>

<div class="text-8 font-700">サブタイトル</div>

<div mt="4" mb="4">
{イベント名} | <time datetime="YYYY-MM-DD">YYYY-MM-DD</time>
</div>

[ドキュメントページ版（日本語）](https://records.yamanoku.net/<name>/)

<div class="absolute bottom-16">
  <span class="text-6 font-700">やまのく（yamanoku）</span>
</div>
```

**問いかけ・章の区切り**

```md
---
layout: statement
---

# 前提：〇〇とは？

<!--
本題に入る前に、まず「〇〇」とは何かという前提を皆さんと揃えたいと思います。
-->
```

**終わり**

```md
---
layout: end
---

# Thank You For Listening !!
```

## スライドの作り方

- レイアウト: `intro` → `statement`（問い・主張）／`section`（章）／`center`（図）／`image`／`two-cols-header` → `end`
- 1スライド1メッセージ。画面は短文・箇条書き・コード・画像だけにする
- 話す内容は `<!-- -->` のノートに原稿をほぼ逐語で移す。原稿とノートの内容をずらさない
- 段階的に見せるときは `v-click` / `v-clicks` / `v-mark`
- 余白・文字サイズは UnoCSS の属性（`mt="12"`、`text="5"`）で指定する
- 埋め込み: `<Tweet>`、`::code-group`。凝った演出が必要なときだけ `components/` に Vue コンポーネントを置く
- 章の流れ: 1章につき `statement` で問い → `section` で詳細 → `center` で図、の順に複数枚
