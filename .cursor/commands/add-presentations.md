$ARGUMENTS に含まれる登壇情報（URLやイベント名、日付など）を受け取ったら、`src/presentations/listPresentation.ts` を直接編集せず、サイト更新CLIで登壇記録を追加・編集してください。

```bash
pnpm site -- stage add \
  --date YYYY-MM-DD \
  --event "イベント名" \
  --resource-title "資料タイトル" \
  --resource-url "URL"
```

内容を確認してから `--write` を付けて保存する。資料が複数ある場合は `--resource-title` と `--resource-url` を同じ件数だけ繰り返す。詳細は `packages/site-cli/README.md` を参照。
