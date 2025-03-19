<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="$emit('close')">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <h2 :style="{ color: project.os ? '#28a745' : '#007bff' }">{{ project.title }}</h2>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <p class="description">{{ project.description }}</p>
        <p class="detail">{{ project.detail }}</p>
        <NuxtLink :to="project.link" class="project-link">
          了解更多 <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: var(--bg-color);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: rotate(90deg);
}

h2 {
  margin: 0 0 1rem;
  color: var(--text-color);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--border-color);
  border-radius: 15px;
  font-size: 0.875rem;
  color: var(--text-color);
}

.description {
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.detail {
  color: var(--text-color-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
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

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 1.5rem;
  }
}
</style>