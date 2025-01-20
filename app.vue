<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

// 全局 SEO 和性能优化
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  meta: [
    { 
      name: 'viewport', 
      content: 'width=device-width, initial-scale=1, maximum-scale=1' 
    },
    { 
      name: 'theme-color', 
      content: '#0070e6' 
    }
  ],
  link: [
    { 
      rel: 'preconnect', 
      href: 'https://fonts.googleapis.com' 
    },
    { 
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com', 
      crossorigin: '' 
    },
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap' 
    }
  ]
})

// 性能优化：预加载关键资源
onMounted(() => {
  // 预加载关键图片和资源
  const preloadImages = [
    '/assets/img/logo/logo.svg',
    '/assets/img/hero/hero-1.jpg'
  ]

  preloadImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
})
</script>

<style>
/* 导入深色模式样式 */
@import './assets/css/dark-mode.css';

/* 全局样式 */
body {
  font-family: 'Inter', sans-serif;
  @apply text-gray-800 bg-white dark:text-gray-100 dark:bg-gray-900;
}

/* 平滑滚动和选择样式 */
html {
  scroll-behavior: smooth;
}

::selection {
  @apply bg-gudupao-blue-500 text-white;
}

/* 可访问性和交互优化 */
a, button {
  @apply transition-all duration-300 ease-in-out;
}

a:focus, button:focus {
  @apply outline-none ring-2 ring-gudupao-blue-400;
}
</style>
