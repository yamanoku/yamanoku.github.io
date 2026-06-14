# records

[records.yamanoku.net](https://records.yamanoku.net) — やまのく（yamanoku）のこれまでの登壇・発表資料のまとめ。

旧 [yamanoku/Records](https://github.com/yamanoku/Records) の `README.md` をこのモノレポへ移管し、Astro で 1 ページのサイトとして公開している。

## 構成

- **フレームワーク**: Astro（静的出力）
- **スタイル**: `yama-normalize`（`packages/yama-normalize`）+ `modern-normalize` + TailwindCSS v4
- **コンテンツ**: `src/data/records.md` を Astro が直接 import して描画する

登壇・発表記録を追記・編集するときは **`src/data/records.md` を編集する**。Markdown のフォーマットは次のとおり。

```markdown
## YYYY年 - N件

### YYYY-MM-DD イベント名

[資料タイトル](URL)
```

## 開発

リポジトリルートで pnpm install 済みであること。

```bash
# 開発サーバー
pnpm --filter records dev

# ビルド（出力: records/dist）
pnpm --filter records build

# プレビュー
pnpm --filter records preview
```

## デプロイ（Cloudflare Pages / Git 連携）

Cloudflare Pages のダッシュボードで GitHub リポジトリ（`yamanoku/yamanoku.github.io`）と連携し、以下のビルド設定でデプロイする。

| 項目 | 値 |
| --- | --- |
| Production branch | `main` |
| Root directory | （リポジトリルートのまま） |
| Build command | `pnpm install --frozen-lockfile && pnpm --filter records build` |
| Build output directory | `records/dist` |

- **Node バージョン**: `records/.node-version`（`22`）で固定。ダッシュボードの環境変数 `NODE_VERSION` でも指定可。
- **pnpm**: ルート `package.json` の `packageManager: pnpm@11.6.0` を corepack 経由で使用（catalog 解決に必要）。
- **カスタムドメイン**: `records.yamanoku.net` を Cloudflare Pages のカスタムドメインとして追加（DNS は Cloudflare 側で設定）。

> Git 連携はモノレポルートで `pnpm install` を実行する。`--filter records` によりビルド対象は records のみに限定され、`presentations`（11ty/Slidev）の重いビルドは走らない。

### `wrangler.jsonc` は使わない

このリポジトリには Cloudflare Pages プロジェクトが **2つ**（`yamanoku-net` / `records-yamanoku`）あり、どちらも Root directory がリポジトリルートのため、ルート直下に `wrangler.jsonc` を置くと **両方のプロジェクトが同じ設定を読み込んでしまう**。`name` や `pages_build_output_dir` がもう一方のプロジェクトと一致せずビルドが失敗するため、`wrangler.jsonc` は配置しない。出力先はダッシュボードの **Build output directory（`records/dist`）** で設定する。

### records 変更時のみデプロイする（Build watch paths）

各プロジェクトのデプロイを変更パスで絞り込むには、Cloudflare Pages ダッシュボードの **Settings → Builds & deployments → Build watch paths** を設定する（コード/`wrangler.jsonc` では指定できないダッシュボード専用設定）。

| プロジェクト | 設定 | 値 |
| --- | --- | --- |
| `records-yamanoku` | Include paths | `records/*`, `packages/yama-normalize/*`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` |
| `yamanoku-net` | Exclude paths | `records/*` |

この設定により次のように振り分けられる。

- `records/` 配下のみの変更 → `records-yamanoku` のみビルド
- 本体サイト（`src/` など）のみの変更 → `yamanoku-net` のみビルド
- 共有依存（`packages/yama-normalize`・ルートの lockfile / workspace）の変更 → 両方ビルド
