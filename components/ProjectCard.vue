<template>
  <div 
    class="project-card floating"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    @click="$emit('click', project)"
  >
    <div class="project-content">
      <h3 :style="{ color: project.os ? '#28a745' : '#007bff' }">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-tags">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>

<style scoped>
.project-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 1.5rem;
  cursor: pointer;
}

.project-content h3 {
  color: var(--text-color);
  margin: 0 0 1rem;
}

.project-content p {
  margin: 0 0 1rem;
  color: var(--text-color-light);
  line-height: 1.5;
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

.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}
</style>