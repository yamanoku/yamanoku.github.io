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
:root {
  --black: rgb(21, 32, 43);
  --white: #fff;
  --blue: rgb(90, 190, 255);
  --purple: rgb(220, 100, 220);
}
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
@media (prefers-color-scheme: dark) {
  html {
    background-color: var(--black);
    color: var(--white);
  }
  a {
    color: var(--blue);
  }
  a:visited {
    color: var(--purple);
  }
}
</style>
