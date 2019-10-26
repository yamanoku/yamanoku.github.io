importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0858ee4f682526e64c3c.js",
    "revision": "437ba5bb3481afc0c682cec3c937f35b"
  },
  {
    "url": "/_nuxt/685ab19825d527bb2b1e.js",
    "revision": "56249044d5e8fb2340ecf271f2324159"
  },
  {
    "url": "/_nuxt/7270f928f6382eeaaf8b.js",
    "revision": "5006927f9d8975fcb93af17df4b6f514"
  },
  {
    "url": "/_nuxt/a19e05ff9a2a2cf9e373.js",
    "revision": "00e5c790c8dfb6df6dab61d67fb8fe84"
  },
  {
    "url": "/_nuxt/addb8498aa7f39628318.js",
    "revision": "a5bb502f05310b94c2e3b034830409ec"
  },
  {
    "url": "/_nuxt/dc1891a08a555a99973f.js",
    "revision": "d28b1d4cd0f30ee8e0f98dada3c79304"
  },
  {
    "url": "/_nuxt/fca906f8b58697a9537c.js",
    "revision": "676f628a8c070e93c61ab85389854bcb"
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
