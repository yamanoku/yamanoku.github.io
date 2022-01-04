<template>
  <main id="main">
    <h1>yamanoku.net</h1>
    <SectionsBasicInfo />
    <SectionsCareerInfo />
    <SectionsOpenSourceActivity />
    <SectionsProducts />
    <SectionsPresentations />
    <SectionsSns />
    <SectionsAddress />
    <GlobalLocalSwitch />
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
