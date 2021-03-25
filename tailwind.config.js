


module.exports = {




  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },




  corePlugins: {

    cursor: false,

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
      'sm': {'min': '320px', 'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},

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
