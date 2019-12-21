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
html[lang="ja"] body {
  font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
}
html[lang="ja"] main,
html[lang="ja"] header,
html[lang="ja"] nav,
html[lang="ja"] footer {
  max-width: 45rem;
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
code.hljs {
  padding: var(--rhythm);
}
blockquote {
  border-left: 6px solid var(--blue);
  margin: var(--rhythm) 0 var(--rhythm) var(--rhythm);
  padding: 0 var(--rhythm);
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
