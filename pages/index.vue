<template>
  <main role="main" id="main">
    <h1>yamanoku net</h1>
    <SectionsBasicInfo />
    <SectionsCareerInfo />
    <SectionsProducts />
    <SectionsPresentations />
    <SectionsSns />
    <SectionsAddress />
    <CommonLocalSwitch />
  </main>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.rhythm.toggleRhythm ? "is-rhythm" : ""
      }
    }
  }
}
</script>
