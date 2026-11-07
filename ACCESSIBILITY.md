# ウェブアクセシビリティ方針

yamanoku.net では、アクセシビリティの確保・維持・向上を実現するため「JIS X 8341-3:2016 高齢者・障害者等配慮設計指針－情報通信における機器，ソフトウェア及びサービス－第3部：ウェブコンテンツ」への対応に取り組んでいます。

## ウェブアクセシビリティ試験結果
実施方法、及び試験の結果について

### 表明日
2021年1月4日

### 規格の規格番号及び改正年
JIS X 8341-3:2016

### 対象範囲
ウェブサイト（ https://yamanoku.net/ および https://records.yamanoku.net/ ）

ただし、[yamanoku/yamanoku.github.io](https://github.com/yamanoku/yamanoku.github.io) で管理しているウェブページのみを対象とします。

- https://yamanoku.net/
- https://yamanoku.net/en/
- 任意パスに対する 404 応答（例: https://yamanoku.net/this-page-does-not-exist ）
- https://records.yamanoku.net/ 配下（本リポジトリの records アプリ。発表詳細および Slidev を含む）

対象範囲内のページは、トーク URL をすべて試験せず、テンプレート種別（ポータル JA/EN、404、records 一覧、発表詳細、Slidev）でサンプリングした。実際に開いた URL は次のとおり。

- https://yamanoku.net/
- https://yamanoku.net/en/
- https://yamanoku.net/this-page-does-not-exist （404）
- https://records.yamanoku.net/
- https://records.yamanoku.net/dai-funabashidev-2026/
- https://records.yamanoku.net/tskaigi-2025/
- https://records.yamanoku.net/frontendo-2024/ja/
- https://records.yamanoku.net/jsconfjp-2021/
- https://records.yamanoku.net/vuefes-japan-2025/ja/
- https://records.yamanoku.net/tskaigi-2026/slide/
- https://records.yamanoku.net/burikaigi-2026/slide/
- https://records.yamanoku.net/vuefes-japan-2025/slide/

なお、2022年試験時の対象であった https://yamanoku.net/vue-a11y-2019 および https://yamanoku.net/privacy は、現在は 404 応答となるため対象から外している。

404 フッターの Adring は第三者ウィジェットのため、詳細な達成基準の判定対象外とした。

### 依存したウェブコンテンツ技術
HTML、CSS、JavaScript（Slidev および Adring ウィジェット）

収録済み映像は https://records.yamanoku.net/jsconfjp-2021/ に含まれる。

### 目標とする適合レベル及び対応度
JIS X 8341-3:2016の適合レベルAAに一部準拠

適用される達成基準に不適合があるため、「準拠」は宣言できない。

注記：ウェブアクセシビリティ方針における「準拠」という表記は、情報通信アクセス協議会ウェブアクセシビリティ基盤委員会「[ウェブコンテンツのJIS X 8341-3:2016 対応度表記ガイドライン – 2021年4月版](https://waic.jp/docs/jis2016/compliance-guidelines/202104/)」で定められた表記による。

### 試験実施期間
2026年10月4日

（前回の試験実施期間は 2022年1月1日〜1月3日）

## 達成基準チェックリスト
達成基準に該当するコンテンツが対象範囲内にある場合は適用欄に「o」、ない場合は「-」と表記しています。

適用、もしくは達成基準を満たしている場合は適合欄に「o」、満たしていない場合は「x」と表記しています。

| 達成基準 | 適用 | 適合 | レベル | 注記 |
| -- | :--: | :--: | :--: | -- |
| 1.1.1 非テキストコンテンツの達成基準 | o | x | A | [burikaigi-2026/slide](https://records.yamanoku.net/burikaigi-2026/slide/) の一部画像（button-jihanki、button-light、button-remote-controller、xerox-alto-and-xerox-8010-star、wcag）に `alt` 属性なし |
| 1.2.1 音声だけ及び映像だけ（収録済み）の達成基準 | - | o | A | 該当コンテンツなし |
| 1.2.2 キャプション（収録済み）の達成基準 | o | x | A | [jsconfjp-2021](https://records.yamanoku.net/jsconfjp-2021/) の収録済み `<video>` 3本にキャプション（`<track>`）なし |
| 1.2.3 音声解説又はメディアに対する代替コンテンツ（収録済み）の達成基準 | o | o | A | [jsconfjp-2021](https://records.yamanoku.net/jsconfjp-2021/) の動画は前後の本文で内容を説明している |
| 1.2.4 キャプション（ライブ）の達成基準 | - | o | AA | 該当コンテンツなし |
| 1.2.5 音声解説（収録済み）の達成基準 | o | o | AA | 当該デモ動画の必要情報は音声側にあり、追加の音声解説を要する視覚のみの情報は認めず |
| 1.3.1 情報及び関係性の達成基準 | o | o | A |   |
| 1.3.2 意味のある順序の達成基準 | o | o | A |   |
| 1.3.3 感覚的な特徴の達成基準 | - | o | A | 該当コンテンツなし  |
| 1.4.1 色の使用の達成基準 | o | o | A |   |
| 1.4.2 音声の制御の達成基準 | - | o | A | 該当コンテンツなし |
| 1.4.3 コントラスト（最低限レベル）の達成基準 | o | x | AA | ポータル／records／発表詳細の本文・リンクは 4.5:1 以上。Slidev（[burikaigi-2026/slide](https://records.yamanoku.net/burikaigi-2026/slide/) 等）では通常テキストが 4.5:1 未満の箇所あり |
| 1.4.4 テキストのサイズ変更の達成基準 | o | o | AA |   |
| 1.4.5 文字画像の達成基準 | o | o | AA |   |
| 2.1.1 キーボードの達成基準 | o | o | A | 2026年10月4日のキーボード確認で、[ポータル JA](https://yamanoku.net/)、[EN](https://yamanoku.net/en/)、[404](https://yamanoku.net/this-page-does-not-exist)、[records 一覧](https://records.yamanoku.net/)、[dai-funabashidev-2026](https://records.yamanoku.net/dai-funabashidev-2026/) はタブ移動可能。Slidev 独自コントロールは未確認 |
| 2.1.2 キーボードトラップなしの達成基準 | o | o | A | 上記ページにキーボードトラップなし。Slidev 独自コントロールは未確認 |
| 2.2.1 タイミング調整可能の達成基準 | - | o | A | 該当コンテンツなし |
| 2.2.2 一時停止，停止及び非表示の達成基準 | - | o | A | 該当コンテンツなし |
| 2.3.1 3回のせん（閃）光，又はしきい（閾）値以下の達成基準 | - | o | A | 該当コンテンツなし |
| 2.4.1 ブロックスキップの達成基準 | o | o | A | スキップリンクはないが、`main` ランドマークと見出しによりブロックを回避できる |
| 2.4.2 ページタイトルの達成基準 | o | o | A |   |
| 2.4.3 フォーカス順序の達成基準 | o | o | A | 上記ページのタブ順は妥当。Slidev 独自コントロールは未確認 |
| 2.4.4 リンクの目的（コンテキスト内）の達成基準 | o | o | A |   |
| 2.4.5 複数の手段の達成基準 | o | o | AA |   |
| 2.4.6 見出し及びラベルの達成基準 | o | o | AA |   |
| 2.4.7 フォーカスの可視化の達成基準 | o | o | AA | 上記ページで青いフォーカスアウトラインを確認。Slidev 独自コントロールは未確認 |
| 3.1.1 ページの言語の達成基準 | o | o | A |   |
| 3.1.2 一部分の言語の達成基準 | o | x | AA | [ポータル JA](https://yamanoku.net/) の `English Page`、[EN](https://yamanoku.net/en/) の `日本語ページ` に `lang` なし |
| 3.2.1 フォーカス時の達成基準 | o | o | A | 上記ページでフォーカス時の状況変化なし。Slidev 独自コントロールは未確認 |
| 3.2.2 入力時の達成基準 | o | o | A | 静的ページで入力時の状況変化は認めず。Slidev の入力は操作していない |
| 3.2.3 一貫したナビゲーションの達成基準 | o | o | AA |   |
| 3.2.4 一貫した識別性の達成基準 | o | o | AA |   |
| 3.3.1 エラーの特定の達成基準 | - | o | A | 入力エラーが発生するコンテンツなし |
| 3.3.2 ラベル又は説明の達成基準 | o | x | A | Slidev（[burikaigi-2026/slide](https://records.yamanoku.net/burikaigi-2026/slide/) 等）の検索入力およびスライド番号入力にラベルなし |
| 3.3.3 エラー修正の提案の達成基準 | - | o | AA | 入力エラーが発生するコンテンツなし |
| 3.3.4 エラー回避（法的，金融及びデータ）の達成基準 | - | o | AA | 入力エラーが発生するコンテンツなし |
| 4.1.1 構文解析の達成基準 | o | o | A |   |
| 4.1.2 名前（name），役割（role）及び値（value）の達成基準 | o | x | A | Slidev（[burikaigi-2026/slide](https://records.yamanoku.net/burikaigi-2026/slide/)）に名前のないアイコンボタン。404 で「日本語ページ」に誤った `aria-current="page"` |
