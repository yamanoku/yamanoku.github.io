<template>
  <main id="main">
    <h1>ページが見つかりませんでした</h1>
    <p>
      申し訳ありません。お探しのページが見つかりませんでした。<br />
      お手数をおかけしますが、<nuxt-link to="/">ホーム</nuxt-link>にお戻りください。
    </p>
    <p lang="en">
      Sorry. Couldn't find the page you were looking for.<br />
      We apologize for the inconvenience, but please access
      <nuxt-link to="/en/">Home</nuxt-link>.
    </p>
  </main>
</template>

<script>
export default {
  name: "Page404",
  head() {
    return {
      title: "ページが見つかりませんでした"
    };
  }
};
</script>

<style></style>
