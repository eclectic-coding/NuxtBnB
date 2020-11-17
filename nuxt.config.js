export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Mastering Nuxt | %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my website description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    prefetchLinks: false
  }
};


