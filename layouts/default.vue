<template>
  <div>
    <global-header />
    <global-navigation />
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
ul:not([class]) li .time {
  font-variant-numeric: tabular-nums;
}
ul:not([class]) li svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
svg path {
  fill: var(--y-black-base);
}
@media (prefers-color-scheme: dark) {
  svg path {
    fill: var(--y-white-base);
  }
}
svg .product-2,
svg .edit-2,
svg .image-1,
svg .shopping-2,
svg .open_new-1 {
  fill: none;
}
address svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
address svg path {
  fill: var(--y-black-base);
}
@media (prefers-color-scheme: dark) {
  address svg path {
    fill: var(--y-white-base);
  }
}
address svg .mail-2 {
  fill: none;
}
code.hljs {
  padding: var(--y-rhythm-3);
}
img {
  height: auto;
}
</style>
