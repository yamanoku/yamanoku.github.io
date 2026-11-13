# works

[works.yamanoku.net](https://works.yamanoku.net) — やまのく（yamanoku）の製作実績。

## 構成

- **フレームワーク**: Astro（静的出力）
- **スタイル**: `yama-normalize`（`packages/yama-normalize`）+ `modern-normalize` + TailwindCSS v4
- **コンテンツ**: `src/data/works.json` の構造化データを Astro が描画する
- **言語**: `/` が日本語、`/en/` が英語

製作実績はルートのサイト更新CLIで管理する。`src/data/works.json` は直接編集しない。

```bash
pnpm site -- works add \
  --id example \
  --name "example" \
  --github "https://github.com/yamanoku/example" \
  --description-ja "概要" \
  --description-en "Summary" \
  --created 2026-01-01

# プレビュー確認後に保存
pnpm site -- works add ... --write
```

詳細は `packages/site-cli/README.md` を参照。ポートフォリオ（yamanoku.net）は新しい3件と、このサイトへの導線だけを出す。3件の導出は `src/works/listWorks.ts`。

## 開発

リポジトリルートで pnpm install 済みであること。

```bash
# 開発サーバー
pnpm --filter works dev

# ビルド（出力: works/dist）
pnpm works:build

# プレビュー
pnpm --filter works preview
```

## デプロイ（Cloudflare Pages / Git 連携）

Cloudflare Pages のダッシュボードで GitHub リポジトリ（`yamanoku/yamanoku.github.io`）と連携し、以下のビルド設定でデプロイする。

| 項目 | 値 |
| --- | --- |
| Production branch | `main` |
| Root directory | （リポジトリルートのまま） |
| Build command | `pnpm install --frozen-lockfile && pnpm works:build` |
| Build output directory | `works/dist` |

- **Node バージョン**: `works/.node-version` で固定。ダッシュボードの環境変数 `NODE_VERSION` でも指定可。
- **pnpm**: ルート `package.json` の `packageManager` で固定したpnpmを corepack 経由で使用（catalog 解決に必要）。
- **カスタムドメイン**: `works.yamanoku.net` を Cloudflare Pages のカスタムドメインとして追加（DNS は Cloudflare 側で設定）。

### `wrangler.jsonc` は使わない

このリポジトリには Cloudflare Pages プロジェクトが **3つ**（`yamanoku-net` / `records-yamanoku` / `works-yamanoku`）あり、どれも Root directory がリポジトリルートのため、ルート直下に `wrangler.jsonc` を置くと **すべてのプロジェクトが同じ設定を読み込んでしまう**。出力先はダッシュボードの **Build output directory（`works/dist`）** で設定する。

### works 変更時のみデプロイする（Build watch paths）

| プロジェクト | 設定 | 値 |
| --- | --- | --- |
| `works-yamanoku` | Include paths | `works/**`, `packages/yama-normalize/*`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` |
| `yamanoku-net` | Exclude paths | `records/**`, `works/**` |

`works/` 配下のみの変更は `works-yamanoku` だけをビルドする。共有依存（`packages/yama-normalize`・ルートの lockfile / workspace）の変更は、records を含む各プロジェクトもビルドする。
