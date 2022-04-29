<template>
  <header>
    <div class="logo-link-block">
      <header-logo-icon />
    </div>
    <nav class="local-nav-list" :aria-label="$t('multilingual')">
      <nuxt-link
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link
      >
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
  display: inline-block;
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
