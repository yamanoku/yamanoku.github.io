# Explaining a portfolio site (development & design)

## Explaining on the implementation of a portfolio site

### Technology stack
- Astro
- ESLint
  - eslint-plugin-astro
- Markuplint
- Prettier
  - prettier-plugin-astro
- modern-normalize

See [package.json](https://github.com/yamanoku/yamanoku.github.io/blob/dev/package.json) for more details.

### Markup
Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).

It also implements content completion using WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).

<details>
<summary>Details</summary>

```astro
<section id="basic" aria-labelledby="basic-heading">
  <h2 id="basic-heading">{t("heading.basic")}</h2>
</section>
```
Assist users as they move from article to article by tying aria-labelledby to article elements.

- [Accessible Name Guidance by Role - Providing Accessible Names and Descriptions | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#x5-6-accessible-name-guidance-by-role)
</details>

### Component oriented design
You need to format the API you get for display, but managing it as a single component simplifies source code, allows multiple uses, and simplifies information design.

<details>
<summary>Details</summary>

For example, the slide list uses the following components to render:

```astro
<ul>
  {
    list.map(listItem => (
      <li>
        {listItem.datetime && (
          <span class="time">{dateStirngReplace(listItem.datetime)} - </span>
        )}
        {listItem.url ? (
          <GlobalLinkComponent link={listItem} />
        ) : (
          listItem.title
        )}
      </li>
    ))
  }
</ul>
```

[GlobalListComponent.astro](https://github.com/yamanoku/yamanoku.github.io/blob/dev/src/components/global/GlobalListComponent.astro)
</details>

### Internationalization
The portfolio site is designed to be displayed in Japanese and English, with one file automatically translated for each of the supported languages.

<details>
<summary>Details</summary>

Each language to be translated is managed by directory.

```
src/i18n
├── en
│   └── dictionary.ts // English
└──ja
    └── dictionary.ts // Japanese
```

If a match is found with the supported key using `useTranslations`, the translated wording will be displayed.

```astro
---
import { useTranslations } from "../../../i18n/util";
const t = useTranslations(Astro);
---
<h2 id="contact-heading">{t("heading.contact")}</h2>
<!-- English: <h2 id="contact-heading">Contact</h2> -->
```

The rendering process is also possible, for example, when displaying only in a specific language.

The following is a conditional expression that is displayed when it is not in Japanese.

```astro
---
const lang = getLanguageFromURL(Astro.url.pathname);
---
{lang === "en" && <em>Sorry, Japanese text only</em>}
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
