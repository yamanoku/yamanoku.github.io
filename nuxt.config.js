module.exports = {
  head: {
    title: 'ʏᴀᴍᴀɴᴏᴋᴜ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Okuto Oyama Portfolio Site.' },
      { hid: 'og:image', name: 'og:image', content: 'https://yamanoku.net/iam.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize'
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios',
    ]
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  workbox: {
    dev: true,
  },
  manifest: {
    name: 'ʏᴀᴍᴀɴᴏᴋᴜ',
    short_name: 'ʏᴀᴍᴀɴᴏᴋᴜ',
    title: 'ʏᴀᴍᴀɴᴏᴋᴜ',
    'og:title': 'ʏᴀᴍᴀɴᴏᴋᴜ',
    description: 'Okuto Oyama Portfolio Site.',
    'og:description': 'Okuto Oyama Portfolio Site.',
    lang: 'en',
    theme_color: '#36465d',
    background_color: '#36465d'
  },
}
