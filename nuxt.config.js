export default {



    head: {
        title: 'c1chy.web',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'Portfolio',
                name: 'c1chy.de',
                content: 'My Frontend experiences'
            }
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },

    target: 'static',

    modules : [
        ['@nuxtjs/tailwindcss'],
        ['fullpage-nuxt', { animate: true}],
        ['@neneos/nuxt-animate.css'],
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-font-loader'],
        ['nuxt-compress',  {
            gzip: {
                threshold: 8192,
            },
            brotli: {
                threshold: 8192,
            },
        },

        ]
    ],
    fontLoader: {
        url: '/fonts/font-face.css'
    },

    generate: {
        fallback: '404.html'
    },

    plugins: [
        { src: '~/plugins/fullpage', mode: 'client'}
    ],

    loading: '~/components/loading.vue',

    optimizedImages: {
        optimizeImages: true
    },



    build: {
        extend(config, {isDev, isClient}) {
            config.module.rules.forEach(rule => {
                if (String(rule.test) === String(/\.(png|jpeg|gif|svg|webp|ttf)$/)) {
                    rule.use.push({
                        loader: 'image-webpack-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    { removeViewBox: false },
                                    { removeDimensions: true }
                                ]
                            }
                        }
                    })
                }
            })
        }
    },

}
