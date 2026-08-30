# yamanoku.net Site CLI

Gunshiで実装した、yamanoku.net専用の更新CLIです。AIエージェントと人間が同じ手順で構造化データを更新し、複数ファイルの更新漏れを防ぐことを目的とします。

## 基本

```bash
pnpm site -- --help
pnpm site -- validate
pnpm site -- check
```

変更系コマンドはデフォルトでプレビューだけを表示し、ファイルを書き換えません。内容を確認してから同じコマンドに `--write` を追加してください。CLIはGitのcommitやpushを行いません。

```bash
pnpm site -- writing add \
  --title "記事タイトル" \
  --url "https://example.com/article" \
  --datetime "2026-08-29T12:00:00+09:00"

# プレビュー確認後
pnpm site -- writing add \
  --title "記事タイトル" \
  --url "https://example.com/article" \
  --datetime "2026-08-29T12:00:00+09:00" \
  --write
```

未知のオプションはエラーになります。各階層のオプションは `pnpm site -- <command> --help` で確認できます。

## コマンド

### 執筆

```bash
pnpm site -- writing list
pnpm site -- writing add --title "..." --url "https://..." --datetime "..." --write
```

表示件数は必ず5件です。`add`は日時順に並べ、古い末尾を自動的に落とします。`remove`は5件制約を壊さないよう、置換先の記事情報も必須です。

### 登壇

```bash
pnpm site -- stage add \
  --date 2026-10-24 \
  --event "Vue Fes Japan 2026" \
  --resource-title "資料タイトル" \
  --resource-url "https://example.com/slides" \
  --write
```

資料が複数ある場合は `--resource-title` と `--resource-url` を同じ件数だけ繰り返します。資料未定の予定は `--note TBD` とし、resourceオプションを省略できます。

更新・削除では開催日を位置引数、イベント名を `--event` で指定します。

```bash
pnpm site -- stage update 2026-10-24 --event "Vue Fes Japan 2026" \
  --resource-title "資料タイトル" --resource-url "https://..." --write
pnpm site -- stage remove 2026-10-24 --event "Vue Fes Japan 2026" --write
pnpm site -- stage list
```

### プロフィール

```bash
pnpm site -- profile set location \
  --ja "千葉県流山市" --en "Nagareyama, Chiba" --write

pnpm site -- profile set realName \
  --ja "大山奥人" --en "Okuto Oyama" \
  --ruby "大山=おおやま" --ruby "奥人=おくと" --write
```

日英を必ず同時に指定します。本名は `--ruby "本文=よみ"` も必要で、`--ja` と本文の一致を検証します。

### リンク

groupは `social`、`rel-me`、`open-source`、`donate` です。

```bash
pnpm site -- link add social \
  --id example --title-ja "Example" --title-en "Example" \
  --url "https://example.com/@yamanoku" --rel-me --write
pnpm site -- link update social example --url "https://example.com/new" --write
pnpm site -- link remove social example --write
pnpm site -- link list social
```

`rel-me` groupへ追加すると、デフォルトで一覧には非表示、`rel=me`には出力されます。`rel-me` の更新・削除は `relMe: true` のリンクだけを対象にします。同じデータから画面表示とhead要素を作るためURLのドリフトが起きません。

### 日報、翻訳、セクション

```bash
pnpm site -- journal add-year --year 2027 --write
pnpm site -- journal remove-year --year 2021 --write

pnpm site -- i18n set example.key --ja "日本語" --en "English" --write
pnpm site -- i18n remove example.key --write
pnpm site -- i18n list

pnpm site -- section show openSource --write
pnpm site -- section hide podcast --write
pnpm site -- section list
```

翻訳はja/enのキー完全一致を常に検証します。`i18n remove` はソース内で `t("...")` として使われているキーを拒否します。既知のセクション名以外は拒否します。

変更系コマンドはプレビュー時に対象JSONの差分を表示します。内容を確認してから `--write` を付けてください。

### Podcast

```bash
pnpm site -- podcast sync
pnpm site -- podcast sync --write
```

RSSを取得して最新5件を検証し、`src/data/ogenkidesukaFm.json`へ保存します。定期更新のGitHub Actionsも同じコマンドを使用します。

## 正規データ

- `src/data/site-content.json`: プロフィール、翻訳、日報、リンク、セクション表示
- `src/data/writings.json`: 表示する執筆5件
- `records/src/data/records.json`: 全登壇記録
- `src/data/ogenkidesukaFm.json`: Podcast同期結果

これらはCLIが管理する正規データです。通常の情報更新では直接編集せず、CLIに必要な操作がなければ先にコマンドを追加してください。

`validate`はJSON形式、URL、日時、並び順、重複、5件制約、翻訳の一致をオフラインで確認します。`check`はさらにBiome、本体ビルド、recordsビルド、Markuplintを順番に実行します。

## 開発

```bash
pnpm --filter @yamanoku/site-cli typecheck
pnpm --filter @yamanoku/site-cli test
```

mutationは純粋関数として `src/mutations.ts` に置き、ファイル保存は `src/repository.ts` に限定します。テストは対象モジュールと同じ `src/` にコロケーションし、`YAMANOKU_SITE_ROOT` を一時ディレクトリへ向けられます。

失敗時はエラーを修正して同じコマンドを再実行してください。原子的に保存するため途中状態のファイルは残りません。意図しない更新を保存した場合は、commit前ならGitの差分を確認して対象JSONを戻してください。
