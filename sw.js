importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13056364fa4b64ed39b7.js",
    "revision": "2c4001173019658c092e5dbc278be41b"
  },
  {
    "url": "/_nuxt/40b899969ef7565087c3.js",
    "revision": "318872edf28f384b915493998c37be73"
  },
  {
    "url": "/_nuxt/5eecabc443531a4afcc5.js",
    "revision": "786b0178241a3f4720b5509450559345"
  },
  {
    "url": "/_nuxt/72c2f4599355419c4e98.js",
    "revision": "051628935bdaff01a0edf8b6f0737d46"
  },
  {
    "url": "/_nuxt/bb5820215ade1ff54b7e.js",
    "revision": "8caf3e6946833121866ebbff17fec008"
  },
  {
    "url": "/_nuxt/df77e1824f0272f8aa58.js",
    "revision": "8809c9bcdec038e809b6ba61b04d06e7"
  },
  {
    "url": "/_nuxt/ebbb02e47be2d65ba166.js",
    "revision": "a10516eff5b8f5eb53713e1610ea7943"
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
