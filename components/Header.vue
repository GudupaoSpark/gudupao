<template>
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/"><img src="/logo.svg" height=50></NuxtLink>
      </div>
      
      <div class="hamburger-menu" @click="toggleMenu">
        <div class="bar" :class="{ 'bar-1': isMenuOpen }"></div>
        <div class="bar" :class="{ 'bar-2': isMenuOpen }"></div>
        <div class="bar" :class="{ 'bar-3': isMenuOpen }"></div>
      </div>
      
      <nav class="main-nav" :class="{ 'active': isMenuOpen }">
        <ul>
          <li><NuxtLink to="/" @click="closeMenu">{{ $t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMenu">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink to="/services" @click="closeMenu">{{ $t('nav.services') }}</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="closeMenu">{{ $t('nav.contact') }}</NuxtLink></li>
          <li class="language-menu-item"><LanguageSwitcher /></li>
          <li class="theme-menu-item"><ThemeSwitcher /></li>
        </ul>
      </nav>
      
      <div class="header-right desktop-only">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeSwitcher from './ThemeSwitcher.vue'

// 汉堡菜单状态管理
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

// 点击页面其他区域关闭菜单
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger-menu') && !e.target.closest('.main-nav')) {
      isMenuOpen.value = false
    }
  })
})
</script>

<style scoped>
.site-header {
  background-color: var(--header-bg);
  box-shadow: var(--header-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.logo a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin: 0 15px;
}

.main-nav a {
  color: var(--link-color);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.main-nav a:hover {
  color: var(--link-hover-color);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.desktop-only {
  display: flex;
}

.language-menu-item {
  display: none;
}

.theme-menu-item {
  display: none;
}

/* 汉堡菜单样式 */
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 101;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: var(--text-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 汉堡菜单变叉动画 */
.bar-1 {
  transform: translateY(8.5px) rotate(45deg);
}

.bar-2 {
  opacity: 0;
}

.bar-3 {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    flex-wrap: wrap;
    height: auto;
    padding: 15px 20px;
  }
  
  .hamburger-menu {
    display: flex;
    order: 3;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    z-index: 100;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .main-nav.active {
    transform: translateY(0);
  }
  
  .main-nav ul {
    flex-direction: column;
    align-items: center;
  }
  
  .main-nav li {
    margin: 15px 0;
  }
  
  .main-nav a {
    font-size: 18px;
  }
  
  .desktop-only {
    display: none;
  }
  
  .language-menu-item {
    display: block;
  }
  
  .theme-menu-item {
    display: block;
  }
  
  .header-right {
    order: 2;
  }
}
</style>