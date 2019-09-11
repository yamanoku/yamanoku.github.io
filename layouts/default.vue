<template>
  <div>
    <no-ssr>
      <vue-skip-to to="#main" text="Skip to Main content" />
      <vue-skip-to to="#local-switching" text="Skip to Local Switching" />
    </no-ssr>
    <header-component />
    <global-navigation />
    <nuxt />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "~/components/common/Header.vue";
import FooterComponent from "~/components/common/Footer.vue";
import GlobalNavigation from "~/components/common/GlobalNavigation.vue";
export default {
  head() {
    return this.$nuxtI18nSeo();
  },
  components: {
    HeaderComponent,
    FooterComponent,
    GlobalNavigation,
  }
};
</script>


<style>
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
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
body {
  font-family: Arial, Helvetica, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
}
html[lang="ja"] body {
  font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
}
body.is-rhythm {
  position: relative;
}
body.is-rhythm:active::after {
  display: none;
}
body.is-rhythm::after {
  background: linear-gradient(
    to bottom,
    rgba(200, 225, 255, 0.6) 1px,
    transparent 1px
  );
  background-size: 17px 24px;
  bottom: 0;
  margin-top: 0px;
  content: "";
  display: block;
  height: auto;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  z-index: 9999;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 2px solid var(--blue);
  outline-offset: 2px;
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
h1 {
  margin: var(--rhythm) 0;
  font-size: 2rem;
  line-height: calc(var(--rhythm) * 2);
}
h2 {
  margin: var(--rhythm) 0;
  font-size: 1.4rem;
  line-height: var(--rhythm);
  position: relative;
}
h3 {
  margin: var(--rhythm) 0;
  font-size: 1.2rem;
  line-height: var(--rhythm);
  position: relative;
}
h4 {
  margin: calc(var(--rhythm) * 2) 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: var(--rhythm);
  position: relative;
}
section {
  display: block;
  margin: calc(var(--rhythm) * 2) 0;
}
article {
  position: relative;
  padding: var(--rhythm) 0;
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
@media (prefers-color-scheme: dark) {
  article::before {
    background-color: var(--white);
  }
}
p {
  margin: var(--rhythm) 0;
  font-size: 1rem;
  line-height: var(--rhythm);
}
img {
  max-width: 100%;
  vertical-align: bottom;
}
figure {
  margin: var(--rhythm) 0;
}
figcaption {
  font-size: .8em;
}
.anchor {
  position: absolute;
  left: 0;
  display: none;
}
@media screen and (min-width: 769px) {
  .anchor-heading {
    margin-left: calc(-1 * var(--rhythm));
    margin-right: calc(-1 * var(--rhythm));
    padding-left: var(--rhythm);
    padding-right: var(--rhythm);
  }
  .anchor-heading:hover .anchor {
    display: block;
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
ul:not([class]) li svg .shopping-2,
ul:not([class]) li svg .open_new-1 {
  fill: none;
}
address {
  margin: var(--rhythm) 0;
}
address svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
address svg path {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  address svg path {
    fill: var(--white);
  }
}
address svg .mail-2 {
  fill: none;
}
pre {
  margin: var(--rhythm) 0;
}
code.hljs {
  padding: var(--rhythm);
}
a.vue-skip-to {
  color: #fff;
  text-decoration: none;
}
a.vue-skip-to:focus {
  background-color: var(--black);
}
@media (prefers-color-scheme: dark) {
  a.vue-skip-to {
    text-shadow: none;
  }
  a.vue-skip-to:focus {
    background-color: var(--linkBlue);
  }
}
</style>
