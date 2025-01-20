<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-1 text-gray-800 hover:text-blue-600 transition-colors border-2 border-blue-500 rounded-md px-3 py-1.5"
    >
      <span>{{ currentLocaleLabel }}</span>
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>

    <!-- 语言选择下拉菜单 -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <button
          v-for="locale in availableLocales"
          :key="locale.value"
          @click="changeLocale(locale.value)"
          class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {{ locale.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { reloadNuxtApp } from 'nuxt/app'

const { locale } = useI18n()

const isDropdownOpen = ref(false)

const availableLocales = [
  { value: 'zh-cn', label: '简体中文' },
  { value: 'zh-hk', label: '繁體中文' },
  { value: 'en-us', label: 'English' }
]

const currentLocaleLabel = computed(() => {
  return availableLocales.find(l => l.value === locale.value)?.label || '简体中文'
})

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const router = useRouter()

const changeLocale = async (newLocale) => {
  const currentPath = router.currentRoute.value.path
  const newPath = currentPath.replace(/^\/[a-z]{2}-[a-z]{2}/, '')
  
  locale.value = newLocale
  isDropdownOpen.value = false
  
  await router.replace({
    path: `/${newLocale}${newPath}`,
    query: router.currentRoute.value.query
  })
  await nextTick()
  await reloadNuxtApp()
}
</script>