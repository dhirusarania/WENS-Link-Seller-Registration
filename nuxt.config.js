const pkg = require('./package')

module.exports = {

  // server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // },   //

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "WENSLink Seller Registration Dashboard",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Moov Africa Internal Logistics Management System" }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon-32x32.png' }],
    link: [{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap' }],
    link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css' }],
    link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css' }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.js",
        type: "text/javascript"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#080d0f' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/bootstrap.min.css', lang: 'css' },
    // { src: '~static/css/dark-theme.css', lang: 'css' },
    { src: '~static/css/amazon.css', lang: 'css' },
    { src: '~static/css/amazon2.css', lang: 'css' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/vuesax', lang: 'js' },
    { src: '~/plugins/datetime', lang: 'js' },
    { src: '~/plugins/PerfectScrollbar', lang: 'js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: 'https://specialmansolution.com/project8/',
    // credentials: false,
    // proxyHeaders: false
    // See https://github.com/nuxt-community/axios-module#options
  },

  // router: {
  //   base: '/wenslink/seller/'
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
