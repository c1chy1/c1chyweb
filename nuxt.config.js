export default {




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
