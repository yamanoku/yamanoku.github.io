<template>
  <nuxt />
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
  line-height: 25px;
  -webkit-font-smoothing: antialiased;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
