<template>
  <header>
    <nuxt-link class="logo-link-block" :to="localePath({ name: 'index' })">
      <header-logo-icon />
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
}
.local-nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: var(--y-rhythm-2);
}
</style>
