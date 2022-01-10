<template>
  <nav :aria-label="$t('multilingual')">
    <global-heading-component
      id="local-switching"
      :heading-level="2"
      :heading-text="$t('multilingual')"
    />
    <ul>
      <li v-for="locale in $i18n.locales" :key="locale.code">
        <nuxt-link :lang="locale.code" :to="switchLocalePath(locale.code)">{{
          locale.name
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
