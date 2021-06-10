


// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()



/*
workbox.precaching.precacheAndRoute([

    { url: '/_nuxt/img/6f74aac-250.webp', revision: 'light-sm' },
    { url: '/_nuxt/img/8dcefc7-540.webp', revision: 'light-mid' },
    { url: '/_nuxt/img/3f4e5e3-1080.webp', revision: 'light-xl' },
    { url: '/_nuxt/img/ab0c2ba-600.webp', revision: 'bg-mobil' },
    { url: '/_nuxt/img/b2ba787-1080.webp', revision: 'bg-desktop' },
    { url: '/_nuxt/img/51de4a7-150.png', revision: 'exclusive-paper-150' },
    { url: '/_nuxt/img/d26e04e-150.webp', revision: 'logo-small' },
    { url: '/_nuxt/img/3e6bbea-400.webp', revision: 'logo-mid' },

    { url: '/_nuxt/img/ec1323b.webp', revision: 'hat' },
    { url: '/_nuxt/img/7418a7e-384.webp', revision: 'hat-384' },
    { url: '/_nuxt/img/1825833-150.webp', revision: 'hat-150' },
    { url: '/_nuxt/img/7a684ab-650.webp', revision: 'body-650' },
    { url: '/_nuxt/img/cdcc73d.webp', revision: 'body' },
    { url: '/_nuxt/img/f1c895d-600.webp', revision: 'body-650' },

]);
*/





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




