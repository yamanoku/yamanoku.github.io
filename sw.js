importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1652cca920486b9abbe5.js",
    "revision": "380022d13a73de73d7aa8ede9d09368a"
  },
  {
    "url": "/_nuxt/166acf31df2d9fc5bfdd.js",
    "revision": "a0c57c29eebe6b7f168fbc2f43556234"
  },
  {
    "url": "/_nuxt/2c80b796e73e0cc4131f.js",
    "revision": "a1a067a7fb1e388a587963ddff0c9230"
  },
  {
    "url": "/_nuxt/94ba08f49a45ae1ff50e.js",
    "revision": "225c6f9c1edbd0ea84e93d055f299e3a"
  },
  {
    "url": "/_nuxt/c0d42869483810500b8a.js",
    "revision": "12f840d21514ad075a599bea1d373b52"
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
