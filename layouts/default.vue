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
  --white: rgb(210, 210, 210);
  --blue: rgb(90, 190, 255);
  --purple: rgb(220, 100, 220);
  --linkBlue: rgb(18, 122, 200);
  --linkVisited: rgba(70, 70, 70, 0.5);
  --rhythm: 24px;
}
html {
  color: var(--black);
  font: inherit;
  font-size: 100%;
  line-height: var(--rhythm);
  -webkit-font-smoothing: antialiased;
}
body {
  font-family: Arial, Helvetica, "Noto Sans JP", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
*:focus {
  outline: 2px solid var(--blue);
}
a {
  color: var(--linkBlue);
  text-decoration: none;
  background-image: linear-gradient(var(--linkVisited), var(--linkVisited));
  background-repeat: no-repeat;
  background-position: left 0 bottom calc((24px - 1.5em)/ 2 - 1px);
  background-size: 100% 2px;
}
a:visited {
  color: var(--linkVisited);
}
@media (prefers-color-scheme: dark) {
  html {
    background-color: var(--black);
    color: var(--white);
  }
  a {
    color: var(--blue);
    background-image: linear-gradient(var(--blue), var(--blue));
    text-shadow: 1px 1px 0 var(--black), 0 1px 0 var(--black);
  }
  a:visited {
    color: var(--purple);
  }
}
</style>
