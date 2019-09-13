<template>
  <nav aria-label="global-navigation">
    <ul class="global" role="list">
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'index'})">{{$t("home.title")}}</nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'about'})">{{$t("aboutPage.title")}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--rhythm);
}
nav ul.global {
  display: flex;
  list-style-type: none;
  margin: var(--rhythm) 0;
  padding: 0;
}
nav ul.global li {
  margin-right: 12px;
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
