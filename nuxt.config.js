export default {
  components: true, // Creates auto-import
  head: {
    titleTemplate: 'Mastering Nuxt | %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ]
  }
}


