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
  --rhythm: 25px;
}
html {
  font: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: var(--rhythm);
  -webkit-font-smoothing: antialiased;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
    position: relative;
}
body:active:after {
    display: none;
}
body:after {
    background: linear-gradient(to bottom, rgba(200,225,255,0.6) 1px, transparent 1px);
    background-size: 17px 25px;
    bottom: 0;
    margin-top: 0px;
    content: '';
    display: block;
    height: auto;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: -1px;
    width: auto;
    z-index: 9999;
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
