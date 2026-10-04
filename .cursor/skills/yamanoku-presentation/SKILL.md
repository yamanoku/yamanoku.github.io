---
name: yamanoku-presentation
description: records/presentations/ の過去登壇資料から抽出した yamanoku のストーリー構成・喋り口調・原稿/Slidevの型を使って、新しい発表資料の構成案・登壇原稿・スライドを作成／推敲し、資料ディレクトリを雛形化する。登壇資料・発表原稿・スピーカーノート・Slidevスライド・LT・カンファレンストークの作成や構成相談、records/presentations への資料追加時に使う。
---

# 登壇資料スキル

過去11本（2019〜2026）の発表資料から抽出した「型」で新しい登壇資料を作る。登壇原稿は**話し言葉の丁寧体**であり、記事文体とは区別する。

## ワークフロー

```
Task Progress:
- [ ] 1. ヒアリング
- [ ] 2. ストーリー型を選ぶ
- [ ] 3. 構成案（アウトライン）を出して合意を取る
- [ ] 4. 原稿（11ty pages）を書く
- [ ] 5. Slidev スライドを作る（monorepo型のみ）
- [ ] 6. ディレクトリ雛形と登録
- [ ] 7. 検証
```

### 1. ヒアリング

不足していれば AskQuestion でまとめて聞く。推測で埋めない。

- イベント名・日付・持ち時間（LT 5分 / 15分 / 30分〜）・イベントのテーマ語
- 伝えたいこと1文（聴衆に持ち帰ってほしい行動）
- 想定聴衆（初学者／実務者／コミュニティ）
- 構成タイプ: **flat**（原稿のみ）か **monorepo**（原稿 + Slidev）
- ディレクトリ名: `<event>-<year>`（kebab-case）

### 2. ストーリー型を選ぶ

[story-patterns.md](story-patterns.md) から1つ選ぶ。迷ったら **教示型**。

| 型 | 向く内容 | 例 |
|---|---|---|
| 教示型 | 技術・仕様・a11y の解説 | burikaigi-2026, vuefes-japan-2025 |
| 経緯型 | 仕様・機能が実現するまでの道のり | tskaigi-2026 |
| 対比型 | イベントテーマ語に乗る振り返り | dai-kichijojipm-2026 |
| 寓話型 | 技術をネタ物語に載せる | tskaigi-2025 |
| エッセイ型 | 個人史・価値観・コミュニティ | dai-funabashidev-2026 |

### 3. 構成案

本文を書く前に、見出し一覧と各節の「役割・話す要点・所要時間」をテーブルで提示し、ユーザーの合意を取る。時間配分の目安は 1分 ≒ 300字（ja 原稿）。

### 4. 原稿

[speaking-style.md](speaking-style.md) に従って書く。要点:

- 原稿は「そのまま読み上げられる」口語の丁寧体で書く
- 一次情報（仕様・WCAG・APG・MDN・公式ブログ）をリンク・引用で必ず示す
- 画像の `alt` はスライド内容を具体的に説明する
- 末尾は `## 参考文献`（または参考資料／参考情報）のリンク一覧

### 5. Slidev（monorepo型）

[scaffold.md](scaffold.md) の headmatter・定型スライドを使う。**画面は1スライド1メッセージの短文、話す内容は `<!-- -->` ノートに原稿をほぼそのまま移す。**

### 6. 雛形と登録

[scaffold.md](scaffold.md) の手順でディレクトリを作り、`records/scripts/presentations.mjs` の先頭に追記する（準備中は `wip: true`）。登壇実績をサイトに載せるのは別作業で、`.cursor/commands/add-presentations.md`（`pnpm site -- stage add`）を使う。

### 7. 検証

```bash
pnpm --filter records dev:presentation <name>   # 表示確認
pnpm --filter records build                      # wip を外した後
pnpm lint
```

- 読み上げ字数が持ち時間に収まっているか
- 冒頭フック → 問題 → 根拠 → 行動の呼びかけ → 締め、が揃っているか
- 多言語版は見出し構成が ja と一致しているか

## 参照

- [story-patterns.md](story-patterns.md): ストーリー型ごとのアウトラインと過去資料の構成
- [speaking-style.md](speaking-style.md): 喋り口調・定型フレーズ・Markdown の書き方
- [scaffold.md](scaffold.md): flat / monorepo のファイル構成、Slidev の型
- 実物を確認したいときは `records/presentations/<name>/` の原稿を必要な1本だけ読む
