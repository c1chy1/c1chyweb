const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

export default {





    target: 'server',


    pwa: {


        workbox: {

            workboxExtensions: '@/plugins/custom-service-worker.js',
            globIgnores: ['sw.js', '**!/workbox*.js'],


            runtimeCaching: [{
                // Match any request ends with .png, .jpg, .jpeg or .svg.
                urlPattern: /.(?:png|jpg|jpeg|svg|webp)$/,

                // Apply a cache-first strategy.
                handler: 'cacheFirst',

                options: {
                    // Use a custom cache name.
                    cacheName: 'images',

                    // Only cache 50 images.
                    expiration: {
                        maxEntries: 50,
                    },
                },

            },]

        },



        meta: {
            title: 'c1chyweb',
            author: 'c1chy',
        },
        manifest: {

            start_url: "/?launch=pwa",
            name: 'c1chy.app',
            short_name: 'APP',
            description: "My Frontend experience and projects",
            display: 'standalone',
            lang: 'de',
            theme_color: '#40635b',

        },




    },


    optimizeCSS: {
        cssProcessor: require('css-mqpacker'),
        cssProcessorPluginOptions: {sort: true}
    },

    postcss: {

        'postcss-autoprefixer': autoprefixer(),

        plugins: {
            cssnano: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ]
            }
        }
    },


    router: {
        prefetchLinks: false
    },

    build: {
        extractCSS: true,

        extend(config, {isDev, isClient}) {
            config.module.rules.forEach(rule => {
                if (String(rule.test) === String(/\.(png|jpeg|gif|svg|webp|ttf|js|woff(2))$/)) {
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
        },


        module: {
            rules: [
                {
                    test: /\.(sa|sc|css|jpe?g|png|webp)$/i,
                    use: [


                        {
                            loader: "responsive-loader",

                            options: {
                                adapter: require('responsive-loader/sharp'),
                                sizes: [320, 640, 1024, 1920],
                                placeholder: true,
                                placeholderSize: 20

                            }

                        },

                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',



                    ],
                },
            ],
        },



        plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),




        mode: 'production',
        optimization: {
            nodeEnv: 'production',
            minimize: true
        },

    },



    head: {


        title: 'c1chyApp',

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
            },

            {

                name:"google-site-verification" ,
                content:"KJ4uvxuuxpNl_WJx2M1nRixFX1smSwksWHKwbsIwpmU"

            }
        ],

    },




    modules: [

        ['@nuxtjs/pwa'],
        ['@nuxtjs/tailwindcss'],
        ['nuxt-font-loader'],
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-lazysizes'],
        ['fullpage-nuxt'],
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

    loading: '~/components/loading.vue',




    fontLoader: {

        url: {
            local: '/fonts/font-face.css'
        },


        preload: {
            local: {
                hid: ['Barlow Condensed','Merriweather','Satisfy']
            }
        },

        prefetch: {
            local: {
                hid: ['Barlow Condensed','Merriweather','Satisfy']
            }
        },

    },



    googleFonts: {

        base64: true,
        fontsPath: '~static/fonts',

        preload: true,
        download: false,
        families: {

            'Barlow Condensed': {

                wght: [400, 700],

            },
            'Merriweather': true,
            'Lobster Two': true,
            'Satisfy': true,
            'Righteous': true,
            'Oswald': true,
        }

},


    generate: {
        fallback: '404.html',
        subFolders: false,
    },




    plugins: [
        {src: '~/plugins/fullpage', mode: 'client'},
        {src: '~/plugins/aos.js', mode: 'client'},
        {src: '~/plugins/velocity', mode: 'client'},
    ],


    lazySizes: {
        extendAssetUrls: {
            img: ['src', 'srcset', 'data-src', 'data-srcset'],
            source: ['src', 'srcset', 'data-src', 'data-srcset'],
            AppImage: ['source-md-url', 'image-url'],
        },
    },

    optimizedImages: {
        optimizeImages: true

    },


}
