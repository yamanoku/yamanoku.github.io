<template>
  <section id="error:sitemap" aria-describedby="error:sitemap_heading">
    <h2 id="error:sitemap_heading">{{ $t("error.sitemap.title") }}</h2>
    <ul role="list">
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
    </ul>
  </section>
</template>
