


module.exports = {





  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
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

      maxHeight: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },

    }
  },

}
