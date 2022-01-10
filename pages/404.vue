<template>
  <main id="main">
    <global-heading-component
      :heading-level="1"
      heading-text="ページが見つかりませんでした"
    />
    <status-404-not-found />
  </main>
</template>

<script>
export default {
  name: "NotFoundPage",
  head() {
    return {
      title: "ページが見つかりませんでした"
    };
  }
};
</script>

<style></style>
