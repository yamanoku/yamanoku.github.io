<template>
  <main id="main">
    <global-heading-component :heading-level="1" heading-text="yamanoku.net" />
    <index-sections-basic-info />
    <index-sections-career-info />
    <index-sections-open-source-activity />
    <index-sections-presentations />
    <index-sections-social-network-services />
    <index-sections-address />
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
