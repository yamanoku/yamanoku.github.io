<template>
  <nav>
    <h3>{{ $t("multilingual")}}</h3>
    <ul role="list">
      <li role="listitem" v-for="locale in $i18n.locales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
