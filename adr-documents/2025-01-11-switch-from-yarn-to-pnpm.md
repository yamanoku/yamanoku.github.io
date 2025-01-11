# 2025-01-11 yanmanoku.github.io のパッケージマネージャを yarn から pnpm に変更する

## Status

Accepted.

## Context

[yamanoku.github.io](https://github.com/yamanoku/yamanoku.github.io) のパッケージマネージャは長らく Yarn を使用している。

Yarn Classic から Yarn Berry への変更があってからも最新版に追従するようにしているが、Yarn Berry からのバージョン管理として扱われていた Corepack が [Node.js 内から基本導入するのを廃止する動き](https://socket.dev/blog/node-js-takes-steps-towards-removing-corepack)があったり、現在 Yarn Berry の機能を大いに活用できているわけでもなく、他パッケージマネージャへの移行も検討している。

ちなみに yamanoku の他の OSS では基本的に npm を導入し、実験的に pnpm を使用している。

- Yarn: yamanoku.github.io
- pnpm: [vuefes-japan-speakers](https://github.com/yamanoku/vuefes-japan-speakers)
- npm: そのほか多数（[Link](https://github.com/search?q=org%3Ayamanoku+package-lock.json+language%3AJSON&type=code&l=JSON)）

npm だったものではかつて Yarn Classic だったものもあるが、ワークスペースを活用していない単一のリポジトリのため、標準に準拠するという意味で Node.js デフォルトのパッケージマネージャである npm に変更した。その後大きな問題はないものとしてそのまま活用できている。

現在の yamanoku.github.io ではドキュメントサイトとしてのほかに [yama-normalize](https://github.com/yamanoku/yamanoku.github.io/tree/9bc5bb8f12e17125042088fa68348b41f12a67a2/packages/yama-normalize) をモノレポ管理している。これは Yarn の Workspaces 機能を活用している。この機能自体はほかのパッケージマネージャでも実現できる。

ドキュメントのリポジトリが分散していることもあり、これらをまとめるほか今後同様にモジュールが増えてモノレポとしての管理が増えていく可能性はある。

## Decision

Yarn Berry から pnpm にパッケージマネージャを変更する。

以下は検討事項としてパッケージマネージャの特徴や選定理由を記載する。パッケージマネージャ名となりのバージョンは執筆時点のものになる。

### Yarn Berry (v4.6.0)

[Yarn ホームページ](https://yarnpkg.com/)

現在の採用しているパッケージマネージャ。npm のサードパーティとしてのパッケージマネージャで、開発自体は継続している。[パフォーマンスなども向上している](https://yarnpkg.com/features/performances)が、機能的なものとして大きな特徴があるわけでもないため継続することにはさほどメリットがないように考えている。また、Corepack を有効化しないと現行 Yarn のバージョン管理も動作しないため、その辺りも考慮すると他パッケージマネージャへの移行も検討したほうがよいと判断している。

### npm（v11.0.0）

[npm ドキュメントページ](https://docs.npmjs.com/)

Node.js デフォルトのパッケージマネージャ。Yarn Classic の登場時には機能面・速度面でも劣っていたが、現状は大きな差はできていなように思われる。

標準準拠という視点で安定性があり、バージョン管理は Corepack を活用しなくてもよく、ほかの yamanoku OSS とで揃えられるメリットがある。パッケージマネージャとしての標準であり、保守的な運用をする意味での採用は大いにあり得る。

### pnpm（v10.0.0）

[pnpm ホームページ](https://pnpm.io/ja/)

pnpm も Yarn と同様の npm サードパーティのパッケージマネージャである。シンボリックリンクを活用したモジュールのバージョン管理を容易にして、機能として [npm よりもできることが多い](https://pnpm.io/ja/feature-comparison)。さらに pnpm では [v10 より Corepack を使用せずに package.json 内でバージョン管理がデフォルトでできるようになった](https://github.com/pnpm/pnpm/releases/tag/v10.0.0#:~:text=manage%2Dpackage%2Dmanager%2Dversions%3A%20enabled%20by%20default.)。また、[State of JS 2024](https://2024.stateofjs.com/ja-JP/libraries/monorepo_tools/) のモノレポツールでは pnpm の利用率・満足度1位評価を受けている。

開発速度でいうとこれまであげたパッケージマネージャの中で最も速く、追従していくとなると大変ではあるが、[Renovate](https://github.com/renovatebot/renovate) を活用して追従して CI でチェックしていくことでリポジトリ内の健全性は保てると考えられる。

### Deno, Bun

ちなみにパッケージマネージャとしての選択肢であれば Deno や Bun も挙げられる。

- Deno は現在 [npm モジュール互換](https://docs.deno.com/runtime/fundamentals/node/#using-npm-packages)ができるようになっているのと、[ロックファイルを作成することが可能](https://docs.deno.com/runtime/fundamentals/modules/#integrity-checking-and-lock-files)、[Workspacesやモノレポ管理機能](https://docs.deno.com/runtime/fundamentals/workspaces/)もある
- Bun でも同様に [npm モジュールからのマイグレーション](https://bun.sh/guides/install/from-npm-install-to-bun-install)ができるようになっているのと、[ロックファイルを作成することが可能](https://bun.sh/docs/install/lockfile)、[Workspaces 機能](https://bun.sh/guides/install/from-npm-install-to-bun-install#workspaces-yes)もある

ただしこの２つはあくまでもランタイムとしての存在であり、パッケージマネージャとしての機能は付属的なものである。yamanoku.github.io で扱うランタイムを Node.js から変更する際には候補として挙げるとして、今回からは選定より外す。

## References

- [node_modulesの問題点とその歴史 npm, yarnとpnpm](https://zenn.dev/saggggo/articles/dbd739508ac212)
- [pnpm の node_modules を探検して理解しよう - ドワンゴ教育サービス開発者ブログ](https://blog.nnn.dev/entry/2024/05/10/110000)
- [pnpm v10 で corepack 不要で pnpm 自身のバージョン管理が可能に](https://zenn.dev/euxn23/articles/399a6815ddac93)
