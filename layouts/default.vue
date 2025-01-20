<template>
  <div class="min-h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/assets/img/logo/logo.svg"
            alt="Gudupao Logo"
            class="h-10 w-auto"
          />
        </NuxtLink>

        <!-- 桌面端导航 -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'text-gray-800 hover:text-blue-600 transition-colors px-2 py-1 rounded-md',
              isCurrentRoute(item.to) 
                ? 'bg-blue-100 text-blue-700 font-bold' 
                : 'hover:bg-gray-100'
            ]"
          >
            {{ item.label }}
          </NuxtLink>
          <button
            @click="toggleDarkMode"
            class="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
          >
            <i
              v-if="isDark"
              class="fas fa-sun text-yellow-400"
            ></i>
            <i
              v-else
              class="fas fa-moon text-gray-800 dark:text-gray-200"
            ></i>
          </button>
          <LanguageSwitcher class="ml-2" />
        </div>
      
        <!-- 移动端汉堡菜单 -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-800 focus:outline-none"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      
        <!-- 移动端下拉菜单 -->
        <div
          v-if="isMobileMenuOpen"
          class="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors',
              isCurrentRoute(item.to) 
                ? 'bg-blue-100 text-blue-700 font-bold' 
                : ''
            ]"
            @click="toggleMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="flex justify-center px-4 py-3">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>

    <!-- 主内容区域 -->
    <main class="flex-grow container mx-auto px-4 py-6 pt-16">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('footer.links') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-gray-300 hover:text-white transition-colors relative"
                :target="link.external ? '_blank' : '_self'"
              >
                {{ link.label }}
                <span v-if="link.external" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-[0.6rem]">
                  ↗
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t("footer.cus") }}</h3>
          <p>{{ $t("footer.address")}}广东省广州市花都区</p>
          <p>{{ $t("footer.em")}}offical@gudupao.top</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t("footer.social") }}</h3>
          <div class="flex space-x-4">
            <a href="https://www.youtube.com/@gudupaospark" target="_blank" class="text-white hover:text-blue-400">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://x.com/GudupaoSpark" target="_blank" class="text-white hover:text-blue-400">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ejwJJmG_3G67qOZlt5lelKpZJ2xI1zTp" target="_blank" class="text-white hover:text-blue-400">
              <i class="fab fa-qq"></i>
            </a>
            <a href="https://discord.com/invite/7ZQgykhyXs" target="_blank" class="text-white hover:text-blue-400">
              <i class="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8 border-t border-gray-700 pt-4">
        © 2023~{{ new Date().getFullYear() }} {{ $t("footer.cr")}}
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

// 深色模式状态
const isDark = ref(false)

// 初始化时检查localStorage和系统偏好
onMounted(() => {
  const savedMode = localStorage.getItem('theme')
  if (savedMode) {
    isDark.value = savedMode === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()
})

// 切换深色模式
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  updateTheme()
}

// 更新主题
const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const { t } = useI18n()

const navItems = [
  { to: '/', label: t('header.home') },
  { to: '/about', label: t('header.about') },
  { to: '/service', label: t('header.services') },
  { to: '/contact', label: t('header.contact') }
]

const footerLinks = [
  { to: '/about', label: t('header.about') },
  { to: '/service', label: t('header.services') },
  { to: '/contact', label: t('header.contact') },
  { to: 'https://www.youtube.com/@gudupaospark', label: 'YouTube', external: true },
  { to: 'https://x.com/GudupaoSpark', label: 'Twitter', external: true },
  { to: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ejwJJmG_3G67qOZlt5lelKpZJ2xI1zTp', label: 'QQ', external: true },
  { to: 'https://discord.com/invite/7ZQgykhyXs', label: 'Discord', external: true }
]

const isMobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isCurrentRoute = (path) => {
  // 处理首页特殊情况
  if (path === '/') {
    // 匹配根路径或带语言前缀的根路径
    return route.path === '/' || /^\/[a-z]{2}-[a-z]{2}\/?$/.test(route.path)
  }
  
  // 处理带语言前缀的路由
  const normalizedPath = route.path.replace(/^\/[a-z]{2}-[a-z]{2}/, '')
  
  return normalizedPath === path
}

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)
</script>

<style>
/* 引入 Font Awesome 图标 */
@import url('/public/assets/css/font-awesome.css');
</style>