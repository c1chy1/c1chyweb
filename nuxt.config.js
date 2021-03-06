const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
require('dotenv').config()


export default {


    render: {
        resourceHints: false
    },

    target: 'server',

    pwa: {


        meta: {
            title: 'c1chy.App',
            author: 'c1chy',
        },
        manifest: {

            start_url: "/",
            name: 'c1chy.app',
            description: "Anwendung Webseite Lüdenscheid Website",
            display: 'standalone',
            lang: 'de',
            theme_color: '#40635b',
            background_color: "#252328",
        },

        icon: {

            src: "/static/icon.png",
            type: "image/png",
            sizes: [64, 120, 144, 152, 192, 384, 512],

        },


        workbox: {

            workboxExtensions: 'plugins/custom-service-worker.js',



        },},


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



    modules: [

        ['@nuxtjs/axios'],


        ['nuxt-mail', {
            message: {
                to: 'test@c1chyweb.de',
            },
            smtp: {
                host: 'roc130.rockinghoster.cloud',
                port: "465",
                auth: {
                    user: 'test@c1chyweb.de',
                    pass: '!!!!!'
                },
            },
        }],
        ['@nuxtjs/pwa'],
        ['@nuxtjs/robots', {

            robots: {
                UserAgent: '*',
                Allow: '/'
            }

        }

        ],
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
        },
        ]

    ],


    router: {
        prefetchLinks: false
    },

    build: {

        extractCSS: true,
        optimizeCSS: true,

        extend(config) {
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
            minimize: true,

            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }

        },

    },



    head: {


      link: [
            {
                rel: 'preconnect',
                href: 'https://c1chy.eu',
                crossorigin: 'anonymous'
            },
            {
                rel: 'dns-prefetch',
                href: 'https://c1chy.eu'
            }
        ],



        title: 'c1chyApp',

        htmlAttrs: {
            lang: 'de',
            amp: true
        },
        meta: [

            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },

            {
                name: 'robots',
                content: 'index,follow'

            },


            {
                hid: 'description',
                name: 'description',
                content: 'c1chy Website Lüdenscheid Apps Anwendung'
            },

            {

                name:"google-site-verification" ,
                content:"KJ4uvxuuxpNl_WJx2M1nRixFX1smSwksWHKwbsIwpmU"

            }
        ],

    },

    axios: {
        proxy: true
    },

  proxy: {
        '/api/': { target: 'https://c1chy.eu' , changeOrigin: true }
    },



    loading: '~/components/loading.vue',


    fontLoader: {

        url: {
            local: '/fonts/font-face.css',
            crossorigin: 'anonymous',
        },

    },


    googleFonts: {

        base64: true,
        fontsPath: '~static/fonts',
        crossorigin: 'anonymous',
        preload: false,
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
