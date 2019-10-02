const Prismic = require('prismic-javascript')
import { initApi } from './prismic.config'
const PrismicConfig = require('./prismic.config')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 head: {
  //title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Heebo:300,400,500,700,800|Libre+Franklin:400,500,700&display=swap' }


  ],
  script: [
      { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      { src: '//static.cdn.prismic.io/prismic.min.js' },
  ],
  script: [
      { src: 'https://play.vidyard.com/embed/v4.js', async: true },
  ],
  __dangerouslyDisableSanitizers: ['script'],
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/prismic-vue.js',
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      './assets/global.scss',
      ]
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
    config.resolve.alias['vue'] = 'vue/dist/vue.common'
  }
  },

  generate: {
    routes: function() {
      
      const homepage = initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'homepage'))
          .then(response => {
            return response.results.map(payload => {
              return {
                route: '/',
                payload
              }
            })
          })
      })

      const productPage = initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'product_page'))
          .then(response => {
            return response.results.map(payload => {
              return {
                route: `/products/${payload.uid}`,
                payload
              }
            })
          })
      })
      
      return Promise.all([homepage, productPage]).then(values => {
        return [...values[0], ...values[1]]
      })
    }
  },
}
