const isStatic = !!process.env.STATIC

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
    [ '@nuxtjs/google-analytics', { ua: 'UA-107229265-4' } ]
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: []
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: { lang: 'nb-NO' },
    script: [ { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' }
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'Vindir er et lite web- og IT-byrå i Bodø som leverer skreddersydde hjemmesider og webløsninger.' },
      { name: 'theme-color', content: '#FF6A00' },
      { hid: 'og:title', property: 'og:title', content: 'Vindir: Web & IT og sånt' },
      { hid: 'og:description', property: 'og:description', content: 'Vindir er et lite web- og IT-byrå i Bodø som leverer skreddersydde hjemmesider og webløsninger.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.datocms-assets.com/4973/1521131795-og-image.jpg' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://www.datocms-assets.com/4973/1521131795-og-image.jpg' },
      { property: 'og:site_name', content: 'Vindir: Web & IT og sånt' },
      { name: 'robots', content: 'index, follow' }
    ]
  },
  generate: {
    routes: []
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.vindir.no',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: [],
    exclude: [
      '/404'
    ]
  },
  workbox: {
    handleFetch: isStatic
  }
}
