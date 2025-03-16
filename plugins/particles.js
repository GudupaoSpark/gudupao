import { defineNuxtPlugin } from '#app'
import Particles from '@tsparticles/vue3'
import { loadFull } from "tsparticles"

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.vueApp._context.components['vue-particles']) {
    nuxtApp.vueApp.use(Particles, {
      init: async engine => {
        await loadFull(engine)
      }
    })
  }
})