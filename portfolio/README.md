# portfolio

[portfolio.yamanoku.net](https://portfolio.yamanoku.net) — やまのく（yamanoku）のポートフォリオ。

## 構成

- **フレームワーク**: Astro（静的出力）
- **スタイル**: `yama-normalize`（`packages/yama-normalize`）+ `modern-normalize` + TailwindCSS v4
- **コンテンツ**: `src/data/portfolio.json` の構造化データを Astro が描画する
- **言語**: `/` が日本語、`/en/` が英語

ポートフォリオはルートのサイト更新CLIで管理する。`src/data/portfolio.json` は直接編集しない。

```bash
pnpm site -- portfolio add \
  --id example \
  --name "example" \
  --github "https://github.com/yamanoku/example" \
  --description-ja "概要" \
  --description-en "Summary" \
  --created 2026-01-01 \
  --category website --category source-code

# プレビュー確認後に保存
pnpm site -- portfolio add ... --write
```

詳細は `packages/site-cli/README.md` を参照。ポータル（yamanoku.net）は見出しと、このサイトへの導線だけを出す。

## 開発

リポジトリルートで pnpm install 済みであること。

```bash
# 開発サーバー
pnpm --filter portfolio dev

# ビルド（出力: portfolio/dist）
pnpm portfolio:build

# プレビュー
pnpm --filter portfolio preview
```

## デプロイ（Cloudflare Workers）

`pnpm portfolio:build` が書いた `portfolio/dist` を、Workers Static Assets として Worker `portfolio` に載せる。公開ホストは `https://portfolio.yamanoku.net`（カスタムドメイン）。records.yamanoku.net と同じく静的な成果物を配るが、こちらは Pages ではなく Workers である。

設定は `portfolio/cloudflare/` にある。Astro 7 のパッケージ直下で `cf deploy` すると、`cf` はフレームワークビルドとして扱い、静的な `dist` をアップロードしない。デプロイ用のディレクトリには `astro.config.mjs` を置かない。

```bash
# Astro ビルドのあと、dist を Worker にデプロイする
pnpm portfolio:deploy
```

手元では `cf auth login` 済みであること。アカウントは `cloudflare.config.ts` の `accountId`。カスタムドメイン `portfolio.yamanoku.net` はデプロイ時にゾーン `yamanoku.net` へ結ばれる。

`portfolio/**` を変更した pull request が `main` にマージされると、`.github/workflows/deploy-portfolio.yml` が同じ `pnpm portfolio:deploy` を実行する。未マージの pull request ではデプロイしない。`main` へ `portfolio/**` を直接 push したときも、公開中のサイトをその commit に合わせるためデプロイする。

GitHub の repository secret は `PORTFOLIO_CLOUDFLARE_API_TOKEN`。他の Cloudflare プロジェクトと区別するための名前で、workflow はこれを `CLOUDFLARE_API_TOKEN` として `cf` に渡す。トークンには Worker `portfolio` のデプロイと、ゾーン `yamanoku.net` の DNS 編集（カスタムドメインを維持するため）が必要。workflow は `CLOUDFLARE_ACCOUNT_ID` に `cloudflare.config.ts` と同じ account id を渡す。

- **Worker 名**: `portfolio`
- **アップロード対象**: `portfolio/dist`（`wrangler.config.ts` の `assetsDirectory`）
- **互換性日付**: `2026-11-15`
- **レスポンスヘッダー**: `portfolio/public/_headers`（ビルドで `dist` にコピーされる。records と同じ）

リポジトリルートに `wrangler.jsonc` や `cloudflare.config.ts` を置かない。`yamanoku-net` と `records-yamanoku` は Pages で Root directory がリポジトリルートのため、ルートの設定を両方とも読んでしまう。
