export default {
  baseUrl: "https://yamanoku.net",
  defaultLocale: "ja",
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
      file: "ja.json",
      name: "日本語ページ"
    },
    {
      code: "en",
      iso: "en-US",
      file: "en.json",
      name: "English Page"
    }
  ]
}
