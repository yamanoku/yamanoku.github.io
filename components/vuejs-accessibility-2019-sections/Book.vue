<template>
  <section id="book:about-accessibility-with-vuejs">
    <h2>{{ $t("vueA11yPage2019.heading.book") }}</h2>
    <h3>{{ $t("vueA11yPage2019.subHeading.book") }}</h3>
    <figure>
      <picture>
        <source
          srcset="~/assets/img/product-web-accessibility-for-beginner.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-web-accessibility-for-beginner.jpg"
          :alt="$t('prefixAlt.photo') + $t('product.wafb.title')"
        />
      </picture>
      <figcaption>
        <p>
          {{ $t("vueA11yPage2019.book.desc01") }}
        </p>
        <p>
          {{ $t("vueA11yPage2019.book.desc02") }}
        </p>
        <ul>
          <li>
            <a
              href="https://booth.pm/ja/items/1044446"
              target="_blank"
              rel="noopener"
              >これからはじめるwebアクセシビリティ - こんのいぬ -
              BOOTH<open-new-icon
            /></a>
          </li>
          <li>
            <a
              href="https://note.mu/yamanoku/n/n3487a344ff84"
              target="_blank"
              rel="noopener"
              >「これからはじめるwebアクセシビリティ」をnoteにて販売します｜Okuto
              Oyama｜note<open-new-icon
            /></a>
          </li>
        </ul>
        <p>
          {{ $t("vueA11yPage2019.book.desc03") }}
        </p>
        <a
          href="https://github.com/yamanoku/accessibility_book-issues"
          target="_blank"
          rel="noopener"
          >yamanoku/accessibility_book-issues:
          「これからはじめるwebアクセシビリティ」へのFB専用リポジトリ<open-new-icon
        /></a>
      </figcaption>
    </figure>
  </section>
</template>
