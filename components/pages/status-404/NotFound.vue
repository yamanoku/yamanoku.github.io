<template>
  <div>
    <p>
      申し訳ありません。お探しのページが見つかりませんでした。<br />
      お手数をおかけしますが、<nuxt-link to="/">ホーム</nuxt-link
      >にお戻りください。
    </p>
    <p lang="en">
      Sorry. Couldn't find the page you were looking for.<br />
      We apologize for the inconvenience, but please access
      <nuxt-link to="/en/">Home</nuxt-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: "Status404NotFound"
};
</script>
