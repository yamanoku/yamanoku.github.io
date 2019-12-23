importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/161a8c7ae024fb2b8957.js",
    "revision": "75a43e7e56d5c84172da3d7da0b98e27"
  },
  {
    "url": "/_nuxt/2bb7e1d45675290615ce.js",
    "revision": "1d0db937d82a6efc2da7b48426b4cb9c"
  },
  {
    "url": "/_nuxt/34bccc9d336cfbdea613.js",
    "revision": "67a9581707dac1edf1a2a9dbbcd0e489"
  },
  {
    "url": "/_nuxt/4fb0492be9f630fbfd76.js",
    "revision": "c1f0771529ffb6bfc66e731e3c28820c"
  },
  {
    "url": "/_nuxt/5e63b353c4c63f8679e8.js",
    "revision": "3434f3b7dfbc901786412c2f1dd47d4e"
  },
  {
    "url": "/_nuxt/6bdc8c1d8fa49bbaf5f3.js",
    "revision": "111b0717a465a188e02befabfe8b241e"
  },
  {
    "url": "/_nuxt/8dcc8a242cc6dd9f350b.js",
    "revision": "12750dce3e1ee00a30274dbaaed21454"
  },
  {
    "url": "/_nuxt/f61625b94b44d59ea7a3.js",
    "revision": "073f027a3bdac6d4e2317fbf0fedee4b"
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
