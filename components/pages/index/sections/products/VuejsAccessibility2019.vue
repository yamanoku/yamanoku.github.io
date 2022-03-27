<template>
  <article
    id="product:about-accessibility-with-vuejs-2019"
    aria-labelledby="product:about-accessibility-with-vuejs-2019_heading"
  >
    <global-heading-component
      id="product:about-accessibility-with-vuejs-2019_heading"
      :heading-level="3"
      :heading-text="$t('product.vueA11yPage2019.title')"
    />
    <figure
      aria-labelledby="product:about-accessibility-with-vuejs-2019_heading"
      aria-describedby="product:about-accessibility-with-vuejs-2019_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-about-accessibility-with-vuejs-2019.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-about-accessibility-with-vuejs-2019.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.photo') + $t('product.vueA11yPage2019.title')"
          decoding="async"
        />
      </picture>
      <figcaption id="product:about-accessibility-with-vuejs-2019_caption">
        {{ $t("product.description.vueA11yPage2019") }}
      </figcaption>
    </figure>
    <p>
      <a :href="productURLPath">
        {{ $t("product.vueA11yPage2019.link") }}
      </a>
    </p>
    <section
      id="product:about-accessibility-with-vuejs-2019_information"
      aria-labelledby="product:about-accessibility-with-vuejs-2019_subheading"
    >
      <global-heading-component
        id="product:about-accessibility-with-vuejs-2019_subheading"
        :heading-level="4"
        :heading-text="$t('product.vueA11yPage2019.infoHeading')"
      />
      <global-list-component :list-array="vueA11yPage2019ListItem" />
    </section>
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsVuejsAccessibility2019",
  data() {
    return {
      vueA11yPage2019ListItem: [
        {
          title: this.$t("product.vueA11yPage2019.info.listitem01"),
          datetime: "2019-12-21T00:00:00.000Z"
        },
        {
          title: "product.vueA11yPage2019.info.listitem02",
          isI18n: true,
          i18nLinkTitle: "awesome-a11y-vue",
          url: "https://github.com/vue-a11y/awesome-a11y-vue/pull/3",
          datetime: "2020-02-28T00:00:00.000Z",
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: this.$t("product.vueA11yPage2019.info.listitem03"),
          datetime: "2020-05-03T00:00:00.000Z"
        },
        {
          title: this.$t("product.vueA11yPage2019.info.listitem04"),
          datetime: "2021-09-20T00:00:00.000Z"
        },
        {
          title: "product.vueA11yPage2019.info.listitem05",
          isI18n: true,
          i18nLinkTitle: "yamanoku/vue-a11y-2019",
          url: "https://github.com/yamanoku/vue-a11y-2019",
          datetime: "2022-03-07T00:00:00.000Z",
          isExternal: true,
          isGitHubLink: true
        }
      ]
    };
  },
  computed: {
    productURLPath() {
      if (this.$i18n.locale === "en") {
        return "https://yamanoku.net/vue-a11y-2019/en/";
      }
      return "https://yamanoku.net/vue-a11y-2019/ja/";
    }
  }
};
</script>
