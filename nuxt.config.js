const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

export default {

    target: 'server',


    loading: '~/components/loading.vue',

    head: {


        script: [


            {
                src: '//cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.min.js'
            },
            {
                src: '//cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.ui.min.js'

            },


        ],


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
            },

        ]
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


        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
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

    ],
    modules: [

        ['@nuxtjs/pwa'],
        ['@nuxtjs/tailwindcss'],
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-font-loader'],
        ['nuxt-lazysizes'],
        ['fullpage-nuxt', {animate: true}],
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

            AppImage: ['source-md-url', 'image-url'],
        },
    },

    optimizedImages: {
        optimizeImages: true

    },


}
