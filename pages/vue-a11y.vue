<template>
  <main role="main" id="main">
    <vuejs-accessibility-sections-title />
    <vuejs-accessibility-sections-bio />
    <vuejs-accessibility-sections-book />
    <vuejs-accessibility-sections-web-accessibility />
    <vuejs-accessibility-sections-vuejs-accessibility />
    <vuejs-accessibility-sections-accessibility-notes />
    <vuejs-accessibility-sections-conclusion />
    <common-feedback-list :listArray="feedbackList" />
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
      feedbackList: [
        {
          link: `https://github.com/yamanoku/yamanoku.github.io/issues/new?title=記事「${this.$t(
            "vueA11yPage.title"
          )}」の修正依頼&labels=document,feedback&body=URL：https://yamanoku.net${
            this.$route.path
          }%0A修正内容：`,
          title: `GitHub Issueを作成する`
        },
        {
          link: `https://twitter.com/share?url=https://yamanoku.net${this.$route.path}&text=@yamanoku`,
          title: "Twitterで連絡する"
        }
      ]
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
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
