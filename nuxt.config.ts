export default defineNuxtConfig({
  css: ['~/assets/css/global.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  plugins: [
    { src: '~/plugins/particles.client.ts', mode: 'client' },
    { src: '~/plugins/i18n.js' }  // 添加 i18n 插件
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/iconlogo.png' }
      ]
    }
  },
  compatibilityDate: '2025-03-13'
})