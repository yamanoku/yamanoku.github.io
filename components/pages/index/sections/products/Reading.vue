<template>
  <article id="product:reading" aria-labelledby="product:reading_heading">
    <global-heading-component
      id="product:reading_heading"
      :heading-level="3"
      :heading-text="$t('product.reading')"
    />
    <figure
      aria-labelledby="product:reading_heading"
      aria-describedby="product:reading_caption"
    >
      <picture>
        <source srcset="~/assets/img/product-reading.webp" type="image/webp" />
        <img
          src="~/assets/img/product-reading.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.screenshot') + $t('product.reading')"
        />
      </picture>
      <figcaption id="product:reading_caption">
        {{ $t("product.description.reading") }}
      </figcaption>
    </figure>
    <global-heading-component
      id="related:reading_heading"
      :heading-level="4"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:reading_heading"
      :list-array="relatedListItem"
    />
    <global-heading-component
      id="teck-stack:reading_heading"
      :heading-level="4"
      :heading-text="$t('heading.techStack')"
    />
    <global-list-component
      aria-labelledby="tech-stack:reading_heading"
      :list-array="techStackListItem"
    />
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsReading",
  data() {
    return {
      relatedListItem: [
        {
          title: this.$t("product.reading"),
          url: "https://reading.yamanoku.net",
          isExternal: true
        },
        {
          title: this.$t("product.updateInfo"),
          url: "https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0",
          isExternal: true
        }
      ],
      techStackListItem: [
        {
          title: "Nuxt.js"
        },
        {
          title: "Nuxt PWA"
        },
        {
          title: "axios"
        },
        {
          title: "modern-normalize"
        },
        {
          title: "MSW"
        },
        {
          title: "@slack/web-api"
        },
        {
          title: "Netlify"
        },
        {
          title: "CircleCI"
        }
      ]
    };
  }
};
</script>
