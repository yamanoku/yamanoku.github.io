<template>
  <article id="tech-stack" aria-describedby="about:tech-stack_heading">
    <h3 class="anchor-heading" id="about:tech-stack_heading">
      <a class="anchor" href="#tech-stack">
        <anchor-icon />
      </a>
      {{$t("heading.techStack")}}
    </h3>
    <ul role="list">
      <li role="listitem">
        Nuxt.js
        <ul role="list">
          <li role="listitem">@nuxtjs/pwa</li>
          <li role="listitem">@nuxtjs/google-gtag</li>
          <li role="listitem">@nuxtjs/axios</li>
          <li role="listitem">nuxt-i18n</li>
          <li role="listitem">eslint-plugin-vue</li>
          <li role="listitem">eslint-plugin-vue-a11y</li>
        </ul>
      </li>
      <li role="listitem">Vuex （Store）</li>
      <li role="listitem">modern-normalize</li>
      <li role="listitem">Google Fonts</li>
    </ul>
  </article>
</template>
