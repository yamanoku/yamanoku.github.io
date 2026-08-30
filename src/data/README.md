# src/data

yamanoku.net 本体の表示内容を持つ正規データです。Astro コンポーネントと i18n はここを参照し、情報更新は `pnpm site`（`packages/site-cli`）がこのディレクトリの JSON を更新します。

通常の情報更新ではファイルを直接編集せず、CLI に必要な操作がなければ先にコマンドと検証を追加してください。変更系コマンドはデフォルトでプレビューのみで、保存には `--write` が必要です。詳細は [`packages/site-cli/README.md`](../../packages/site-cli/README.md) を参照してください。

登壇の全記録は本ディレクトリではなく [`records/src/data/records.json`](../../records/src/data/records.json) が正です。ポートフォリオの登壇5件はそこから導出します。

## ファイル

### `site-content.json`

トップページの静的コンテンツです。

- `profile`: 日英の基本情報。日本語の本名は ruby 用の `parts`（本文とよみ）を持つ
- `translations`: 日英辞書。キーは両言語で完全一致させる
- `journal`: 日報のベース URL と年一覧
- `links`: SNS（表示 / `rel=me`）、オープンソース活動、寄付・支援
- `sections`: 各セクションの表示 / 非表示

`pnpm site -- profile|link|journal|i18n|section` で更新します。

### `writings.json`

ポートフォリオの執筆一覧です。件数は必ず 5 件で、新しい順です。`src/presentations/listPresentation.ts` がこの配列をそのまま表示します。

`pnpm site -- writing` で更新します。追加時は先頭へ入れて末尾を落とします。

### `ogenkidesukaFm.json`

お元気ですか.fm の RSS 同期結果です。`feedUrl`、`homeUrl`、最新 5 話の `episodes` を持ち、Content Collections 経由でトップページに表示します。

`pnpm site -- podcast sync --write` で更新します。GitHub Actions（`.github/workflows/update-ogenkidesuka-fm.yml`）も同じコマンドを使います。
