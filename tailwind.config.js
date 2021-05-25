


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
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},

      'portrait': {'raw': '(orientation: portrait)'},
      'landscape': {'raw': '(orientation: landscape)'},
    },

    fontFamily: {
      sans: ['Barlow Condensed', 'Mulish','Merriweather','Satisfy'],
      serif: ['Mulish', 'Merriweather','Satisfy'],
    },

    fontSize: {

      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.675rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '8rem',
      '9xl': '9rem',
      '10xl': '10rem',
      '11xl': '11rem',
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
        wide: '.15em',
        wider: '.35em',
        widest: '.45em',
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

      maxWidth: {



        'xxs': '15rem',
        'xs': '19rem',


      }

    }
  },

}
