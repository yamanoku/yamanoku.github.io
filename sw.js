importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/176ef64c583ddab78eb5.js",
    "revision": "237681f7b2dbe97ec4320b8114e1b277"
  },
  {
    "url": "/_nuxt/4fcffc7db7d5dadc55fc.js",
    "revision": "683ed106fa2daf8a21c71d6d6b7a7c5f"
  },
  {
    "url": "/_nuxt/713b6fb4f407ede9f68a.js",
    "revision": "c29897d7608ba10ab6da1f84d254ab2c"
  },
  {
    "url": "/_nuxt/864096888d686d701afe.js",
    "revision": "057286f7983d825a5691b862d055f4d5"
  },
  {
    "url": "/_nuxt/d05fd58ea5630b60cd7d.js",
    "revision": "70562593973bb49393bbae822ade1eb7"
  },
  {
    "url": "/_nuxt/d4960b9cf283489bc5c1.js",
    "revision": "01bc8a9ee861ad2f9469bbbb7eb3f3ca"
  },
  {
    "url": "/_nuxt/ebb2e59112d68ffe8756.js",
    "revision": "5f132a9a02a9766c860250828f0c338a"
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
