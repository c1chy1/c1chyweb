


module.exports = {




  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  future: {
   removeDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,

  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  },

  theme: {

    screens: {
      'sm': { 'min': '479px'},
      'md': {'min': '767px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
      '2xl': {'min': '1535px'},

    },
    colors: {


    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['Mulish', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },

  variants: {},
  plugins: [],
}
