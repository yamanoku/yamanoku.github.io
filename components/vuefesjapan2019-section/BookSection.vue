<template>
  <section id="book">
    <h2>著書</h2>
    <h3>これからはじめるwebアクセシビリティ</h3>
    <figure
      aria-labelledby="product:web-accessibility-for-beginner_heading"
      aria-describedby="product:web-accessibility-for-beginner_caption"
    >
      <img
        src="~/assets/img/product-web-accessibility-for-beginner.jpg"
        :alt="$t('prefixAlt.photo') + $t('product.wafb.title')"
      />
      <figcaption>
        <p>技術書典で「これからはじめるwebアクセシビリティ」という技術同人誌を発表しました。ウェブアクセシビリティをはじめる方向けの導入として知ってもらいたいのがきっかけでした。</p>
        <p>現在BOOTHやNoteでもPDFファイルにて販売しております。</p>
        <ul>
          <li>
            <a href="https://booth.pm/ja/items/1044446">これからはじめるwebアクセシビリティ - こんのいぬ - BOOTH</a>
          </li>
          <li>
            <a
              href="https://note.mu/yamanoku/n/n3487a344ff84"
            >「これからはじめるwebアクセシビリティ」をnoteにて販売します｜Okuto Oyama｜note</a>
          </li>
        </ul>
        <p>またGitHubのフィードバック用のリポジトリのIssueにて修正や改善、提案を受け入れています。</p>
        <a
          href="https://github.com/yamanoku/accessibility_book-issues"
        >yamanoku/accessibility_book-issues: 「これからはじめるwebアクセシビリティ」へのFB専用リポジトリ</a>
      </figcaption>
    </figure>
  </section>
</template>
