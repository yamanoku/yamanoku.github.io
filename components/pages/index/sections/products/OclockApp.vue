<template>
  <article id="product:oclock-app" aria-labelledby="product:oclock-app_heading">
    <global-heading-component
      id="product:oclock-app_heading"
      :heading-level="3"
      :heading-text="$t('product.oclock-app.title')"
    />
    <figure
      aria-labelledby="product:oclock-app_heading"
      aria-describedby="product:oclock-app_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-oclock-app.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-oclock-app.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.screenshot') + $t('product.oclock-app.title')"
        />
      </picture>
      <figcaption id="product:oclock-app_caption">
        {{ $t("product.description.oclock-app") }}
      </figcaption>
    </figure>
    <global-heading-component
      id="related:oclock-app_heading"
      :heading-level="4"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:oclock-app_heading"
      :list-array="relatedListItem"
    />
    <global-heading-component
      id="teck-stack:oclock-app_heading"
      :heading-level="4"
      :heading-text="$t('heading.techStack')"
    />
    <global-list-component
      aria-labelledby="tech-stack:oclock-app_heading"
      :list-array="techStackListItem"
    />
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsOclockApp",
  data() {
    return {
      relatedListItem: [
        {
          title: this.$t("product.oclock-app.title"),
          url: "https://yamanoku.net/oclock/",
          isExternal: true
        },
        {
          title: this.$t("product.oclock-app.zenn"),
          url: "https://zenn.dev/yamanoku/scraps/bb713d47a45a55/",
          isExternal: true
        }
      ],
      techStackListItem: [
        {
          title: "Svelte"
        },
        {
          title: "Custom Elements"
        },
        {
          title: "WAI-ARIA"
        }
      ]
    };
  }
};
</script>
