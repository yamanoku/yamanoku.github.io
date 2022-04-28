# Explaining a portfolio site (development & design)

## Explaining on the implementation of a portfolio site

### Technology stack
- Nuxt.js
  - nuxt-i18n
- dayjs
- eslint
  - eslint-plugin-prettier
  - eslint-plugin-vue
  - eslint-plugin-vuejs-accessibility
- markuplint
- modern-normalize

See [package.json](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/package.json) for more details.

### Markup
Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).

It also implements content completion using WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).

<details>
<summary>Details</summary>

```html
<section id="basic" aria-labelledby="basic-heading">
  <global-heading-component
    id="basic-heading"
    :heading-level="2"
    :heading-text="$t('heading.basic')"
  />
</section>
```
Assist users as they move from article to article by tying aria-labelledby to article elements.

- [5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance)
</details>

### Component oriented design

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
    <i18n v-if="list.isI18n" :path="list.title">
      <global-link-component :link-object="list" />
    </i18n>
    <template v-else-if="list.url">
      <global-link-component :link-object="list" />
    </template>
    <template v-else>
      {{ list.title }}
    </template>
  </li>
</ul>
```

[ListComponent.vue](https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/ListComponent.vue)
</details>

### PWA (Progressive Web Application)
When browsing in Google Chrome, you can use desktop PWA from your PC or PWA from your mobile device.

You can launch it as a native app without going through a browser, use the cache to get a fast page experience, or download it once and view it offline.

- [Your First Progressive Web App | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

### Internationalization
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

## Explaining on the design of a portfolio site
Inclusive design designed for easy viewing by all users.

### Don't overdesign.
Too much decoration can prevent you from getting the information you want. It is designed with the default style of the browser, that is, the standard image in mind.

It's also the semantic markup of the design makes it possible to arrive at the information without feeling out of place, even with the default style in browser.

- [Motherfucking Website](https://motherfuckingwebsite.com/)

### Font size
The basic setting is 16 px, and the size ratio can be maintained even if the page is enlarged by rem.

### Color contrast
All colors are set to have a contrast ratio of at least **4.5:1** with the background, but they are not pure black and white, but instead are balanced with fewer shades of gray.

<details>
<summary>Details</summary>

It is specified using the following custom properties (CSS Variables) for common use:

| design_token | value |
| ------------ | ----- |
| `var(--y-black-base)` | rgb(21, 32, 43) |
| `var(--y-white-base)` | rgb(255, 255, 255) |
| `var(--y-white-low)` | rgb(210, 210, 210) |
| `var(--y-white-medium)` | rgba(163, 163, 163) |
| `var(--y-blue-low)` | rgb(90, 190, 255) |
| `var(--y-blue-medium)` | rgb(18, 122, 200) |
| `var(--y-purple-medium)` | rgb(220, 100, 220) |

It also supports dark mode (Gentle dark tones of the eyes), depending on the OS settings.

- [yama-normalize - npm](https://www.npmjs.com/package/yama-normalize)
</details>

### About the greatest amount of content
The maximum width of the main content is set to 80ch. ch is called a chain and is a variable unit depending on the size of the character.

The advantage of this setting is that it can support users with dyslexia who cannot read long sentences, and it is less likely that some text will become unreadable as the character size increases.

### Vertical rhythm
We use vertical rhythm that emphasizes consistency throughout the page. The margins and margins are set relative to the line spacing of 24px.

Cognitively impaired users can read text more easily if the words are evenly spaced.
