/* global self caches fetch */

const debug = true
const offlineUrl = '/offline.html'

// Files to cache
const cacheName = 'fas-1656338495796'
const contentToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/img/icon.png',
  '/assets/img/icon-192x192.png',
  '/assets/img/icon-512x512.png',
  '/assets/img/logo.svg',
  '/app-ui-desktop/main.mjs',
  '/app-ui-mobile/main.mjs',
  '/shell-runtime/main.mjs',
  '/app.webmanifest'
]

const networkOnlyRequests = [
  /\/api\/.*/
]

const allowedOpaqueCaching = [
  /^https:\/\/fonts\.googleapis\.com\/.*/,
  /\.js$/,
  /\.css$/,
  /\.svg$/,
  /\.jpg$/,
  /\.jpeg$/,
  /\.png$/,
  /\.gif$/
]

// Installing Service Worker
self.addEventListener('install', event => {
  if (debug) console.log('[Service Worker] Install')

  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting()

  // Cache initial content
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName)
    if (debug) console.log('[Service Worker] Caching all: app shell and content')
    await cache.addAll(contentToCache)
  })())
})

// Fetching content using Service Worker
self.addEventListener('fetch', event => {
  if (debug) console.log(`[Service Worker] Fetch: ${event.request.method} ${event.request.url}`)

  /*
  - network only for POST, PUT, DELETE, PATCH
  - network only from /api/*
  */

  if (event.request.mode === 'navigate') {
    if (debug) console.log(`[Service Worker] Ignoring navigate request: ${event.request.method} ${event.request.url}`)
    return event.respondWith(fetch(event.request).catch(() => caches.match(offlineUrl)))
  }

  if (event.request.method !== 'GET' || networkOnlyRequests.some(re => re.test(event.request.url)) || !event.request.url.startsWith('http')) {
    if (debug) console.log(`[Service Worker] Ignoring request: ${event.request.method} ${event.request.url}`)
    return event.respondWith(fetch(event.request).catch(e => {
      if (debug) console.warn(`[Service Worker] Error in request: ${event.request.method} ${event.request.url}`, e)
    }))
  }

  event.respondWith(async function () {
    const cache = await caches.open(cacheName)

    // State-while-revalidate all requests
    const cachedResponse = await cache.match(event.request)
    if (cachedResponse && debug) console.log(`[Service Worker] Cached request: ${event.request.method} ${event.request.url}`)

    // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
    // There's probably more going on here, but I'd rather just ignore this problem. :)
    // https://bugs.chromium.org/p/chromium/issues/detail?id=823392
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return

    const networkResponsePromise = fetch(event.request).catch(e => {
      if (debug) console.warn(`[Service Worker] Error in request: ${event.request.method} ${event.request.url}`, e)
    })

    event.waitUntil(async function () {
      const networkResponse = await networkResponsePromise
      if (!networkResponse) return
      if (debug) console.log(`[Service Worker] Network response for request ${event.request.method} ${event.request.url}`, networkResponse.status, networkResponse.type)
      if (
        (networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) ||
        (networkResponse.status === 0 && networkResponse.type === 'opaque' && allowedOpaqueCaching.some(re => re.test(event.request.url)))
      ) {
        if (debug) console.log(`[Service Worker] Caching response for request ${event.request.method} ${event.request.url}`, networkResponse.status, networkResponse.type)
        await cache.put(event.request, networkResponse.clone())
      }
    }())

    // Returned the cached response if we have one, otherwise return the network response.
    return cachedResponse || networkResponsePromise
  }())
})

// delete all caches and keep only the current one
self.addEventListener('activate', (e) => {
  if (debug) console.log('[Service Worker] Activate - clearing old caches')
  e.waitUntil((async () => {
    await self.clients.claim()
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cn) => cn !== cacheName)
          .map((cn) => caches.delete(cn))
      )
    })
  })())
})
