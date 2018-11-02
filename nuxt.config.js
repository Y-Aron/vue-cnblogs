const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/global/iconfont/material-icons.css',
    "@/assets/global/bootstrap/css/bootstrap.min.css",
    "@/assets/global/font-awesome/css/font-awesome.min.css",
    "@/assets/global/AdminLTE/css/AdminLTE.min.css",
    "@/assets/global/AdminLTE/css/skins.min.css",
    // '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuetify',
    { src: '~/plugins/utils' },
    { src: '~/plugins/toastr', ssr: false },
    { src: '~/plugins/rules', ssr: true },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/',
    progress: true,
    proxy: true,
    withCredentials: true,
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8888',
      changeOrigin: true,
      pathRewrite: {'^/api/': ''}
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
