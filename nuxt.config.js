const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

export default {





    target: 'server',

    router: {
        prefetchLinks: false
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
        },


        responsiveLoader: {
            name: 'images/[name]-[width].[ext]', // use [name] to keep the original filename
            sizes: [320, 640, 1024, 1280,], // array of image sizes - adjust to your layout needs
            quality: 15 // 85 is default. Tweak this if you need to
        },






        module: {
            rules: [
                {
                    test: /\.(sa|sc|css|jpe?g|png|webp)$/i,
                    use: [

                        {
                            loader: "responsive-loader",
                            options: {
                                // If you want to enable sharp support:
                                adapter: require("responsive-loader/sharp"),
                            },
                            placeholder: true,
                            placeholderSize: 20
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


        optimizeCSS: {
            cssProcessor: require('css-mqpacker'),
            cssProcessorPluginOptions: {sort: true}
        },

        postcss: {
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
        fallback: '404.html'
    },


    pwa: {
        meta: {
            title: 'c1chyweb',
            author: 'c1chy',
        },
        manifest: {
            name: 'c1chy.app',
            short_name: 'APP',
            description: "My Frontend experience and projects",
            lang: 'de',
            theme_color: '#40635b',

        },
    },


    plugins: [
        {src: '~/plugins/fullpage', mode: 'client'},
        {src: '~/plugins/aos.js', mode: 'client'},
        {src: '~/plugins/velocity', mode: 'client'},

    ],


    lazySizes: {
        extendAssetUrls: {
            img: ['src', 'srcset', 'data-src', 'data-srcset','sizes'],
            source: ['src', 'srcset', 'data-src', 'data-srcset','sizes'],
        },
    },

    optimizedImages: {
        optimizeImages: true

    },


}
