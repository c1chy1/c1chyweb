export default {


    generate: {
        fallback: '404.html'
    },

    modules : ['@nuxtjs/tailwindcss',['fullpage-nuxt', { animate: true}], '@neneos/nuxt-animate.css',['nuxt-responsive-loader']],

    plugins: [
       { src: '~/plugins/fullpage', mode: 'client' }
    ],

    loading: '~/components/loading.vue',

    responsiveLoader: {
        name: 'img/[hash:7]-[width].[ext]',
        quality: 25 // choose a lower value if you want to reduce filesize further
    }
}
