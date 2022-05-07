<template>
  <div>
    <global-header />
    <nuxt />
    <global-footer />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  }
};
</script>
