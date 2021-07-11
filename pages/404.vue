<template>
  <main id="main">
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
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "404",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "404 status page - Page not found"
        }
      ]
    };
  }
};
</script>

<style scoped>
main > h1 {
  text-align: center;
}
</style>
