<template>
  <div>
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
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
