importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/15b8c76240a7582b9f5e.js",
    "revision": "0fe305ea4c406524e08cb61af8290d72"
  },
  {
    "url": "/_nuxt/25e115a0415245ecb504.js",
    "revision": "70deb7387d6cbf95829a500440c24ddb"
  },
  {
    "url": "/_nuxt/3480bd8191c67e585392.js",
    "revision": "a5ea5644d792bc583d1b5c5366bef28e"
  },
  {
    "url": "/_nuxt/388ffbc5651a422d1d94.js",
    "revision": "7b79844acc3bb39ea99d4137684225f2"
  },
  {
    "url": "/_nuxt/491a2a8900d04cbe34b7.js",
    "revision": "41d20b6f771e7742532e21e85b72f672"
  },
  {
    "url": "/_nuxt/7312dd98171be262ee4e.js",
    "revision": "27c3aa50c393659408859366f4e7232f"
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
