export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'theme-color', conten: '#000000'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: '/assets/main.css'}
    ],
    script: [
      { src: 'https://vk.com/js/api/openapi.js?168' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-picture-swipe', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap', 
    ['@naumstory/nuxtjs-yandex-metrika', { id: '40322375', webvisor: true }] /*счетчик берется в метрике (вместо id)*/
  ],

  sitemap: {
    hostname: 'https://remont-vspb.ru',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}
