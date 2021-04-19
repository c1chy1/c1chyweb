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



    build: {
        extend(config, {isDev, isClient}) {
            config.module.rules.forEach(rule => {
                if (String(rule.test) === String(/\.(png|jpeg|gif|svg|webp|ttf)$/)) {
                    // add a second loader when loading images
                    rule.use.push({
                        loader: 'image-webpack-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    // use these settings for internet explorer for proper scalable SVGs
                                    // https://css-tricks.com/scale-svg/
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


    target: 'static',

    generate: {
        fallback: '404.html'
    },

    modules : [
        ['@nuxtjs/tailwindcss'],
        ['fullpage-nuxt', { animate: true}],
        ['@neneos/nuxt-animate.css'],
        ['@aceforth/nuxt-optimized-images'],
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


    plugins: [
        { src: '~/plugins/fullpage', mode: 'client',  } ,
    ],

    loading: '~/components/loading.vue',

    optimizedImages: {
        optimizeImages: true
    }


}
