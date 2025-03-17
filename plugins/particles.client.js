import { loadFull } from "tsparticles"
import Particles from "vue3-particles"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Particles)
    
    // Initialize tsParticles
    window.particlesInit = async (engine) => {
        await loadFull(engine)
    }
})