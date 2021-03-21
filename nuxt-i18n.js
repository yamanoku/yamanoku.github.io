export default {
  baseUrl: "https://yamanoku.net",
  defaultLocale: "ja",
  parsePages: false,
  pages: {
    404: {
      en: false
    }
  },
  vueI18n: {
    fallbackLocale: "ja",
    formatFallbackMessages: true
  },
  lazy: true,
  langDir: "assets/locales/",
  locales: [
    {
      code: "ja",
      iso: "ja",
      file: "ja.yaml",
      name: "日本語ページ"
    },
    {
      code: "en",
      iso: "en-US",
      file: "en.yaml",
      name: "English Page"
    }
  ]
};
