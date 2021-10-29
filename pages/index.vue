<template>
  <main id="main">
    <h1>yamanoku.net</h1>
    <SectionsBasicInfo />
    <SectionsCareerInfo />
    <SectionsOSSActivity />
    <SectionsProducts />
    <SectionsPresentations />
    <SectionsSns />
    <SectionsAddress />
    <GlobalLocalSwitch />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.rhythm.toggleRhythm ? "is-rhythm" : ""
      }
    };
  }
};
</script>
