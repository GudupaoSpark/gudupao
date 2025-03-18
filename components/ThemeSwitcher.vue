<template>
  <div class="theme-switcher">
    <button @click="toggleTheme" class="theme-toggle-btn">
      <svg v-if="isDarkTheme" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </button>
  </div>
</template>

<script setup>
const isDarkTheme = ref(false)

// 初始化主题
onMounted(() => {
  // 从localStorage中获取主题设置
  const savedTheme = localStorage.getItem('theme')
  // 如果有保存的主题设置，则使用该设置
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark'
    applyTheme()
  } else {
    // 如果没有保存的主题设置，则检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkTheme.value = prefersDark
    applyTheme()
  }

  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === null) {
      isDarkTheme.value = e.matches
      applyTheme()
    }
  })
})

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value
  applyTheme()
}

function applyTheme() {
  // 将主题状态保存到localStorage
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
  
  // 在文档根元素上添加或移除dark类
  if (isDarkTheme.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
}
</script>

<style scoped>
.theme-switcher {
  display: inline-block;
  margin-left: 10px;
}

.theme-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  color: var(--text-color, #000);
}

:root.dark-theme .theme-toggle-btn {
  color: #fff;
}

.theme-toggle-btn:hover {
  background-color: var(--hover-bg);
}
</style>