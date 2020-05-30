<template>
  <div>
    <common-header />
    <common-global-navigation />
    <nuxt />
    <common-footer />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nSeo()
  }
}
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
ul:not([class]) li time {
  font-variant-numeric: tabular-nums;
}
ul:not([class]) li svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
svg path {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  svg path {
    fill: var(--white);
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
  padding: calc(var(--rhythm) * 3);
}
blockquote {
  border-left: 6px solid var(--blue);
  margin: var(--rhythm) 0 var(--rhythm) var(--rhythm);
  padding: 0 calc(var(--rhythm) * 2);
}
</style>
