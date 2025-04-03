<template>
  <div class="projects-container">
    <FilterSwitch :filterOptions="filterOptions" :selectedFilter="selectedFilter" @selectFilter="selectFilter" />
    <div class="search-section" v-motion :initial="{ opacity: 0, y: 50, scale: 0.95 }" :visibleOnce="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 600,
        type: 'spring',
        stiffness: 50,
        damping: 15
      }
    }">

      <div class="search-box" v-motion :initial="{ opacity: 0, scale: 0.8 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 400 } }">
        <input v-model="searchQuery" type="text" :placeholder="$t('projects.searchPlaceholder')" class="search-input">
        <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
      </div>
      <div class="tags-container" v-motion :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400 } }">
        <button v-for="(tag, index) in uniqueTags" :key="tag"
          :class="['tag-button', { active: selectedTags.includes(tag) }]" @click="toggleTag(tag)" v-motion
          :initial="{ opacity: 0, x: -20 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 400 } }">
          {{ tag }}
        </button>
        <button v-if="selectedTags.length > 0" class="tag-button reset-button" @click="resetTags" v-motion
          :initial="{ opacity: 0, x: -20 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 400 } }">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
      </div>
    </div>

    <div class="projects-grid" :class="{ 'few-items': filteredprojects.length <= 3 }">
      <ProjectCard v-for="(project, index) in filteredprojects" :key="`${project.id}-${renderKey}`" :project="project"
        v-motion :initial="{ opacity: 0, y: 100, scale: 0.5 }" :visibleOnce="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 800,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }
        }" @click="openModal(project)" />
    </div>

    <ProjectModal :show="showModal" :project="selectedproject" @close="closeModal" />
  </div>
</template>

<script setup>
import ProjectModal from '../components/ProjectModal.vue'

const searchQuery = ref('')
const selectedTags = ref([])
const { t } = useI18n()
const selectedFilter = ref(t('projects.all'))
const filterOptions = ref([t('projects.os'), t('projects.all'), t('projects.cs')])
const showModal = ref(false)
const selectedproject = ref({ title: '', tags: [], description: '', detail: '', link: '', type: '' })
const renderKey = ref(0)


const projects = ref([])
import { useHead } from '#imports'  // 修改这行
// Set page title
useHead({
  title: t("nav.projects") + ' | Gudupao'
})
// 定义颜色变量
const greenColor = '#28a745'
const blueColor = '#007bff'

watchEffect(async () => {
  const lang = t('lang')
  try {
    const projectsData = await import(`../data/projects/${lang}.json`)
    projects.value = projectsData.items || []
  } catch (error) {
    console.error(`Failed to load projects data for language: ${lang}`, error)
    projects.value = []
  }
})

// 添加font-awesome图标配置
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faArrowRight)

const openModal = (project) => {
  selectedproject.value = { ...project, type: project.os ? 'open-source' : 'commercial' }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedproject.value = null
}

const uniqueTags = computed(() => {
  const tags = new Set()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const selectFilter = (option) => {
  selectedFilter.value = option
  renderKey.value++
}

const filteredprojects = computed(() => {
  return projects.value.filter(project => {
    const matchesSearch = searchQuery.value === '' ||
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesTags = selectedTags.value.length === 0 ||
      selectedTags.value.every(tag => project.tags.includes(tag))

    const matchesFilter = selectedFilter.value === t('projects.all') ||
      (selectedFilter.value === t('projects.os') && project.os) ||
      (selectedFilter.value === t('projects.cs') && !project.os)

    return matchesSearch && matchesTags && matchesFilter
  })
})

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
  renderKey.value++
}
const resetTags = () => {
  selectedTags.value = []
  renderKey.value++
}
</script>

<style scoped>
.projects-container {
  max-width: 1400px;
  margin: 100px auto 2rem;
  padding: 0 2rem;
}

.search-section {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.search-box {
  position: relative;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: 30px;
  font-size: 1.1rem;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.search-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  outline: none;
}

.search-icon {
  position: absolute;
  right: 1.5rem;
  pointer-events: none;
  color: var(--text-color-light);
  font-size: 1.2rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}

.tag-button {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 25px;
  background: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  font-size: 0.95rem;
  --tag-button-height: calc(0.6rem * 2 + 1em * 1.2);
}

.tag-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tag-button.active {
  border-color: var(--primary-color);
  background: var(--primary-color-light);
  color: var(--primary-color);
  font-weight: 500;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.projects-grid.few-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.projects-grid.few-items .project-card {
  min-width: 380px;
  max-width: 420px;
}

.project-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color-light);
}

.project-content {
  padding: 1.8rem;
  cursor: pointer;
}

.project-content h3 {
  color: var(--text-color);
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
}

.project-content h3[data-type="open-source"] {
  color: v-bind(greenColor);
}

.project-content h3[data-type="commercial"] {
  color: v-bind(blueColor);
}

.project-content p {
  margin: 0 0 1.2rem;
  color: var(--text-color-light);
  line-height: 1.6;
  font-size: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.tag {
  padding: 0.3rem 0.9rem;
  background: var(--border-color);
  border-radius: 18px;
  font-size: 0.9rem;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--primary-color-light);
  color: var(--primary-color);
}

.reset-button {
  background: var(--error-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: var(--tag-button-height);
  height: var(--tag-button-height);
  border-radius: 50%;
  transition: all 0.3s ease;
  aspect-ratio: 1/1;
  transform: rotate(0deg);
}

.reset-button:hover {
  background: var(--error-color-dark);
  transform: scale(1.05) rotate(90deg);
}

@media (max-width: 1200px) {
  .projects-container {
    max-width: 1100px;
  }
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-container {
    margin: 130px auto 2rem;
    padding: 0 1.5rem;
  }

  .search-box {
    width: 100%;
  }

  .search-input {
    padding: 0.9rem 3rem 0.9rem 1.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .projects-grid.few-items .project-card {
    min-width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .projects-container {
    padding: 0 1rem;
    margin: 130px auto 2rem;
  }

  .tag-button {
    font-size: 0.85rem;
  }

  .project-content {
    padding: 1.4rem;
  }
}
</style>