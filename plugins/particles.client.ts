import { defineNuxtPlugin } from '#app'
import ParticlesPlugin from "@tsparticles/vue3"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ParticlesPlugin, {
    init: async (engine) => {
      // 初始化粒子引擎
      engine.init()
    }
  })
})