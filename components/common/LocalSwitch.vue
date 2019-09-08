<template>
  <nav aria-label="local-switching">
    <h3>{{ $t("multilingual")}}</h3>
    <ul role="list">
      <li role="listitem" v-for="locale in $i18n.locales" :key="locale.code">
        <nuxt-link :lang="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
