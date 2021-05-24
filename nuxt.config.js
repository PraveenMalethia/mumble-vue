export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mumble',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://mumbleapi.herokuapp.com/api/auth/login/',
            method: 'POST',
            propertyName: 'access'
          },
          logout: {
            url: 'https://mumbleapi.herokuapp.com/api/auth/logout/',
            method: 'get'
          },
          user: {
            url: 'https://mumbleapi.herokuapp.com/api/auth/profile/',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: true,
        tokenType: "Bearer",
        globalToken: true,
        autoFetchUser: true
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  fontawesome:{
    component:'fa',
    icons:{
      solid:true,
      brand: true,
    },
  }
}
