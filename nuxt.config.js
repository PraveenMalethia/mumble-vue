export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mumble',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mumble | Tech space for real developers' }
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
    '@nuxtjs/color-mode',
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
    vuex: {
      namespace: 'auth',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://mumbleapi.herokuapp.com/api/users/login/',
            method: 'POST',
          },
          logout: {
            url: 'https://mumbleapi.herokuapp.com/api/users/logout/',
            method: 'GET',
          },
          user: {
            url: 'https://mumbleapi.herokuapp.com/api/users/profile/',
            method: 'GET',
          },
        },
        token: {
          property: 'access',
          // prefix: 'mumble.',
        },
        user: {
          autoFetch: true,
          property: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://mumbleapi.herokuapp.com',
  },

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
    },
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  }
}
