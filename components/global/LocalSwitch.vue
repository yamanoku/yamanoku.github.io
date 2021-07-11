<template>
  <nav :aria-label="$t('multilingual')">
    <h2 id="local-switching">{{ $t("multilingual") }}</h2>
    <ul>
      <li v-for="locale in $i18n.locales" :key="locale.code">
        <nuxt-link :lang="locale.code" :to="switchLocalePath(locale.code)">{{
          locale.name
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
