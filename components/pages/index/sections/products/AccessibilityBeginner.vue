<template>
  <article
    id="product:web-accessibility-for-beginner"
    aria-labelledby="product:web-accessibility-for-beginner_heading"
  >
    <global-heading-component
      id="product:web-accessibility-for-beginner_heading"
      :heading-level="3"
      :heading-text="$t('product.wafb.title')"
    />
    <figure
      aria-labelledby="product:web-accessibility-for-beginner_heading"
      aria-describedby="product:web-accessibility-for-beginner_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-web-accessibility-for-beginner.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-web-accessibility-for-beginner.jpg"
          width="663"
          height="480"
          :alt="$t('prefixAlt.photo') + $t('product.wafb.title')"
          decoding="async"
        />
      </picture>
      <figcaption id="product:web-accessibility-for-beginner_caption">
        {{ $t("product.description.wafb") }}
      </figcaption>
    </figure>
    <template v-if="this.$i18n.locale !== 'ja'">
      <p>
        <em>{{ $t("onlyJPText") }}</em>
      </p>
    </template>
    <global-heading-component
      id="related:web-accessibility-for-beginner_heading"
      :heading-level="4"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:web-accessibility-for-beginner_heading"
      :list-array="relatedListItem"
    />
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsAccessibilityBeginner",
  data() {
    return {
      relatedListItem: [
        {
          title: this.$t("product.wafb.circleDetail"),
          url: "https://techbookfest.org/event/tbf05/circle/41130001",
          isExternal: true
        },
        {
          title: this.$t("product.wafb.boothLink"),
          url: "https://booth.pm/ja/items/1044446",
          isExternal: true
        },
        {
          title: this.$t("product.wafb.noteLink"),
          url: "https://note.mu/yamanoku/n/n3487a344ff84",
          isExternal: true
        }
      ]
    };
  }
};
</script>
