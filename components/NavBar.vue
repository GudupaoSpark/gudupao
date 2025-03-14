<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo部分 -->
      <router-link to="/" class="logo">
        <img src="/assets/img/logo.png" alt="Gudupao Logo" class="logo-img">
      </router-link>

      <!-- 桌面导航菜单 -->
      <div class="nav-links">
        <router-link 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :to="item.path"
          class="nav-item"
        >
          {{ t(item.title) }}
        </router-link>

        <!-- 语言切换器 -->
        <div class="language-switcher" @click="toggleLanguageMenu">
          <span class="current-language">
            <span class="language-circle">
              <img :src="getCurrentLanguageEmoji()" class="emoji-img" alt="flag" />
            </span>
            {{ getCurrentLanguageName() }}
          </span>
          <div class="language-menu" v-show="isLanguageMenuOpen">
            <div 
              v-for="lang in languages" 
              :key="lang.code"
              class="language-option"
              @click="changeLanguage(lang.code)"
            >
              <img :src="lang.emoji" class="emoji-img" alt="flag" /> {{ lang.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- 移动端汉堡菜单 -->
      <button class="hamburger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>

      <!-- 移动端下拉菜单 -->
      <transition name="slide">
        <div v-if="isMenuOpen" class="mobile-menu">
          <router-link 
            v-for="(item, index) in menuItems" 
            :key="index" 
            :to="item.path"
            class="mobile-item"
            @click="closeMenu"
          >
            {{ t(item.title) }}
          </router-link>
          
          <!-- 修改移动端语言选项部分 -->
          <div class="mobile-language-options">
            <div 
              v-for="lang in languages" 
              :key="lang.code"
              class="mobile-language-option"
              @click.stop="changeMobileLanguage(lang.code)"
            >
              <img :src="lang.emoji" class="emoji-img" alt="flag" /> {{ lang.name }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isMenuOpen = ref(false)
const isLanguageMenuOpen = ref(false)
const currentLanguage = ref('en-US')
const languages = [
  { code: 'zh-CN', name: '简体中文（中国大陆）', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f3.svg' },
  { code: 'zh-HK', name: '繁體中文（中國香港）', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ed-1f1f0.svg' },
  { code: 'en-US', name: 'English(US)', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg' },
  { code: 'ja-JP', name: '日本語', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ef-1f1f5.svg' }
]

const menuItems = [
  { title: 'nav.home', path: '/' },
  { title: 'nav.about', path: '/about' },
  { title: 'nav.contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  const hamburger = document.querySelector('.hamburger')
  hamburger.classList.toggle('active')
  isLanguageMenuOpen.value = false
}

const closeMenu = () => {
  isMenuOpen.value = false
  isLanguageMenuOpen.value = false
}

const toggleLanguageMenu = (event) => {
  event.stopPropagation()
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const changeLanguage = (langCode) => {
  currentLanguage.value = langCode
  isLanguageMenuOpen.value = false
  locale.value = langCode
  localStorage.setItem('userLanguage', langCode)
}

const getCurrentLanguageEmoji = () => {
  const currentLang = languages.find(lang => lang.code === currentLanguage.value)
  return currentLang ? currentLang.emoji : languages.find(lang => lang.code === 'en-US').emoji
}

const getCurrentLanguageName = () => {
  const currentLang = languages.find(lang => lang.code === currentLanguage.value)
  return currentLang ? currentLang.name : 'English(US)'
}

// 添加点击外部关闭语言菜单的处理
onMounted(() => {
  document.addEventListener('click', (event) => {
    const languageSwitcher = document.querySelector('.language-switcher')
    if (languageSwitcher && !languageSwitcher.contains(event.target)) {
      isLanguageMenuOpen.value = false
    }
  })
})

// 添加移动端专用的语言切换函数
const changeMobileLanguage = (langCode) => {
  currentLanguage.value = langCode
  locale.value = langCode
  localStorage.setItem('userLanguage', langCode)
  closeMenu() // 切换语言后关闭移动端菜单
}

// 添加语言变化监听
watch(locale, (newLocale) => {
  document.querySelector('html').setAttribute('lang', newLocale)
})

// 在组件挂载时初始化语言
onMounted(() => {
  const savedLanguage = localStorage.getItem('userLanguage')
  if (savedLanguage) {
    currentLanguage.value = savedLanguage
    locale.value = savedLanguage
  }
  document.querySelector('html').setAttribute('lang', locale.value)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-img {
  height: 48px;  /* 从原来的 40px 调整到 48px */
  width: auto;
}

.brand-name {
  color: #1a202c;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #3182ce;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover {
  color: #2b6cb0;
  background: rgba(49, 130, 206, 0.05);
}

.nav-item:hover::after {
  width: 70%;
}

.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
}

.bar {
  width: 24px;
  height: 2px;
  background-color: #4a5568;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 2px;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.mobile-item {
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #4a5568;
  border-radius: 12px;
  margin: 0.5rem 0;
  transition: all 0.2s ease;
  font-weight: 500;
}

.mobile-item:hover {
  background: rgba(49, 130, 206, 0.05);
  color: #2b6cb0;
  transform: translateX(8px);
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter, .slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.emoji-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.language-switcher {
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.2s ease;
  color: #4a5568;
  font-weight: 500;
  user-select: none;
}

.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.language-option {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.language-switcher:hover {
  background: rgba(49, 130, 206, 0.05);
  color: #2b6cb0;
}

.language-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(49, 130, 206, 0.1);
  border-radius: 50%;
  padding: 2px;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  min-width: 160px;
  z-index: 1000;
}

.language-option {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-option:hover {
  background: rgba(49, 130, 206, 0.05);
  color: #2b6cb0;
}

.mobile-language-options {
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
}

.mobile-language-option {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-language-option:hover {
  background: rgba(49, 130, 206, 0.05);
  color: #2b6cb0;
  transform: translateX(8px);
}

/* 修改汉堡菜单样式 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .mobile-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }

  .mobile-menu.slide-enter-from,
  .mobile-menu.slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  .mobile-language-options {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .mobile-language-option {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .mobile-language-option .emoji-img {
    width: 12px;
    height: 12px;
    object-fit: cover;
  }

  .language-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: rgba(49, 130, 206, 0.1);
    border-radius: 50%;
    padding: 1px;
  }
}

  .container {
    padding: 0.8rem 1rem;
  }

  .logo-img {
    height: 32px;
  }


/* 确保过渡动画正常工作 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>