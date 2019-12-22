importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2ff0f76c47b9d694d699.js",
    "revision": "e1281f0826a11107abb367464ce6bb7d"
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
    "url": "/_nuxt/9dbdaf4407eb16bf7d8b.js",
    "revision": "8ac0ea0367c182f5f5a0551e11a67a8d"
  },
  {
    "url": "/_nuxt/9e483913e16aa09abd89.js",
    "revision": "13d5b9ceb912f54da8de539a255dd7be"
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
