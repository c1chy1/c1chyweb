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
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
            rel: 'preload',
            as: 'style',
            href: '/fonts/font-face.css'
        }]
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



    loading: '~/components/loading.vue',

    target: 'static',

    generate: {
        fallback: '404.html'
    },


    pwa: {
        meta: {
            title: 'c1chyweb',
            author: 'c1chy',
        },
        manifest: {
            name: 'PWA c1chy Portfolio',
            short_name: 'PWA',
            description: "My Frontend experience and projects",
            lang: 'de',
            theme_color: 'black',

        },
    },


    plugins: [
        {src: '~/plugins/fullpage', mode: 'client'}
    ],


    modules: [
        ['@nuxtjs/pwa'],
        ['@nuxtjs/tailwindcss'],
        ['@neneos/nuxt-animate.css'],
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-font-loader'],
        ['nuxt-lazysizes'],
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


    lazySizes: {
        extendAssetUrls: {
            img: ['src', 'srcset', 'data-src', 'data-srcset'],
            source: ['src', 'srcset', 'data-src', 'data-srcset'],

            // Example for a custom component
            AppImage: ['source-md-url', 'image-url'],
        },
    },

    optimizedImages: {
        optimizeImages: true

    },


}
