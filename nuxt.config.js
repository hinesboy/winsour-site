module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'winsour',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5cb9de' ,height: '3px' , opacity: '1'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader'
        })
      }
    }
  },
  plugins: ['~plugins/element-ui'],
  css: [
    'element-ui/lib/theme-default/index.css'
  ]
}
