importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17642972810073941e76.js",
    "revision": "8c477e159a627c2e3310d37fedbf72ed"
  },
  {
    "url": "/_nuxt/1e5263701cf21122b8b9.js",
    "revision": "fb9fd12665148ed2864f6aad5206881e"
  },
  {
    "url": "/_nuxt/a91515e5d9f8cd52865b.js",
    "revision": "50caf4643de75bcc30681de266bb25be"
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
    "url": "/_nuxt/e2f8f51fea28d6d2ca5a.js",
    "revision": "c4d5ae76700feda1ebfd612da275d327"
  },
  {
    "url": "/_nuxt/e8fe7227fbe77f97526e.js",
    "revision": "cc5e62adb20294f8ad4df1b1a618683c"
  },
  {
    "url": "/_nuxt/f32540ce63d402d6ca59.js",
    "revision": "3d6f1267e604d460a385d2fb6aa125ec"
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
