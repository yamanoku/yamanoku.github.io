<template>
  <header>
    <nuxt-link class="logo-link-block" :to="localePath({ name: 'index' })">
      <svg
        width="246"
        height="242"
        viewBox="0 0 246 242"
        role="img"
        aria-label="yamanoku.net"
      >
        <title>{{ $t("backHome") }}</title>
        <path
          class="cls-1"
          d="M64,67v54l82,82-46,46v60h56L310,155V96H230l-21,20L160,67H64ZM176,203l-45,46h25L293,113H230l-39,39-31-31H94Z"
          transform="translate(-64 -67)"
        />
      </svg>
    </nuxt-link>
    <nav class="local-nav-list" :aria-label="$t('multilingual')">
      <template v-for="locale in $i18n.locales">
        <nuxt-link :lang="locale.code" :to="switchLocalePath(locale.code)">{{
          locale.name
        }}</nuxt-link>
      </template>
    </nav>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader"
};
</script>

<style scoped>
header {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--y-rhythm-2);
}
.logo-link-block {
  display: block;
  margin: var(--y-rhythm-2) 0;
  width: 48px;
  height: 48px;
}
svg {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.cls-1 {
  fill: rgb(54, 70, 93);
  fill-rule: evenodd;
}
@media (prefers-color-scheme: dark) {
  .cls-1 {
    fill: var(--y-white-base);
  }
}
.local-nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: var(--y-rhythm-2);
}
</style>
