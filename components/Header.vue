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
          <li><NuxtLink to="/" @click="closeMenu" active-class="active-link">{{ $t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMenu" active-class="active-link">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="closeMenu" active-class="active-link">{{ $t('nav.projects') }}</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="closeMenu" active-class="active-link">{{ $t('nav.contact') }}</NuxtLink></li>
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
  background-color: rgba(var(--header-bg-rgb), 0.8);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: var(--header-shadow);
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s, box-shadow 0.3s;
  border-radius: 20px;
  max-width: 1400px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  z-index: 100;
  position: relative;
  box-sizing: border-box;
}

.main-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 0;
  margin: 0 20px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-wrap: nowrap;
  min-width: 0;
}

.main-nav li {
  margin: 0 10px;
  white-space: nowrap;
  min-width: 0;
}

.main-nav a {
  color: var(--link-color);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  font-weight: 600;
  padding: 5px;
  display: block;
}

.main-nav a.active-link {
  color: var(--link-hover-color);
  position: relative;
}

.main-nav a.active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: var(--link-hover-color);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative; /* 添加相对定位 */
  z-index: 101; /* 确保下拉菜单显示在其他元素之上 */
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;  /* 添加这行 */
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
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
  font-weight: 600;  /* 添加字体加粗 */
}

.main-nav a:hover {
  color: var(--link-hover-color);
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
    padding: 15px 20px;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  
  .hamburger-menu {
    display: flex;
    order: 3;
    position: relative;
    right: 0;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    left: -5%;
    right: -5%;
    transform: translateY(-120%);
    width: auto;
    height: 100vh;
    background-color: var(--header-bg);
    z-index: 99;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .main-nav.active {
    transform: translateY(0);
    z-index: 99;
  }
  
  .main-nav ul {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px; /* 添加最大宽度 */
    margin: 0 auto; /* 居中对齐 */
    padding: 0;
    position: absolute; /* 添加这行 */
    left: 50%; /* 添加这行 */
    transform: translateX(-50%); /* 添加这行 */
  }
  
  .main-nav li {
    margin: 15px 0;
    width: 100%;
    text-align: center;
  }
  
  .main-nav a {
    font-size: 18px;
    display: inline-block;
    width: 100%; /* 修改为100% */
    text-align: center;
    font-weight: 600;  /* 在移动端视图也添加字体加粗 */
  }
  
  .main-nav a.active-link::after {
    width: 30px;
  }
  
  .desktop-only {
    display: none;
  }
  
  .language-menu-item,
  .theme-menu-item {
    display: block;
  }
  
  .header-right {
    order: 2;
  }
}
</style>