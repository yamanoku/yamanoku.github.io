importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/455f46b524c6119022da.js",
    "revision": "26e3c39dcd940dab6ca8523da29941d8"
  },
  {
    "url": "/_nuxt/682efb6c3f063b37c07a.js",
    "revision": "87b4fc1200b2f91bf93336cf714adc99"
  },
  {
    "url": "/_nuxt/713b6fb4f407ede9f68a.js",
    "revision": "c29897d7608ba10ab6da1f84d254ab2c"
  },
  {
    "url": "/_nuxt/73dcf9858c65ae43cbf4.js",
    "revision": "6c8e9d272c9fdb94b43b752679b3a54f"
  },
  {
    "url": "/_nuxt/83270b2ec9a6ea18f432.js",
    "revision": "8e0944e50051f61cc34e6ea11e9bea85"
  },
  {
    "url": "/_nuxt/e867d081fead74ea6dc0.js",
    "revision": "59223afbd7c91f326864283ba6f877de"
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
