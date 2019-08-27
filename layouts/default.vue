<template>
  <div>
    <header-component />
    <nuxt />
    <local-switch-component />
  </div>
</template>

<script>
import HeaderComponent from "~/components/Header.vue";
import LocalSwitchComponent from "~/components/LocalSwitch.vue";
export default {
  head() {
    return this.$nuxtI18nSeo();
  },
  components: {
    HeaderComponent,
    LocalSwitchComponent
  }
};
</script>


<style>
@font-face {
  font-family: minmoji;
  src: url("https://minmoji.ucda.jp/fontseot/https%3A__yamanoku.net");
  src: local("minmoji"),
    url("https://minmoji.ucda.jp/fontswoff/https%3A__yamanoku.net")
      format("woff"),
    url("https://minmoji.ucda.jp/fonts/https%3A__yamanoku.net")
      format("opentype");
  font-display: swap;
}
:root {
  --black: rgb(21, 32, 43);
  --white: rgb(210, 210, 210);
  --gray: rgba(70, 70, 70, 0.5);
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
  font-family: Arial, Helvetica, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
}
html[lang="ja"] body {
  font-family: minmoji, Arial, Helvetica, sans-serif;
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
    text-shadow: 1px 1px 0 var(--black), 0 1px 0 var(--black);
  }
  a:visited {
    color: var(--purple);
  }
}
main {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--rhythm);
}
h2 {
  margin: var(--rhythm) 0;
  font-size: 2rem;
  font-feature-settings: "palt";
  line-height: calc(var(--rhythm) * 2);
  letter-spacing: 0.025em;
}
h2 small {
  font-size: 1.4rem;
  display: inline-block;
  line-height: 1;
  color: rgba(0, 0, 0, 0.6);
}
@media (prefers-color-scheme: dark) {
  h2 small {
    color: rgba(255, 255, 255, 0.6);
  }
}
h3 {
  margin: var(--rhythm) 0;
  font-size: 1.4rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
h4 {
  margin: var(--rhythm) 0;
  font-size: 1.2rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
h5 {
  margin: var(--rhythm) 0;
  font-size: 1.2rem;
  font-feature-settings: "palt";
  font-weight: 400;
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
section {
  display: block;
  margin: calc(var(--rhythm) * 2) 0;
}
article {
  position: relative;
  padding: 0 0 var(--rhythm);
}
article::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--gray);
  position: absolute;
  bottom: 0;
  left: 0;
}
article p {
  margin: var(--rhythm) 0;
  font-size: 1rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
}
.anchor {
  position: absolute;
  left: -24px;
}
@media screen and (max-width: 768px) {
  .anchor {
    display: none;
  }
}
.anchor path {
  fill: rgba(0, 0, 0, 0.6);
}
@media (prefers-color-scheme: dark) {
  .anchor path {
    fill: var(--blue);
  }
}
ul:not([class]) {
  margin: var(--rhythm) 0;
  line-height: 1;
  padding-left: var(--rhythm);
  list-style-type: none;
  position: relative;
}
ul:not([class]) ul {
  margin: 0;
}
ul:not([class]) li {
  line-height: var(--rhythm);
  font-size: 1rem;
}
ul:not([class]) li::before {
  background-color: var(--black);
  border-radius: 50%;
  color: #fff;
  content: "";
  width: 6px;
  height: 6px;
  margin: 9px 0 0;
  position: absolute;
  left: 0;
}
@media (prefers-color-scheme: dark) {
  ul:not([class]) li::before {
    background-color: var(--white);
  }
}
ul:not([class]) li svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
ul:not([class]) li svg path {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  ul:not([class]) li svg path {
    fill: var(--white);
  }
}
ul:not([class]) li svg .npm-1 {
  fill: #c12127;
}
ul:not([class]) li svg .npm-2 {
  fill: #fff;
}
ul:not([class]) li svg .product-2,
ul:not([class]) li svg .edit-2,
ul:not([class]) li svg .image-1,
ul:not([class]) li svg .shopping-2 {
  fill: none;
}
nav {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--rhythm);
}
address {
  margin: var(--rhythm) 0;
}
pre {
  margin: var(--rhythm) 0;
}
code.hljs {
  padding: var(--rhythm);
}
a[href="https://minmoji.ucda.jp/"] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
