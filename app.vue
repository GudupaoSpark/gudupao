<template>
  <div class="app-container">
    <LoadingOverlay />
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@300;400;500;600;700&display=swap'
    }
  ]
})
</script>
<script client>
console.log(`%c𝓖𝓾𝓭𝓾𝓹𝓪𝓸`, `color: #007bff;font-size: 48px`)
console.log(`%cJoin Us: hr@gudupao.top`, `color: #007bff;font-size: 24px;background: linear-gradient(90deg, #00B4DB, #FFC837);`)
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}

.main-content {
  flex: 1;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
