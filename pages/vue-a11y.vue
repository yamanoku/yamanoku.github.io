<template>
  <main role="main" id="main">
    <i18n tag="p" path="vueA11yPage2019.moveUrlText">
      <template v-slot:moveUrl>
        <nuxt-link to="vue-a11y-2019"
          >https://yamanoku.net/vue-a11y-2019/</nuxt-link
        >
      </template>
    </i18n>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
    <global-local-switch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  head() {
    return {
      meta: [
        {
          "http-equiv": "refresh",
          content: "0;url=https://yamanoku.net/vue-a11y-2019/"
        },
        { rel: "canonical", href: "https://yamanoku.net/vue-a11y-2019/" }
      ]
    };
  },
  data() {
    return {
      meta: {
        title: this.$t("vueA11yPage2019.title"),
        description: this.$t("vueA11yPage2019.description"),
        image: "https://yamanoku.net/ogp/ogp-vue-a11y-2019@2x.png",
        imageAlt: this.$t("vueA11yPage2019.title")
      }
    };
  }
};
</script>
