


// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()



workbox.precaching.precacheAndRoute([
    { url: '/_nuxt/img/8dcefc7-540.webp', revision: 'light-desktop' },
    { url: '/_nuxt/img/d604ae9.webp', revision: 'bg-desktop' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/609d61f-300.webp', revision: 'exclusive-paper-300' },
    { url: '/_nuxt/img/776f6b4.png', revision: 'cursor-default' },
    { url: '/_nuxt/img/b8e9fe9.png', revision: 'cursor-bang' },
    { url: '/_nuxt/img/e890c41.png', revision: 'cursor-pointer' },
    { url: '/_nuxt/img/ec1323b.webp', revision: 'hat' },
    { url: '/_nuxt/img/7418a7e-384.webp', revision: 'hat-384' },
    { url: '/_nuxt/img/1825833-150.webp', revision: 'hat-150' },



    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },
    { url: '/_nuxt/img/87ad976.webp', revision: 'exclusive-paper' },



]);





workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new  workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60  , // 30 Days
            }),
        ],
    })
)


workbox.routing.registerRoute(
    /\.(?:js|css|gz|br|woff2)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
)




