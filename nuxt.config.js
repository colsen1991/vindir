const isProduction = process.env.NODE_ENV === 'production'

export default {
  target: 'static',
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
  modules: isProduction ? [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', { ua: 'UA-107229265-4' }]
  ] : undefined,
  build: {
    extractCSS: isProduction
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload',
    './plugins/responsive',
    './plugins/preview.client.js'
  ],
  head: {
    htmlAttrs: { lang: 'nb-NO' },
    script: [{ src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript', async: true }],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vindir er et lite web- og IT-byrå i Bodø som har som mål med å forenkle din bedriftshverdag ved å levere gode webløsninger, samt web- og IT-tjenester'
      },
      { name: 'theme-color', content: '#FF6A00' },
      { hid: 'og:title', property: 'og:title', content: 'Vindir: Web & IT og sånt' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Vindir er et lite web- og IT-byrå i Bodø som har som mål med å forenkle din bedriftshverdag ved å levere gode webløsninger, samt web- og IT-tjenester'
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
      { name: 'robots', content: 'index, follow' }
    ]
  },
  generate: {
    fallback: true
  },
  sitemap: {
    hostname: 'https://www.vindir.no',
    exclude: [
      '/404',
      '/kontakt/takk'
    ]
  }
}
