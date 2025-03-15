<template>
  <div class="language-switcher">
    <div class="current-language" @click="toggleDropdown">
      {{ currentLocaleName }}
      <span class="dropdown-icon" :class="{ 'open': isOpen }">▼</span>
    </div>
    <div class="language-dropdown" v-if="isOpen">
      <div 
        v-for="locale in availableLocales" 
        :key="locale.code"
        class="language-option"
        @click="switchLanguage(locale.code)"
      >
        {{ locale.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)

const currentLocaleName = computed(() => {
  const current = locales.value.find(l => l.code === locale.value)
  return current ? current.name : ''
})

const availableLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function switchLanguage(localeCode) {
  // 使用setLocale方法切换语言，这会同时更新cookie
  // 在no_prefix策略下不会改变URL
  setLocale(localeCode)
  isOpen.value = false
}

// 点击组件外部时关闭下拉菜单
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-switcher')) {
      isOpen.value = false
    }
  })
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.current-language {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--dropdown-bg);
  min-width: 100px;
  justify-content: space-between;
  color: var(--text-color);
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

.dropdown-icon {
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--dropdown-bg);
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 10;
  box-shadow: var(--dropdown-shadow);
  color: var(--text-color);
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s;
}

.language-option {
  padding: 8px 12px;
  cursor: pointer;
}

.language-option:hover {
  background-color: var(--hover-bg);
}
</style>