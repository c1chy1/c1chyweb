




workbox.precaching.precacheAndRoute([
    { url: '/_nuxt/img/8dcefc7-540.webp', revision: 'abcd1234' },
    { url: '/_nuxt/img/d604ae9.webp', revision: 'abcd1234' },
    { url: '/_nuxt/img/810eed3-400.webp', revision: 'abcd1234' },
]);



/*
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
*/

workbox.routing.registerRoute(
    /\.(?:js|css|gz)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
)




