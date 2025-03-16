// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-15',
  devtools: { enabled: true },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/theme.css','@fortawesome/fontawesome-svg-core/styles.css'],
  // @ts-ignore - i18n module types
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en-us',
    locales: [
      {
        code: 'en-us',
        name: 'English',
        file: 'en-us.json'
      },
      {
        code: 'zh-cn',
        name: '简体中文',
        file: 'zh-cn.json'
      },
      {
        code: 'zh-hk',
        name: '繁體中文',
        file: 'zh-hk.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/iconlogo.png' }
      ]
    }
  }
})