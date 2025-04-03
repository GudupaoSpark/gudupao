<template>
  <div class="projects-container">
    <FilterSwitch 
      :filterOptions="filterOptions"
      :selectedFilter="selectedFilter"
      @selectFilter="selectFilter"
    />
      <div class="search-section"
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.95 }"
      :visibleOnce="{ 
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

      <div class="search-box"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 400 } }">
        <input 
          v-model="searchQuery" 
          type="text" 
          :placeholder="$t('projects.searchPlaceholder')"
          class="search-input"
        >
        <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
      </div>
      <div class="tags-container"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400 } }">
        <button
          v-for="(tag, index) in uniqueTags"
          :key="tag"
          :class="['tag-button', { active: selectedTags.includes(tag) }]"
          @click="toggleTag(tag)"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 400 } }"
        >
          {{ tag }}
        </button>
        <button
          v-if="selectedTags.length > 0"
          class="tag-button reset-button"
          @click="resetTags"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 400 } }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="projects-grid" :class="{ 'few-items': filteredprojects.length <= 3 }">
      <ProjectCard
        v-for="(project, index) in filteredprojects"
        :key="`${project.id}-${renderKey}`"
        :project="project"
        v-motion
        :initial="{ opacity: 0, y: 100, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 800,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }
        }"
        @click="openModal(project)"
      />
    </div>

    <ProjectModal
      :show="showModal"
      :project="selectedproject"
      @close="closeModal"
    />
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
    title: t("nav.projects")+' | Gudupao'
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
  max-width: 1200px;
  margin: 120px auto 2rem;
  padding: 0 1rem;
}

.search-section {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-box {
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 0.8rem 3rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  font-size: 1rem;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.search-icon {
  position: absolute;
  right: 1rem;
  pointer-events: none;
  color: var(--text-color-light);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag-button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tag-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 4px var(--text-color);
}

.tag-button.active {
  border-color: var(--text-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.projects-grid.few-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.projects-grid.few-items .project-card {
  min-width: 300px;
  max-width: 400px;
}

.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

.project-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.tag-button {
  transition: all 0.3s ease;
  background: var(--bg-color);
}

.tag-button:hover {
  transform: scale(1.03);
}


.search-input {
  transition: all 0.3s ease;
}

.search-input:focus {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  padding: 1.5rem;
  cursor: pointer;
}

.project-content h3 {
  color: var(--text-color);
}

.project-content h3[data-type="open-source"] {
  color: v-bind(greenColor);
}

.project-content h3[data-type="commercial"] {
  color: v-bind(blueColor);
}

.project-content p {
  margin: 0 0 1rem;
  color: var(--text-color-light);
  line-height: 1.5;
}

.project-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.project-details.expanded {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}

.details-content {
  padding: 1rem 0;
  border-top: 1px solid var(--border-color);
  margin-top: 1rem;
}

.detailed-description {
  white-space: pre-line;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  gap: 0.75rem;
  opacity: 0.8;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--border-color);
  border-radius: 15px;
  font-size: 0.875rem;
  color: var(--text-color);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-container {
    margin: 120px auto 2rem;
  }
  

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
.reset-button {
  background: var(--error-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.reset-button:hover {
  background: var(--error-color-dark);
  transform: scale(1.03);
}
</style>