# Explaining on the implementation of a portfolio site

## Technology stack
- Nuxt.js
  - @nuxtjs/pwa
  - nuxt-i18n
  - Vuex（Store）
- dayjs
- eslint
  - eslint-plugin-prettier
  - eslint-plugin-vue
  - eslint-plugin-vuejs-accessibility
- highlight.js
- lerna
- markuplint
- modern-normalize

See [package.json](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/package.json) for more details.

## Markup
Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).

It also implements content completion using WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).

<details>
<summary>Details</summary>

```html
<section id="basic" aria-labelledby="basic-heading">
  <h2 id="basic-heading">{{ $t("heading.basic") }}</h2>
</section>
```
Assist users as they move from article to article by tying aria-labelledby to article elements.

- [5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance)
</details>

## Component oriented design

You need to format the API you get for display, but managing it as a single component simplifies source code, allows multiple uses, and simplifies information design.

<details>
<summary>Details</summary>

For example, the slide list uses the following components to render:

```html
<ul>
  <li v-for="list in listItem" :key="list.index">
    <template v-if="list.datetime">
      <span class="time">{{ dateStirngReplace(list.datetime) }}</span>
      -
    </template>
    <template v-else-if="list.created_at">
      <span class="time">{{ dateStirngReplace(list.created_at) }}</span>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{ list.title }}
      <open-new-icon />
    </a>
  </li>
</ul>
```

[SlideList.vue](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/SlideList.vue)
</details>

## PWA (Progressive Web Application)
When browsing in Google Chrome, you can use desktop PWA from your PC or PWA from your mobile device.

You can launch it as a native app without going through a browser, use the cache to get a fast page experience, or download it once and view it offline.

- [Your First Progressive Web App | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

## Internationalization
Since we are developing on Nuxt.js, we have introduced a tool called nuxt-18n. In addition to internationalization, rendering can also be done for specific languages.

<details>
<summary>Details</summary>
The following is a conditional expression that is displayed when it is not in Japanese.

```html
<template v-if="this.$i18n.locale !== 'ja'">
  <em>{{ $t("onlyJPText") }}</em>
</template>
```
</details>
