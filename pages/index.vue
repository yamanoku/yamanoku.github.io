<template>
  <main id="main">
    <h1>yamanoku.net</h1>
    <index-sections-basic-info />
    <index-sections-career-info />
    <index-sections-open-source-activity />
    <index-sections-products />
    <index-sections-presentations />
    <index-sections-social-network-services />
    <index-sections-address />
    <global-local-switch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  name: "IndexPage",
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: this.$t("home.title")
      }
    };
  }
};
</script>
