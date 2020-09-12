module.exports = {
  srcDir: 'src/',
  target: 'static',
  pageTransition: 'fade-page',
  server: {
    port: '3000',
    host: '0.0.0.0',
  },
  generate: {
    routes: ['/'],
  },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Namchee',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/og-banner.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Namchee',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@lakban_hitam',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Namchee',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og-banner.png',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Namchee',
      },
      {
        name: 'application-name',
        content: 'Namchee',
      },
      {
        name: 'theme-color',
        content: '#121212',
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef',
      },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml',
      },
    ],
  },
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#121212',
    },
  ],
  build: {
    postcss: {
      plugins: {
        'precss': {},
        'tailwindcss': {},
        'postcss-for': {},
        'postcss-custom-properties': {},
        'autoprefixer': {},
        'cssnano': {},
      },
    },
  },
  buildModules: [
    '@nuxtjs/svg',
  ],
  css: [
    '~assets/styles/main.css',
  ],
  plugins: [
    '~/plugins/polyfill.js',
    '~/plugins/composition-api.js',
    '~/plugins/intersect.js',
  ],
  router: {
    linkExactActiveClass: 'active--exact',
  },
};
