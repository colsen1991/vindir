const isStatic = process.env.STATIC === 'true'
const isStaging = process.env.STAGING === 'true'

const bloggliste = require('./static/data/blogg.json').liste

module.exports = {
  css: [
    { src: './assets/style/index.scss', lang: 'sass' }
  ],
  loading: {
    color: '#ff6a00'
  },
  manifest: {
    name: 'Vindir: Web & IT og sånt',
    short_name: 'Vindir',
    display: 'standalone',
    description: 'Vindir er et lite web- og IT-byrå i Bodø som leverer skreddersydde hjemmesider og webløsninger.',
    orientation: 'any',
    theme_color: '#FF6A00',
    background_color: '#fff'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/google-analytics', { ua: isStaging ? '' : 'UA-107229265-4' } ]
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: [
      'whatwg-fetch'
    ]
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload',
    './plugins/responsive'
  ],
  head: {
    htmlAttrs: { lang: 'nb-NO' },
    script: [ { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vindir er et lite web- og IT-byrå i Bodø som leverer skreddersydde hjemmesider og webløsninger.'
      },
      { name: 'theme-color', content: '#FF6A00' },
      { hid: 'og:title', property: 'og:title', content: 'Vindir: Web & IT og sånt' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Vindir er et lite web- og IT-byrå i Bodø som leverer skreddersydde hjemmesider og webløsninger.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.datocms-assets.com/4973/1521797326-business-2717066.jpg?auto=compress&fit=max&w=1920'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://www.datocms-assets.com/4973/1521797326-business-2717066.jpg?auto=compress&fit=max&w=1920'
      },
      { property: 'og:site_name', content: 'Vindir: Web & IT og sånt' },
      { name: 'robots', content: isStaging ? 'noindex, nofollow' : 'index, follow' }
    ]
  },
  generate: {
    routes: bloggliste.map(({ slug }) => {
      return {
        route: `/blogg/${slug}`,
        payload: require(`./static/data/blogg/${slug}.json`)
      }
    })
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.vindir.no',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: bloggliste.map(({ slug }) => `/blogg/${slug}`),
    exclude: [
      '/404',
      '/kontakt/takk',
      '/nyhetsbrev/takk'
    ]
  },
  workbox: {
    handleFetch: isStatic
  }
}
