<template>
  <section id="book:about-accessibility-with-vuejs-2019">
    <global-heading-component
      :heading-level="2"
      :heading-text="$t('vueA11yPage2019.heading.book')"
    />
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.book')"
    />
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
        <global-list-component :list-array="BookListItem" />
        <p>
          {{ $t("vueA11yPage2019.book.desc03") }}
        </p>
        <global-link-component :link-object="issuesLink" />
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  name: "VueA11y2019Book",
  data() {
    return {
      BookListItem: [
        {
          title: "これからはじめるwebアクセシビリティ - こんのいぬ - BOOTH",
          url: "https://booth.pm/ja/items/1044446",
          isExternal: true
        },
        {
          title:
            "「これからはじめるwebアクセシビリティ」をnoteにて販売します｜Okuto Oyama｜note",
          url: "https://note.mu/yamanoku/n/n3487a344ff84",
          isExternal: true
        }
      ],
      issuesLink: {
        title:
          "yamanoku/accessibility_book-issues:「これからはじめるwebアクセシビリティ」へのFB専用リポジトリ",
        url: "https://github.com/yamanoku/accessibility_book-issues",
        isExternal: true,
        isGitHubLink: true
      }
    };
  }
};
</script>
