<template>
  <div class="app">
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #1a202c;
}
</style>
