# CLAUDE.md - 開発ガイドライン

## プロジェクト概要

yamanoku.netのポートフォリオサイトの開発ガイドラインです。

### 技術スタック
- **フレームワーク**: Astro 5.8.1
- **スタイリング**: TailwindCSS v4.1.8
- **パッケージマネージャー**: pnpm 10.11.0
- **リンター**: Biome 1.9.4
- **HTML検証**: Markuplint
- **国際化**: カスタムi18nシステム（日本語・英語対応）

### 開発コマンド
```bash
# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview

# リント・フォーマット
pnpm lint

# デプロイ
pnpm deploy
```

## コードスタイルガイドライン

### ファイル構成
```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── global/          # グローバルコンポーネント
│   ├── page-index/      # インデックスページ専用
│   └── page-status-404/ # 404ページ専用
├── layouts/             # レイアウトコンポーネント
├── pages/               # ページファイル（ルーティング）
├── i18n/               # 国際化関連
├── presentations/       # プレゼンテーション一覧
└── styles/             # グローバルスタイル
```

### 命名規則
- **コンポーネント**: PascalCase（例：`GlobalHeader.astro`）
- **ファイル・ディレクトリ**: kebab-case（例：`page-index`）
- **TypeScript型**: PascalCase（例：`LinkItem`）
- **変数・関数**: camelCase

### Astroコンポーネントパターン

#### 基本構造
```astro
---
// TypeScript部分
import type { ComponentProps } from './types';

interface Props {
  title: string;
  items?: ComponentProps[];
}

const { title, items = [] } = Astro.props;
---

<!-- HTML部分 -->
<section class="component-section">
  <h2>{title}</h2>
  {items.map(item => (
    <div class="item">{item.content}</div>
  ))}
</section>
```

#### グローバルコンポーネント
- `Global`プレフィックスを使用
- 共通の型定義は`GlobalTypes.ts`に集約
- 例：`GlobalHeader.astro`, `GlobalFooter.astro`

#### ページ専用コンポーネント
- ページ名でディレクトリを作成（例：`page-index/`）
- セクション単位でコンポーネント分割
- 例：`BasicInfoSection.astro`, `PresentationsSection.astro`

### TypeScriptガイドライン

#### 基本ルール
- 指示なく既存の型定義を変更しない・型定義のルールに従う
  - 例: `ExactPresantationLengthArray` の `length` は勝手に変えない

#### 型定義
```typescript
// 基本的なリンク項目
export type LinkItem = {
  url?: string;
  title?: string;
  rel?: string;
};

// 拡張された項目（日時情報付き）
export type ListItem = LinkItem & {
  datetime?: string;
};
```

#### 国際化の型安全性
```typescript
// 辞書の型を定義
export type Dictionary = {
  [key: string]: string | Dictionary;
};

// 言語コードの型
export type Language = 'ja' | 'en';
```

### CSS・スタイリング

#### TailwindCSS v4の使用
- ユーティリティクラスを基本とする
- カスタムコンポーネントクラスは`@component`で定義
- レスポンシブデザインは`sm:`, `md:`, `lg:`を使用

#### グローバルスタイル
```css
/* src/styles/global.css */
@import "tailwindcss";

/* カスタムコンポーネント */
@component .btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
}
```

### 国際化（i18n）

#### ディレクトリ構造
```
src/i18n/
├── en/
│   └── dictionary.ts    # 英語辞書
├── ja/
│   └── dictionary.ts    # 日本語辞書
├── languages.ts         # 対応言語一覧
├── translation-checkers.ts  # 翻訳チェック
└── util.ts             # i18nユーティリティ
```

#### 翻訳パターン
```typescript
// src/i18n/ja/dictionary.ts
export default {
  site: {
    title: 'やまのく',
    description: 'フロントエンドエンジニアのポートフォリオサイト'
  },
  nav: {
    home: 'ホーム',
    about: 'について'
  }
} as const;
```

#### コンポーネントでの使用
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/util';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('site.title')}</h1>
<p>{t('site.description')}</p>
```

## レビュー基準

### コードレビューチェックリスト

#### 一般
- [ ] Biomeのルールに準拠している
- [ ] Markuplintでエラーが出ない
- [ ] 型安全性が保たれている
- [ ] アクセシビリティに配慮されている

#### Astroコンポーネント
- [ ] Props の型定義が適切
- [ ] CSS クラス名が意味的
- [ ] SEO に配慮したメタタグ
- [ ] パフォーマンスに配慮（不要な JavaScript を含まない）

#### 国際化
- [ ] 翻訳キーが両言語で定義されている
- [ ] 文字列のハードコーディングがない
- [ ] 言語固有のフォーマット（日付など）に対応

#### スタイル
- [ ] TailwindCSS のユーティリティクラスを優先使用
- [ ] レスポンシブデザインに対応
- [ ] ダークモード対応（必要に応じて）

## プロジェクト固有ルール

### 必須パターン

1. **コンポーネントの型安全性**
   ```astro
   ---
   interface Props {
     title: string;
     items?: Array<{ url: string; title: string }>;
   }

   const { title, items = [] } = Astro.props;
   ---
   ```

2. **国際化対応**
   - すべてのユーザー向けテキストは辞書ファイルに定義
   - ハードコーディングした文字列は禁止

3. **アクセシビリティ**
   - セマンティックなHTML要素を使用
   - 適切なARIAラベルを設定
   - キーボードナビゲーション対応

### 禁止パターン

1. **直接的な外部依存の追加**
   - 新しいライブラリ追加前に既存の解決方法を検討
   - パフォーマンスへの影響を考慮

2. **インラインスタイル**
   ```astro
   <!-- ❌ 禁止 -->
   <div style="color: red;">

   <!-- ✅ 推奨 -->
   <div class="text-red-500">
   ```

3. **型定義の省略**
   ```astro
   ---
   // ❌ 禁止
   const { title, items } = Astro.props;

   // ✅ 推奨
   interface Props {
     title: string;
     items?: LinkItem[];
   }
   const { title, items = [] } = Astro.props;
   ---
   ```

## テスト・品質保証

### プリコミットチェックリスト
- [ ] `pnpm lint` でエラーなし
- [ ] `pnpm build` が成功する
- [ ] 両言語（日本語・英語）で表示確認
- [ ] レスポンシブデザインの動作確認
- [ ] アクセシビリティチェック

### デプロイ前チェック
- [ ] 本番ビルドでエラーなし
- [ ] SEOメタタグの設定確認
- [ ] パフォーマンス指標の確認
- [ ] 全ページの動作確認

## 開発のベストプラクティス

### パフォーマンス
- 画像の最適化（WebP形式推奨）
- 不要なJavaScriptの排除
- CSS の最小化

### SEO
- 適切なメタタグ設定
- 構造化データの実装
- サイトマップの生成

### 保守性
- コンポーネントの再利用性重視
- 明確な型定義
- 適切なコメント記述

---

このガイドラインは継続的に更新され、プロジェクトの成長に合わせて改善されます。
