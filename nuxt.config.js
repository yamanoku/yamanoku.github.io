import vueI18n from "./vueI18n"

const baseName = process.env.BASE_NAME || "yamanoku.net"
const baseDesc = process.env.BASE_DISC || "Okuto Oyama Portfolio Site"
const baseUrl = process.env.BASE_URL || "https://yamanaoku.net"
const baseOgp = process.env.BASE_OGP || "https://yamanoku.net/ogp/ogp@2x.png"

module.exports = {
  mode: "universal",
  env: {
    baseName,
    baseDesc,
    baseUrl,
    baseOgp
  },
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    title: baseName,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: baseDesc
      },
      {
        hid: "og:image",
        name: "og:image",
        content: baseOgp
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@yamanoku" },
      { name: "og:title", content: baseName },
      { name: "og:description", content: baseDesc },
      { name: "og:image", content: baseOgp }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;display=optional"
      }
    ]
  },
  css: ["modern-normalize", "yama-normalize"],
  build: {
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    injectScripts: false
  },
  modules: [
    "@nuxtjs/pwa",
    [
      "nuxt-i18n",
      {
        seo: false,
        baseUrl: "https://yamanoku.net",
        locales: [
          {
            code: "ja",
            iso: "ja",
            name: "日本語ページ"
          },
          {
            code: "en",
            iso: "en-US",
            name: "English Page"
          },
          {
            code: "fr",
            iso: "fre",
            name: "Page française"
          }
        ],
        defaultLocale: "ja",
        vueI18n
      }
    ],
    "@nuxtjs/axios"
  ],
  plugins: [
    "~plugins/icons.js",
    "~plugins/vue-highlight.js",
    "~plugins/storeGithub.js",
    "~plugins/storeSlide.js",
    "~plugins/storeDay.js"
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: baseName,
    short_name: "yamanoku",
    title: baseName,
    "og:title": baseName,
    description: baseDesc,
    "og:description": baseDesc,
    lang: "en",
    theme_color: "#36465d",
    background_color: "#36465d"
  }
}
