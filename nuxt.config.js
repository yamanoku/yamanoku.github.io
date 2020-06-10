import i18n from "./nuxt-i18n"

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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["modern-normalize", "yama-normalize"],
  buildModules: ["@nuxt/components"],
  components: [
    "~/components/",
    {
      path: "~/components/about-articles/",
      prefix: "about-articles"
    },
    {
      path: "~/components/common/",
      prefix: "common"
    },
    {
      path: "~/components/lists/",
      prefix: "lists"
    },
    {
      path: "~/components/products/",
      prefix: "products"
    },
    {
      path: "~/components/sections/",
      prefix: "sections"
    },
    {
      path: "~/components/vuejs-accessibility-sections/",
      prefix: "vuejs-accessibility-sections"
    }
  ],
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
    ["nuxt-i18n", i18n],
    "@nuxtjs/axios",
    "@nuxt/content"
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
