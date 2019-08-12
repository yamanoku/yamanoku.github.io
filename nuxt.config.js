import vueI18n from "./vueI18n";

module.exports = {
  head: {
    title: "ʏᴀᴍᴀɴᴏᴋᴜ.ɴᴇᴛ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Okuto Oyama Portfolio Site."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://yamanoku.net/iam.jpg"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@yamanoku" },
      { name: "twitter:title", content: "ʏᴀᴍᴀɴᴏᴋᴜ" },
      { name: "twitter:description", content: "Okuto Oyama Portfolio Site" },
      { name: "twitter:image", content: "https://yamanoku.net/iam.jpg" },
      { name: "twitter:image:alt", content: "Portrait for Okuto Oyama" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto&display=swap" }
    ]
  },
  css: ["modern-normalize"],
  build: {
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
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
    ]
  ],
  plugins: [
    '~plugins/icons.js'
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: "ʏᴀᴍᴀɴᴏᴋᴜ",
    short_name: "ʏᴀᴍᴀɴᴏᴋᴜ",
    title: "ʏᴀᴍᴀɴᴏᴋᴜ",
    "og:title": "ʏᴀᴍᴀɴᴏᴋᴜ",
    description: "Okuto Oyama Portfolio Site.",
    "og:description": "Okuto Oyama Portfolio Site.",
    lang: "en",
    theme_color: "#36465d",
    background_color: "#36465d"
  }
};
