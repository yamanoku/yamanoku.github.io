<template>
  <main role="main" id="main">
    <h1>{{ errorHeading }}</h1>
    <p>{{ $t("error.404.text01") }}</p>
    <p>{{ $t("error.404.text02") }}</p>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "404 Page Error",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "404"
        }
      ]
    }
  },
  computed: {
    errorHeading() {
      if (this.$i18n.locale === "ja") {
        return "申し訳ありません。404エラーです。"
      } else {
        return "I'm sorry for the 404 error."
      }
    }
  }
}
</script>
