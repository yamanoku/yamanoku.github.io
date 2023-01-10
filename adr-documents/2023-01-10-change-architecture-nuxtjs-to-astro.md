# 2023-01-10　Nuxt.js から Astro にアーキテクチャを変更する

## Context

2023年1月現在の yamanoku.github.io は Nuxt.js（v2）のアーキテクチャを使用して静的サイトを作成している。Nuxt3 がリリースされたことでこのリポジトリでもアップデートする必要が出てきた。

しかし筆者のスタンスとして Vue.js のフレームワークに依存していくことに消極的なこと、Nuxt2 から Nuxt3 へのマイグレーション対応が未知数な部分がある。そのため Nuxt.js ではない他のアーキテクチャに変更できないかと考えている。

今回は静的サイトジェネレーターのアーキテクチャを変更するのみで GitHub Pages へのデプロイフロー自体は影響を与えないようにする。

## Decision

代替となるアーキテクチャについて選定する。

### [Astro](https://astro.build/) を導入する

- [archives.yamanoku.net](https://archives.yamanoku.net/) でも使用しているアーキテクチャである
- [Islands Architecture](https://jasonformat.com/islands-architecture/) を採用している
  - コンポーネントを作る際 `vue` 以外の選択肢がある
  - それぞれのライブラリ・フレームワークの利点を生かした UI 設計ができる
- 静的サイトジェネレートする際に JavaScript のコードが削除される
- 静的解析も対応している
  - [eslint-plugin](https://github.com/ota-meshi/eslint-plugin-astro)
  - [markuplint](https://github.com/markuplint/markuplint/tree/96413e80fb7e8169e5892fa4f685162ec7adc971/packages/%40markuplint/astro-parser)
- 本体・プラグインの開発が活発的である（執筆時点）

### 他代替手段について

Astro 以外の他代替手段となるアーキテクチャを[Static Site Generators - Top Open Source SSGs | Jamstack](https://jamstack.org/generators/) より列挙する。

#### Next.js, SvelteKit

- https://nextjs.org/
- https://kit.svelte.dev/

React.js、Svelte のそれぞれの Web フレームワーク。

前述したとおり何らかのライブラリ・フレームワークに依存したことは避けたいので採用しないことにした。

#### Eleventy

https://www.11ty.dev/

フロントエンドライブラリ・フレームワークに依存しない静的サイトジェネレーター。Markdown ほか純粋な HTML、Nunjucks や Liquid といったテンプレートでページを構築することができる。[Islands Architecture](https://is-land.11ty.dev/) の開発もできる。

しかしながら、TypeScript による開発ができない（執筆時点）ことや、利用するテンプレートによっては対応していないプラグインがあるなど現時点における拡張性に不安があったため採用しないことにした。

#### Fresh

https://fresh.deno.dev/

[Deno](https://deno.land/) の Web フレームワーク。

TypeScript で開発できることや、[Islands Architecture](https://is-land.11ty.dev/) を採用しており、クライアントサイドの JavaScript も吐き出されないため軽量なサイトジェネレートでもある。

しかしながらデプロイ環境が Deno Deploy と Docker コンテナを動作させる環境のみで、現在の GitHub Pages のデプロイフローとは外れるため今回は採用しないことにした。

#### Lume

https://lume.land/

同じく [Deno](https://deno.land/) による静的サイトジェネレーター。

Eleventy と同様に各種テンプレートエンジンが使用でき、[TypeScript 開発](https://lume.land/docs/configuration/using-typescript/)も可能であり、[GitHub Pages](https://lume.land/docs/advanced/deployment/#github-pages) のデプロイフローもそのまま活かせる。

[プラグインページ](https://lume.land/plugins/?status=all)にて i18n に関するプラグインが現時点では見つからず自前実装となりそうなため採用しないことにした。

### 比較

| アーキテクチャ | ライブラリ依存なし | デプロイフロー | Islands Architecture | 多言語化 | TypeScript |
| ----------- | :--------------: | :---------: | :------------------: | :-----: | :--------: |
| Astro | 👍 | 👍 | 👍 | 👍 | 👍 |
| Next.js | ❌ | 👍 | ❌ | 👍 | 👍 |
| SvelteKit | ❌ | 👍 | ❌ | 👍 | 👍 |
| Eleventy | 👍 | 👍 | 👍 | 👍 | ❌ |
| Fresh | 👍 | ❌ | 👍 | ❌ | 👍 |
| Lume | 👍 | 👍 | ❌ | ❌ | 👍 |

## References

- [nuxt/content を Astro に移行した](https://zenn.dev/yamanoku/scraps/e4341c62a3464d)
- [Eleventy1.0という選択肢](https://zenn.dev/takanorip/articles/26754e75dc8753)
- [Deno の Web フレームワーク Fresh チュートリアル](https://zenn.dev/azukiazusa/articles/fresh-tutorial)
- https://twitter.com/hashedrock/status/1612786188951384066
