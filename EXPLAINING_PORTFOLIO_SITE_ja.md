# ポートフォリオサイト（開発・デザイン）にまつわる解説

## ポートフォリオサイトの実装にまつわる解説

### 利用技術
- Astro
- ESLint
  - eslint-plugin-astro
- Markuplint
- Prettier
  - prettier-plugin-astro
- modern-normalize

詳細をもっと知るには [package.json](https://github.com/yamanoku/yamanoku.github.io/blob/dev/package.json) をご覧ください。

### マークアップ
ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップの実装しています。

また、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して、コンテンツの補完をするための実装も行っています。

<details>
<summary>詳細を確認する</summary>

```astro
<section id="basic" aria-labelledby="basic-heading">
  <h2 id="basic-heading">{t("heading.basic")}</h2>
</section>
```
aria-labelledbyとsection要素を紐付けることで記事間を移動するときにユーザを支援します。

- [Accessible Name Guidance by Role - Providing Accessible Names and Descriptions | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#x5-6-accessible-name-guidance-by-role)
</details>

### コンポーネント指向設計

表示のために得るAPIを整形する必要がありますが、1つのコンポーネントで管理することで、ソースコードの簡略化・複数での使い回しや情報設計の効率化を図ることができます。

<details>
<summary>詳細を確認する</summary>

たとえばスライド一覧のリストでは以下コンポーネントを使ってレンダリングしています。

```astro
<ul>
  {
    list.map(listItem => (
      <li>
        {listItem.datetime && (
          <span class="time">{dateStirngReplace(listItem.datetime)} - </span>
        )}
        {listItem.url ? (
          <GlobalLinkComponent link={listItem} />
        ) : (
          listItem.title
        )}
      </li>
    ))
  }
</ul>
```

[GlobalListComponent.astro](https://github.com/yamanoku/yamanoku.github.io/blob/dev/src/components/global/GlobalListComponent.astro)
</details>

### 国際化対応
ポートフォリオサイトは日本語と英語で表示されるようになっております。１ファイルで対応する各言語ごとに自動的に翻訳されるように設計されています。

<details>
<summary>詳細を確認する</summary>

翻訳される各言語をディレクトリごとで管理しています。

```
src/i18n
├── en
│   └── dictionary.ts // 英語
└──ja
    └── dictionary.ts // 日本語
```

`useTranslations` を使用して対応するキーと一致した場合、翻訳された文言が表示されます。

```astro
---
import { useTranslations } from "../../../i18n/util";
const t = useTranslations(Astro);
---
<h2 id="contact-heading">{t("heading.contact")}</h2>
<!-- 日本語： <h2 id="contact-heading">連絡先</h2> -->
```

特定の言語のみに表示する場合などのレンダリング処理も可能となっています。

日本語ではない場合に表示される条件式は以下のようになっています。

```astro
---
const lang = getLanguageFromURL(Astro.url.pathname);
---
{lang === "en" && <em>Sorry, Japanese text only</em>}
```
</details>

## ポートフォリオサイトのデザインにまつわる解説
あらゆる層の方が見やすいようにインクルーシブデザインを取り入れています。

### オーバーデザインしすぎない
過剰な装飾をしすぎることは目的の情報にたどり着く阻害に成り得ます。ブラウザのデフォルトスタイル、つまり標準の姿を意識したデザインにしています。

また、セマンティクスなマークアップで設計していることで、ブラウザ標準のスタイルのままでも違和感なく情報にたどり着けるようになっています。

- [Motherfucking Website](https://motherfuckingwebsite.com/)

### 文字サイズ
基本16pxになるように設定しており、ページを拡大してもサイズ比を維持したremで指定しています。

### カラーコントラスト
使用しているカラーはいずれも、背景とのコントラスト比が最低でも4.5:1となるように設定されていますが、純粋な白黒ではなく、濃淡を抑えてバランスをとったカラーとなっています。

<details>
<summary>詳細を確認する</summary>

共通で使用できるよう、以下カスタム・プロパティ（CSS変数）を使用して指定しています。

| design_token | value |
| ------------ | ----- |
| `var(--y-black-base)` | rgb(21, 32, 43) |
| `var(--y-white-base)` | rgb(255, 255, 255) |
| `var(--y-white-low)` | rgb(210, 210, 210) |
| `var(--y-white-medium)` | rgba(163, 163, 163) |
| `var(--y-blue-low)` | rgb(90, 190, 255) |
| `var(--y-blue-medium)` | rgb(18, 122, 200) |
| `var(--y-purple-medium)` | rgb(220, 100, 220) |

また、OSの設定によりますが、ダークモード（目に優しい暗い色調）にも対応しています。

- [yama-normalize - npm](https://www.npmjs.com/package/yama-normalize)
</details>

### 最大幅について
メインコンテンツの最大幅は80chに設定しています。chはチェーンと呼ばれ、文字のサイズによって可変する単位です。

この設定にすることのメリットとして、長文が読めない読字障害の利用者のサポートができたり、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなります。

### バーティカルリズム

ページ全体の一貫性を重視したバーティカルリズムを採用しています。24pxの行間を基準としてマージンや余白などを設定しています。

認知障害がある利用者は、単語と単語の間隔が均一になっていると、テキストをより容易に読めるようになります。
