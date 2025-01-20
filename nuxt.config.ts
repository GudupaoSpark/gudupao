import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },

  // @ts-ignore
  i18n: {
    baseUrl: '/',
    // @ts-ignore
    defaultLocale: 'zh-cn',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root',
      // @ts-ignore
      fallbackLocale: 'zh-cn'
    },
    locales: [
      {
        code: 'zh-cn',
        iso: 'zh-CN',
        name: '简体中文'
      },
      {
        code: 'zh-hk',
        iso: 'zh-HK',
        name: '繁體中文'
      },
      {
        code: 'en-us',
        iso: 'en-US',
        name: 'English'
      }
    ],
    vueI18n: './config/i18n.config.ts'
  },

  app: {
    head: {
      title: 'Gudupao - 创新科技解决方案',
      meta: [
        { 
          name: 'description', 
          content: '古都炮（Gudupao）是一家致力于提供创新技术解决方案的科技公司。' 
        },
        { 
          name: 'keywords', 
          content: '技术创新, 软件开发, 云计算, AI, 数据分析, 技术咨询, 数字化转型' 
        }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/favicon.ico' 
        }
      ]
    }
  },

  compatibilityDate: '2025-01-20',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})