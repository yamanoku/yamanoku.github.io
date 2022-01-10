<template>
  <article
    id="product:vue-portfolio-template"
    aria-labelledby="product:vue-portfolio-template_heading"
  >
    <global-heading-component
      id="product:vue-portfolio-template_heading"
      :heading-level="3"
      :heading-text="$t('product.vuePortfolio')"
    />
    <figure
      aria-labelledby="product:vue-portfolio-template_heading"
      aria-describedby="product:vue-portfolio-template_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-vue-portfolio-template.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-vue-portfolio-template.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.screenshot') + $t('product.vuePortfolio')"
        />
      </picture>
      <figcaption id="product:vue-portfolio-template_caption">
        {{ $t("product.description.vuePortfolio") }}
      </figcaption>
    </figure>
    <global-heading-component
      id="related:vue-portfolio_heading"
      :heading-level="4"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:vue-portfolio_heading"
      :list-array="relatedListItem"
    />
    <h4 id="tech-stack:vue-portfolio_heading">{{ $t("heading.techStack") }}</h4>
    <global-list-component
      aria-labelledby="tech-stack:vue-portfolio_heading"
      :list-array="techStackListItem"
    />
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsVuePortfolio",
  data() {
    return {
      relatedListItem: [
        {
          title: this.$t("product.vuePortfolio"),
          url: "https://vue-portfolio.yamanoku.net/",
          isExternal: true
        }
      ],
      techStackListItem: [
        {
          title: "Vue.js"
        },
        {
          title: "vue-cli"
        },
        {
          title: "vue-router"
        },
        {
          title: "webpack"
        },
        {
          title: "PostCSS"
        },
        {
          title: "Netlify"
        }
      ]
    };
  }
};
</script>
