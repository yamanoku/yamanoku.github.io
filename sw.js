importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/68923d9a51bcdba46ded.js",
    "revision": "f6388735ed4b358ffd44f29210a75c03"
  },
  {
    "url": "/_nuxt/80d75c2cc25ce721ac3c.js",
    "revision": "bbd781918e356e9eac5f541587e9c67e"
  },
  {
    "url": "/_nuxt/87fc5b7c29185149d06e.js",
    "revision": "6282faa9b8e5e35d0fe8ee882a8b4619"
  },
  {
    "url": "/_nuxt/9e483913e16aa09abd89.js",
    "revision": "13d5b9ceb912f54da8de539a255dd7be"
  },
  {
    "url": "/_nuxt/bc687ea00b18a7dc36a0.js",
    "revision": "289e62b0b88c13ccd6c801a4c124a4c3"
  },
  {
    "url": "/_nuxt/da3dfa50e67bf9225233.js",
    "revision": "4b276e3aa473d9daf28eeb3373d8005b"
  },
  {
    "url": "/_nuxt/de9c2398c7b166c86371.js",
    "revision": "1e95efdcafeb8c96dc4d4b6408814d7e"
  },
  {
    "url": "/_nuxt/fd8ee5649b43cdc7d9a6.js",
    "revision": "f757dffa5e0b69a2022b913d1b1c711a"
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
