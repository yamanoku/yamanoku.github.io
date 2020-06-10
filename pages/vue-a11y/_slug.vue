<template>
  <main role="main" id="main">
    <nuxt-content :document="page" />
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
  name: "VueA11yPageSlug",
  mixins: [Meta],
  middleware({ params, redirect }) {
    if (params.slug === "index") {
      redirect("/")
    }
  },
  async asyncData({ $content, store, app, params, error }) {
    const slug = params.slug || "index"
    let page
    try {
      page = await await $content("vue-a11y", app.i18n.locale, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" })
    }
    return {
      page
    }
  },
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
