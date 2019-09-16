importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2c80b796e73e0cc4131f.js",
    "revision": "a1a067a7fb1e388a587963ddff0c9230"
  },
  {
    "url": "/_nuxt/5c3025e696e58d020a2f.js",
    "revision": "9f8992c8682484e38b6799fc3702a3be"
  },
  {
    "url": "/_nuxt/81180635ba259849f892.js",
    "revision": "d71baeab349ca19422a9b8d75084f300"
  },
  {
    "url": "/_nuxt/94ba08f49a45ae1ff50e.js",
    "revision": "225c6f9c1edbd0ea84e93d055f299e3a"
  },
  {
    "url": "/_nuxt/bc79e6e58f777ffe993a.js",
    "revision": "670b07820254425236a9827dc18df79a"
  },
  {
    "url": "/_nuxt/ebb2be4a0edb8e7b84d9.js",
    "revision": "24a027e46db122d1a14c94ade44ac312"
  },
  {
    "url": "/_nuxt/f7cab3329a6623fe0010.js",
    "revision": "74bbf55c010310c5e7b75a65c61c88bf"
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
