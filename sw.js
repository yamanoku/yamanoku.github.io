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
    "url": "/_nuxt/ebb2e59112d68ffe8756.js",
    "revision": "5f132a9a02a9766c860250828f0c338a"
  },
  {
    "url": "/_nuxt/f8d80bf0ec74556b1a05.js",
    "revision": "09582959a2af83a6d06ef581cbc73504"
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
