<template>
  <nuxt/>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nSeo();
  }
};
</script>


<style>
html {
  font: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
