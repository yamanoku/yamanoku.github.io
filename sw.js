importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e330bf3c7500dc1a572.js",
    "revision": "8daddb511f7fccc26f35bc6d784933d9"
  },
  {
    "url": "/_nuxt/2c80b796e73e0cc4131f.js",
    "revision": "a1a067a7fb1e388a587963ddff0c9230"
  },
  {
    "url": "/_nuxt/5f42f3ed905a9dbb08ab.js",
    "revision": "b858ac68fa6dbc7a8172c94284bcbc67"
  },
  {
    "url": "/_nuxt/744201d82f078f8e3294.js",
    "revision": "08090838535b420c5156b1e3a6cc696c"
  },
  {
    "url": "/_nuxt/b6aacefbb7fb3941f77d.js",
    "revision": "99418c6937184d790038d13b35af3a4e"
  },
  {
    "url": "/_nuxt/c268520c17b2178ea7eb.js",
    "revision": "133e1e99e231ace8599cf969351307c4"
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
