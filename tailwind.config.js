


module.exports = {





  tailwindcss: {

    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',

  },

  purge: {
    content: [
      'components/!**!/!*.vue',
      'layouts/!**!/!*.vue',
      'pages/!**!/!*.vue',
      'plugins/!**!/!*.js',
    ],

    layers: ['base'],
  },


  theme: {

    screens: {
      'sm': { 'min': '480px'},
      'md': {'min': '768px'},
      'md-landscape': [
        {'min': '768px'},
        {'raw': '(orientation: landscape)'}
      ],
      'md-portrait': [
        {'min': '768px'},
        {'raw': '(orientation: portrait)'}
      ],
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},


    },
    colors: {


    },
    fontFamily: {
      sans: ['Barlow Condensed', 'Mulish','Merriweather','Satisfy'],
      serif: ['Mulish', 'Merriweather','Satisfy'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },

      letterSpacing: {

        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.05em',
        wider: '.15em',
        widest: '.25em',
      },

      maxHeight: {
        xs: "4rem",
        sm: "8rem",
        md: "12rem",
        lg: "16rem",
        xl: "20rem",
        "2xl": "24rem",
        "3xl": "28rem",
        "4xl": "32rem",
        "5xl": "36rem",
        "6xl": "40rem",
        "8xl": "50rem",
      },

    }
  },

}
