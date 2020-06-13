<template>
  <nav aria-label="global-navigation">
    <ul class="global" role="list">
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'index' })">{{
          $t("home.title")
        }}</nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'about' })">{{
          $t("aboutPage.title")
        }}</nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'archive' })">{{
          $t("archivePage.title")
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  max-width: 80ch;
  margin: auto;
  padding: 0 calc(var(--rhythm) * 2);
}
nav ul.global {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: calc(var(--rhythm) / 2 * -1);
  padding: 0;
}
nav ul.global li {
  margin: calc(var(--rhythm) / 2);
}
nav ul.global li a.nuxt-link-exact-active {
  text-decoration: none;
  color: var(--linkBlue);
}
@media (prefers-color-scheme: dark) {
  nav ul.global li a.nuxt-link-exact-active {
    color: var(--blue);
  }
}
</style>
