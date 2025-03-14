import { createApp } from 'vue'
import { ParticlesPlugin } from "@tsparticles/vue3";
import { loadFull } from "@tsparticles/engine";

const app = createApp(App);

app.use(ParticlesPlugin, {
  init: async engine => {
    await loadFull(engine);
  }
});
