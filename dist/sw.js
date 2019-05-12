importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f9ae716ab4cd18e75fa.js",
    "revision": "054d83302f437c17ef0aace99311eb3e"
  },
  {
    "url": "/_nuxt/1666b10375f8a06ce33d.js",
    "revision": "d40b88dd9ddfe072fde11a0ca2ae1fc8"
  },
  {
    "url": "/_nuxt/1fb030dbdf6c6b56439e.js",
    "revision": "2939ebbf327c6cb31f9ac4c3e8e52a6d"
  },
  {
    "url": "/_nuxt/35c65909c80670bd473d.js",
    "revision": "bd2ce82e94f35f2e2eb4953cc4d4d9f1"
  },
  {
    "url": "/_nuxt/778f859927089f7f935d.js",
    "revision": "76c9bb9ad4455874b2407a39838f16af"
  },
  {
    "url": "/_nuxt/8e10279d146f4db9a08f.js",
    "revision": "21b0208653e66d59df3a192125163765"
  }
], {
  "cacheId": "projectfkids",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
