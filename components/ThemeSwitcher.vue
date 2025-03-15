<template>
  <div class="theme-switcher">
    <button @click="toggleTheme" class="theme-toggle-btn">
      <span v-if="isDarkTheme">🌙</span>
      <span v-else>☀️</span>
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
}

.theme-toggle-btn:hover {
  background-color: var(--hover-bg);
}
</style>