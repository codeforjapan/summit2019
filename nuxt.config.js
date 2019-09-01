const title = 'Code for Japan Summit 2019'
const description = '国内最大のシビックテックのイベント Code for Japan Summit が千葉で開催。' +
  '今年のテーマは Spark Joy!!'

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
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: 'https://summit2019.code4japan.org/img/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@codeforJP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' },
      { rel: 'stylesheet', href: 'css/bootstrap.css' },
      { rel: 'stylesheet', href: 'fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: 'css/nivo-lightbox/nivo-lightbox.css' },
      { rel: 'stylesheet', href: 'css/nivo-lightbox/default.css' },
      { rel: 'stylesheet', href: 'https://jaysalvat.github.io/vegas/releases/latest/vegas.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    script: [
      { type: 'text/javascript', src: 'js/jquery.1.11.1.js' },
      { type: 'text/javascript', src: 'js/bootstrap.js' },
      { type: 'text/javascript', src: 'js/nivo-lightbox.js' },
      { type: 'text/javascript', src: 'js/jquery.isotope.js' },
      { type: 'text/javascript', src: 'js/jqBootstrapValidation.js' },
      { type: 'text/javascript', src: 'js/main.js' }
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', { id: 'UA-45275834-8' }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    subFolders:false
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    sessionApiUrl: 'https://api.sheety.co/440689e1-19c7-47c7-9c44-f620804b25a5'
  },
}
