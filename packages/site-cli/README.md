# yamanoku.net Site CLI

Gunshiで実装した、yamanoku.net専用の更新CLIです。人とプログラムが同じ手順で構造化データを更新し、複数ファイルの更新漏れを防ぎます。

コマンドの形は [CLI Design Guidelines](https://vercel.com/design/cli) に合わせています。グループは複数形の名詞、操作は動詞、結果は stdout、差分・次のコマンド・エラーは stderr です。

## 基本

```bash
pnpm site -- --help
pnpm site -- help search 登壇
pnpm site -- validate
pnpm site -- check
pnpm site -- --version
```

引数なし、またはグループ名だけのときは、その階層のヘルプを出して終了コード 0 で終わります。ヘルプはファイルを読まず、ネットワークにも行きません。

変更系コマンドはデフォルトでプレビューです。ファイルは変わりません。差分を確認してから、同じコマンドに `--write` を付けます。`--dry-run` は、そのプレビューを明示するオプションです。`--write` と `--dry-run` を同時には使えません。

このCLIがファイルを書く同意に `--yes` ではなく `--write` を使うのは、省略時の動作がプレビューだからです。ガイドラインの `--yes` は、もともと実行される操作の確認に答えるもので、ここには当てはまりません。

```bash
pnpm site -- writings add \
  --title "記事タイトル" \
  --url "https://example.com/article" \
  --datetime "2026-08-29T12:00:00+09:00"

# プレビュー確認後
pnpm site -- writings add \
  --title "記事タイトル" \
  --url "https://example.com/article" \
  --datetime "2026-08-29T12:00:00+09:00" \
  --write
```

プレビューの stdout は対象の識別子だけです。差分と、保存するためのコマンドは stderr に出ます。`--json` を付けると、stdout は結果の JSON 1つになり、stderr は空です。プレビューの `outcome` は `planned`、保存後は `added` や `updated` など、変更がなければ `unchanged` です。

未知のコマンドと未知のオプションは終了コード 2 です。近い候補が1つあるときだけ提案します。データの不整合や対象が見つからない場合は終了コード 1 です。

単数のグループ名（`writing`、`stage`、`link`、`section`）と、`ls`（`list`）、`rm`（`remove`）はエイリアスです。ヘルプと例は正規の名前だけを教えます。

共通オプションはどの階層でも使えます。

| オプション | 意味 |
| --- | --- |
| `-h, --help` | ヘルプを出す。作業はしない |
| `-v, --version` | バージョンだけを出す。`--json` では `{ "version" }` |
| `--json` | 結果を JSON で stdout へ出す |
| `--write` | 変更を保存する |
| `--dry-run` | 検証だけ行い、保存しない |
| `--cwd <DIR>` | この実行で使うリポジトリ |
| `--color`, `--no-color` | 色を付ける、または消す |
| `--non-interactive` | 確認を求めない。このCLIは元から確認を出さない |
| `--debug` | 失敗時の診断を stderr へ出す |

`--version` は `--help` より優先されません。CLIは Git の commit や push をしません。

## コマンド

### 執筆

識別子は記事URLです。完全一致で、表示は必ず5件です。`add` は日時順に並べ、古い末尾を外します。`remove` は5件を保つため、入れ替える記事も必須です。

```bash
pnpm site -- writings list
pnpm site -- writings add --title "..." --url "https://..." --datetime "..." --write
pnpm site -- writings remove "https://example.com/old" \
  --replacement-title "..." --replacement-url "https://..." \
  --replacement-datetime "..." --write
```

### 登壇

識別子は開催日とイベント名の組です。どちらも完全一致で、大文字小文字を区別します。

```bash
pnpm site -- stages add \
  --date 2026-10-24 \
  --event "Vue Fes Japan 2026" \
  --event-url "https://vuefes.jp/2026" \
  --resource-title "資料タイトル" \
  --resource-url "https://example.com/slides" \
  --write
```

資料が複数あるときは `--resource-title` と `--resource-url` を同じ件数、同じ順で繰り返します。資料未定の予定は `--note TBD` とし、資料のオプションを省略できます。`--event-url` は公式サイトがあればそれを、なければ connpass などの開催ページを指定します。

```bash
pnpm site -- stages update 2026-10-24 --event "Vue Fes Japan 2026" \
  --event-url "https://vuefes.jp/2026" \
  --description "登壇内容の要約" --write
pnpm site -- stages remove 2026-10-24 --event "Vue Fes Japan 2026" --write
pnpm site -- stages list
```

`--event-url`、`--description`、`--note` に空文字を渡すと、その項目を消します。

### プロフィール

```bash
pnpm site -- profile inspect
pnpm site -- profile set location \
  --ja "千葉県流山市" --en "Nagareyama, Chiba" --write

pnpm site -- profile set realName \
  --ja "大山奥人" --en "Okuto Oyama" \
  --ruby "大山=おおやま" --ruby "奥人=おくと" --write
```

日英を必ず同時に指定します。本名は `--ruby "本文=よみ"` も必要で、`--ja` と本文の一致を検証します。`profile show` は `profile inspect` の非推奨エイリアスです。

### リンク

group は `social`、`rel-me`、`open-source`、`donate` です。識別子は `--id` で、完全一致です。

```bash
pnpm site -- links add social \
  --id example --title-ja "Example" --title-en "Example" \
  --url "https://example.com/@yamanoku" --rel-me --write
pnpm site -- links update social example --url "https://example.com/new" --write
pnpm site -- links remove social example --write
pnpm site -- links list social
```

`rel-me` へ追加すると、デフォルトでは一覧に出さず、`rel=me` には出します。`rel-me` の更新と削除は `relMe: true` のリンクだけが対象です。

### 日報、翻訳、セクション

```bash
pnpm site -- journal years add --year 2027 --write
pnpm site -- journal years remove --year 2021 --write

pnpm site -- i18n set example.key --ja "日本語" --en "English" --write
pnpm site -- i18n remove example.key --write
pnpm site -- i18n list

pnpm site -- sections enable openSource --write
pnpm site -- sections disable podcast --write
pnpm site -- sections list
```

`journal add-year` と `journal remove-year` は非推奨です。`journal years add` と `journal years remove` を使います。`sections show` と `sections hide` も非推奨で、それぞれ `enable` と `disable` です。非推奨のコマンドは動き、1回だけ警告します。

翻訳は ja/en のキー完全一致を常に検証します。`i18n remove` はソース内で `t("...")` として使われているキーを拒否します。セクション名は既知のもの以外を拒否します。

### Podcast

```bash
pnpm site -- podcast sync
pnpm site -- podcast sync --write
```

RSSを取得して最新5件を検証し、`src/data/ogenkidesukaFm.json` へ保存します。定期更新の GitHub Actions も同じコマンドを使います。接続できないとき、終了コードは 1 です。

## 正規データ

- `src/data/site-content.json`: プロフィール、翻訳、日報、リンク、セクション表示
- `src/data/writings.json`: 表示する執筆5件
- `records/src/data/records.json`: 全登壇記録
- `src/data/ogenkidesukaFm.json`: Podcast同期結果

これらはCLIが管理する正規データです。通常の情報更新では直接編集せず、CLIに必要な操作がなければ先にコマンドを追加してください。

`validate` は JSON形式、URL、日時、並び順、重複、5件制約、翻訳の一致をオフラインで確認します。`check` はさらに oxlint/oxfmt、本体ビルド、recordsビルド、Markuplint を順に実行します。`check` は子プロセスの出力をそのまま渡すため、`--json` は使えません。子プロセスの終了コードを、このCLIの終了コードにします。

保存は対象ディレクトリの一時ファイルへ書き、rename で置き換えます。途中で止まっても、途中まで書いたファイルは残りません。

## 開発

```bash
pnpm --filter @yamanoku/site-cli typecheck
pnpm --filter @yamanoku/site-cli test
```

mutation は純粋関数として `src/mutations.ts` に置き、ファイル保存は `src/repository.ts` に限定します。テストは対象モジュールと同じ `src/` にコロケーションし、`YAMANOKU_SITE_ROOT` を一時ディレクトリへ向けられます。`--cwd` を渡した実行では、そのディレクトリがリポジトリのルートです。

失敗したらエラーを直して、同じコマンドを再実行します。意図しない更新を保存した場合は、commit前なら Git の差分を確認して対象 JSON を戻します。
