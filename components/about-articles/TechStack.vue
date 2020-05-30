<template>
  <article id="about:tech-stack" aria-labelledby="about:tech-stack_heading">
    <h3 id="about:tech-stack_heading">
      {{ $t("heading.techStack") }}
    </h3>
    <ul role="list" lang="en">
      <li role="listitem">
        Nuxt.js
        <ul role="list">
          <li role="listitem">@nuxtjs/axios</li>
          <li role="listitem">@nuxtjs/dotenv</li>
          <li role="listitem">@nuxtjs/pwa</li>
          <li role="listitem">nuxt-i18n</li>
        </ul>
      </li>
      <li role="listitem">Vuex （Store）</li>
      <li role="listitem">
        eslint
        <ul role="list">
          <li role="listitem">eslint-plugin-prettier</li>
          <li role="listitem">eslint-plugin-vue</li>
          <li role="listitem">eslint-plugin-vuejs-accessibility</li>
        </ul>
      </li>
      <li role="listitem">modern-normalize</li>
      <li role="listitem">Google Fonts</li>
    </ul>
  </article>
</template>
