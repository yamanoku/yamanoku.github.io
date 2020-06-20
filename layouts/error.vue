<template>
  <main role="main" id="main">
    <template v-if="error.statusCode === 404">
      <h1>404</h1>
      <p lang="ja">
        申し訳ありません。お探しのページが見つかりませんでした。<br />
        お手数をおかけしますが、<nuxt-link to="/">TOPページ</nuxt-link>
        にお戻りください。
      </p>
      <p lang="en">
        Sorry. Couldn't find the page you were looking for.<br />
        We apologize for the inconvenience, but please access
        <nuxt-link to="/en/">TOP page</nuxt-link>.
      </p>
    </template>
    <template v-else>
      <h1>500</h1>
      <p>{{ $t("error.500.text01") }}</p>
      <p>{{ $t("error.500.text02") }}</p>
      <address>
        <a href="mailto:0910yama@gmail.com">0910yama@gmail.com</a>
      </address>
    </template>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.error.statusCode + " Error",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.error.statusCode
        },
        { name: "twitter:title", content: this.error.statusCode + " Error" },
        {
          name: "twitter:description",
          content: this.error.statusCode
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    }
  }
}
</script>

<style scoped>
main > h1 {
  text-align: center;
}
</style>
