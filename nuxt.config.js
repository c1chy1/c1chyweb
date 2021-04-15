

export default {


/*    build: {
        extend(config, {isDev, isClient}) {
            config.module.rules.forEach(rule => {
                if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
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
    },*/


    target: 'static',


    generate: {
        fallback: '404.html'
    },
    buildModules:[
        ['@nuxtjs/tailwindcss'] ,
        ['@aceforth/nuxt-optimized-images'],
        ['nuxt-compress']
    ],



    modules : [
        ['fullpage-nuxt', { animate: true}],
        ['@neneos/nuxt-animate.css'],

    ],

    plugins: [
       { src: '~/plugins/fullpage', mode: 'client',  } ,
    ],

    loading: '~/components/loading.vue',

    optimizedImages: {
        optimizeImages: true
    }


}
