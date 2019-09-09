<template>
  <section>
    <h2>{{ $t("error.sitemap.title") }}</h2>
    <ul role="list">
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'index'})">{{$t("home.title")}}</nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link :to="localePath({ name: 'about'})">{{$t("aboutPage.title")}}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
