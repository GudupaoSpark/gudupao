<template>
  <div class="filter-switch-container"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400 } }">
    <div class="filter-background"></div>
      <button 
        v-for="(option, index) in filterOptions" 
        :key="option"
        :class="['filter-button', { active: selectedFilter === option }]"
        @click="selectFilter(option)"
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 200, delay: index * 50 } }">
        {{ option }}
      </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  filterOptions: {
    type: Array,
    required: true
  },
  selectedFilter: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectFilter'])

const selectFilter = (option) => {
  const index = props.filterOptions.indexOf(option);
  const background = document.querySelector('.filter-background');
  const buttonWidth = 100 / props.filterOptions.length;
  const button = document.querySelectorAll('.filter-button')[index];
const buttonRect = button.getBoundingClientRect();
background.style.width = `${buttonRect.width}px`;
const containerRect = document.querySelector('.filter-switch-container').getBoundingClientRect();
const offsetX = (buttonRect.left - containerRect.left) + (buttonRect.width / 2) - (containerRect.width / 2);
background.style.transform = `translateX(${offsetX}px) scale(1)`;
  background.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  emit('selectFilter', option);
}

onMounted(() => {
  selectFilter(props.selectedFilter);
  const index = props.filterOptions.indexOf(props.selectedFilter);
  const button = document.querySelectorAll('.filter-button')[index];
  const buttonRect = button.getBoundingClientRect();
  const containerRect = document.querySelector('.filter-switch-container').getBoundingClientRect();
  const background = document.querySelector('.filter-background');
  const offsetX = (buttonRect.left - containerRect.left) + (buttonRect.width / 2) - (containerRect.width / 2)+20;
  background.style.transform = `translateX(${offsetX}px) scale(1)`;
})
</script>

<style scoped>
.filter-switch-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
}

.filter-background {
  position: absolute;
  background: linear-gradient(90deg, #FFC837, #00B4DB);
  height: 100%;
  margin-bottom: 10px;
  border-radius: 25px;
  z-index: -1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  will-change: transform;
  opacity: 0.3;
  top: 0;
}

.filter-switch {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.filter-button.active {
  background: var(--primary-color);
  color: var(--text-color);
  border-color: var(--primary-color);
}
</style>