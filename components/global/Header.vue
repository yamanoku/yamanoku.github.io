<template>
  <header>
    <div class="header-logo-link-block">
      <header-logo-icon />
    </div>
    <nav :aria-label="$t('multilingual')">
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
.header-logo-link-block {
  display: inline-block;
  margin: var(--y-rhythm-2) 0;
}
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: var(--y-rhythm-2);
}
</style>
