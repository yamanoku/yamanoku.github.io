<template>
  <nav aria-label="global-navigation">
    <ul class="global">
      <li>
        <nuxt-link :to="localePath({ name: 'index' })">{{
          $t("home.title")
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "GlobalNavigation"
};
</script>

<style scoped>
nav {
  max-width: 80ch;
  margin: var(--y-rhythm-3) auto;
  padding: 0 var(--y-rhythm-2);
}
nav ul.global {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: calc(var(--y-rhythm-base) / 2 * -1);
  padding: 0;
}
nav ul.global li {
  margin: calc(var(--y-rhythm-base) / 2);
}
nav ul.global li a.nuxt-link-exact-active {
  text-decoration: none;
  color: var(--y-link-color);
}
@media (prefers-color-scheme: dark) {
  nav ul.global li a.nuxt-link-exact-active {
    color: var(--y-blue-low);
  }
}
</style>
