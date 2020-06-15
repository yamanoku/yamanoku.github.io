<template>
  <main role="main" id="main">
    <vuejs-accessibility-sections-title />
    <vuejs-accessibility-sections-bio />
    <vuejs-accessibility-sections-book />
    <vuejs-accessibility-sections-web-accessibility />
    <vuejs-accessibility-sections-vuejs-accessibility />
    <vuejs-accessibility-sections-accessibility-notes />
    <vuejs-accessibility-sections-conclusion />
    <common-feedback-list :feedback="feedback" />
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
    <common-local-switch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta"

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: this.$t("vueA11yPage.title"),
        description: this.$t("vueA11yPage.description"),
        image: "https://yamanoku.net/ogp/ogp-vue-a11y@2x.png"
      },
      feedback: {
        gitHubTitle: this.$t("vueA11yPage.feedback.github.linkTitle"),
        routePath: this.$route.path
      }
    }
  }
}
</script>

<style>
img {
  height: auto;
}
a[target="_blank"] svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
a[target="_blank"] svg .open_new-1 {
  fill: none;
}
a[target="_blank"] svg .open_new-2 {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  a[target="_blank"] svg .open_new-2 {
    fill: var(--white);
  }
}
</style>
