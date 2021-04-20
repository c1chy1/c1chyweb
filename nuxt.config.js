export default {


    head: {

        title: 'c1chy.web',

        htmlAttrs: {
            lang: 'de',
            amp: true
        },
        meta: [

            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'c1chy My Frontend experiences Nuxt Portfolio Webentwickler'
            }
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },

    target: 'server',
    ssr: 'true',

    modules: [
        ['@nuxtjs/tailwindcss'],
        /*    ['fullpage-nuxt', { animate: true}],*/
        ['@neneos/nuxt-animate.css'],
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-font-loader'],
        ['nuxt-purgecss',
            {

                enabled: ({isDev, isClient}) => (!isDev && isClient), // or `false` when in dev/debug mode
                paths: [
                    'components/**/*.vue',
                    'layouts/**/*.vue',
                    'pages/**/*.vue',
                    'plugins/**/*.js'
                ],
                styleExtensions: ['.css'],
                whitelist: ['body', 'html', 'nuxt-progress'],
                extractors: [
                    {
                        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
                        extensions: ['html', 'vue', 'js']
                    }
                ]


            }],
        ['nuxt-compress', {
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
        {src: '~/plugins/fullpage', mode: 'client'}
    ],

    loading: '~/components/loading.vue',

    optimizedImages: {
        optimizeImages: true
    },


    build: {
        extend(config, {isDev, isClient}) {
            config.module.rules.forEach(rule => {
                if (String(rule.test) === String(/\.(png|jpeg|gif|svg|webp|ttf|js)$/)) {
                    rule.use.push({
                        loader: 'image-webpack-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    {removeViewBox: false},
                                    {removeDimensions: true}
                                ]
                            }
                        }
                    })
                }
            })
        }
    },

}
