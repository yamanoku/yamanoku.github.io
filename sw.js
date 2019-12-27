importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/15c2590cf18a550c880a.js",
    "revision": "5712221871b08ba2afdfbd0a41f7e615"
  },
  {
    "url": "/_nuxt/1e5263701cf21122b8b9.js",
    "revision": "fb9fd12665148ed2864f6aad5206881e"
  },
  {
    "url": "/_nuxt/7252aafa3263e6ac63d4.js",
    "revision": "b38f4c041444554ccc6612d05a928635"
  },
  {
    "url": "/_nuxt/a91515e5d9f8cd52865b.js",
    "revision": "50caf4643de75bcc30681de266bb25be"
  },
  {
    "url": "/_nuxt/bb4ddd9ac4de02921695.js",
    "revision": "2feb532d4ed1119a31c20dbe9e4ffc05"
  },
  {
    "url": "/_nuxt/d5b3e872e71ed00359f4.js",
    "revision": "740957d63a5f8122b9e6a2d2186c5104"
  },
  {
    "url": "/_nuxt/dab9693e7b304c4940cb.js",
    "revision": "cf388e23c7b509eab404b23f0a9142be"
  },
  {
    "url": "/_nuxt/e8fe7227fbe77f97526e.js",
    "revision": "cc5e62adb20294f8ad4df1b1a618683c"
  }
], {
  "cacheId": "yamanoku.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
