<template>
  <div class="error-page min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <div class="mb-8">
        <img 
          src="/assets/img/error/404.svg" 
          alt="404 Not Found" 
          class="mx-auto max-w-md w-full"
        />
      </div>
      <h1 class="text-5xl font-bold text-gray-800 mb-6">
        404 - 页面未找到
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        抱歉，您访问的页面似乎不存在或已被移除。请检查网址是否正确。
      </p>
      <div class="flex justify-center space-x-4">
        <NuxtLink 
          to="/" 
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回首页
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          联系我们
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'empty',
  name: '404 Not Found'
})
</script>

<style scoped>
.error-page {
  background: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%);
}
</style>