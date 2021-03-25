export default {


    generate: {
        fallback: '404.html'
    },

    modules : ['@nuxtjs/tailwindcss',['fullpage-nuxt', { animate: true}], '@neneos/nuxt-animate.css'],

    plugins: [
       { src: '~/plugins/fullpage', mode: 'client' }
    ],

    css: ['~/assets/css/animations'],


  loading: '~/components/loading.vue',


}
