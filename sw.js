importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f12eed7653f1cd081b6.js",
    "revision": "b2fc8bdbdad0c61bd1fa79caa9d63471"
  },
  {
    "url": "/_nuxt/491a2a8900d04cbe34b7.js",
    "revision": "41d20b6f771e7742532e21e85b72f672"
  },
  {
    "url": "/_nuxt/4b4ce8df20bf7c95d231.js",
    "revision": "c7761e28f48653586a9975c22c3103bb"
  },
  {
    "url": "/_nuxt/6415b23a8f6ae3f03b20.js",
    "revision": "a89476ea3ae1fe34074e4cca89ace770"
  },
  {
    "url": "/_nuxt/80d75c2cc25ce721ac3c.js",
    "revision": "bbd781918e356e9eac5f541587e9c67e"
  },
  {
    "url": "/_nuxt/aecd8e5466097ecad17c.js",
    "revision": "77dfed4acd0d8d2f5207351aa594d9df"
  },
  {
    "url": "/_nuxt/d28aa2a10473092ebba6.js",
    "revision": "d2da7d28eebbcfcbc9bc7b1f7b80d4b7"
  },
  {
    "url": "/_nuxt/da3dfa50e67bf9225233.js",
    "revision": "4b276e3aa473d9daf28eeb3373d8005b"
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
