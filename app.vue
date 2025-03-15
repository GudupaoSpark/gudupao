<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// 导入全局CSS
import './assets/css/theme.css'
import Footer from './components/Footer.vue'
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
