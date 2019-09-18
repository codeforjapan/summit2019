import axios from 'axios'

const title = 'Code for Japan Summit 2019'
const description = '国内最大のシビックテックのイベント「Code for Japan Summit 2019」が千葉で開催。' +
  '今年のテーマはSpark Joy!!地域や仲間、テクノロジー。さまざまなことにときめき、活動している人たちの話を聞いて体感してみてください。'
const ogDescription = '国内最大のシビックテックのイベント「Code for Japan Summit 2019」が千葉で開催。今年のテーマはSpark Joy!!'
const sessionApiUrl = 'https://api.sheety.co/440689e1-19c7-47c7-9c44-f620804b25a5'

const webpack = require('webpack')

export default {
  mode: 'universal',

  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    bodyAttrs: {
      id: 'page-top',
      'data-spy': 'scroll',
      'data-target': '.navbar-fixed-top'
    },
    titleTemplate: `%s | ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'author', name: 'author', content: "Code for Japan" },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://summit2019.code4japan.org/' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: ogDescription },
      { hid: 'og:image', property: 'og:image', content: 'https://summit2019.code4japan.org/img/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@codeforJP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
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
    '@/assets/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/social',
    '~/plugins/jquery',
    { src: '~/plugins/scroll', ssr: false },
    { src: '~/plugins/ga', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [ 'jquery', 'bootstrap', 'vegas' ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'inline-source-map'
      }
    }
  },

  generate: {
    subFolders:false,
    routes() {
      return axios.get(sessionApiUrl)
        .then((response) => {
          return response.data.filter(entry => {
              return entry.category
            }).map(entry => {
              return {
                route: `sessions/${entry.id}`,
                payload: entry
              }
            })
        })
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    sessionApiUrl: sessionApiUrl
  },

  sitemap: {
    hostname: 'https://summit2019.code4japan.org',
    defaults: {
      lastmod: new Date(),
      lastmodrealtime: true
    }
  }
}
