import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import zhHK from '../locales/zh-HK.json'
import enUS from '../locales/en-US.json'
import jaJP from '../locales/ja-JP.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: navigator.language || 'en-US', // 修改默认语言为自动识别
    fallbackLocale: 'en-US',   // 回退语言也设置为英语
    messages: {
      'zh-CN': zhCN,
      'zh-HK': zhHK,
      'en-US': enUS,
      'ja-JP': jaJP
    }
  })

  vueApp.use(i18n)
  
  return {
    provide: {
      i18n: i18n
    }
  }
})