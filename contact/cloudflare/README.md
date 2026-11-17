# お問合せ Worker

yamanoku.net の連絡先フォームを受け、Cloudflare の無料枠で `0910yama@gmail.com` にメールする。ポータルは Cloudflare Pages（`yamanoku-net`）のままにする。この Worker は `contact.yamanoku.net` だけで公開する。リポジトリ直下に `wrangler.jsonc` や `cloudflare.config.ts` は置かない。

## 無料で使う範囲

- **Workers Free**: 受信したフォームを処理する。
- **Turnstile**: ボット確認。サイトキーは公開してよく、秘密鍵は Worker の secret に置く。
- **メール**: 任意の宛先への Email Sending は Workers Paid が必要。確認済みの宛先アドレスへの送信は Free でも追加料金なし。バインディングは `0910yama@gmail.com` 以外へ送れない。
- 送信元は `contact@yamanoku.net`。返信先は入力されたメールアドレス。

## 初回の準備

1. Email Routing の宛先 `0910yama@gmail.com` を確認済みにする。
2. `yamanoku.net` の Email Routing を有効にする。ダッシュボードの Email Sending は任意の宛先へ送る有料機能で、「Workers Paid プランでのみ利用可能」と出る。その画面ではアップグレードしない。確認済み宛先への送信は Email Routing だけで無料のまま。
3. Turnstile ウィジェットを作る。ホスト名は `yamanoku.net` と `www.yamanoku.net`。本番のウィジェットに `localhost` は入れない。モードは managed。
4. 秘密鍵を Worker に置く。値はチャットやリポジトリに書かない。

```bash
npx wrangler secret put TURNSTILE_SECRET --name yamanoku-contact
```

5. サイトキーを Pages プロジェクト `yamanoku-net` の環境変数 `PUBLIC_TURNSTILE_SITEKEY` に置き、ポータルをビルドし直す。未設定の本番ビルドではフォームを出さず、メールアドレスだけを残す。
6. デプロイする。カスタムドメイン `contact.yamanoku.net` はデプロイ時にゾーン `yamanoku.net` へ結ばれる。

```bash
pnpm contact:dev
pnpm --filter yamanoku-contact run deploy
```

手元の `cf dev` は `dev.vars.example` を `.dev.vars` にコピーして使う。中身は Cloudflare が公開しているテスト用の秘密鍵と `CONTACT_RUNTIME=local` で、メールは送らない。本番の `CONTACT_RUNTIME` は `production` なので、テスト用の秘密鍵を本番に置くと送信は拒否される。`pnpm dev` のフォームはこのローカル Worker（`http://127.0.0.1:8787/`）に送る。

テスト:

```bash
pnpm contact:test
```
