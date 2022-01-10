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

<style>
html[lang="ja"] {
  font-kerning: none;
}
html:not([lang="ja"]) body {
  hyphens: auto;
}
html[lang="ja"] body {
  line-break: loose;
}
html[lang="ja"] main,
html[lang="ja"] header,
html[lang="ja"] nav,
html[lang="ja"] footer {
  max-width: 45rem;
}
code.hljs {
  padding: var(--y-rhythm-3);
}
img {
  height: auto;
}
</style>
