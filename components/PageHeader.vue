<template>
  <section class="bg-gray-100 dark:bg-gray-800 py-16 rounded-lg">
    <div 
      class="container mx-auto px-4 text-center"
      :class="maxWidth ? `max-w-${maxWidth}` : ''"
    >
      <h1 class="text-4xl font-bold mb-6">
        {{ title }}
      </h1>
      <p 
        v-if="description"
        class="text-xl text-gray-700 dark:text-gray-300 mx-auto"
        :class="maxWidth ? `max-w-${maxWidth}` : 'max-w-3xl'"
      >
        {{ description }}
      </p>
      <p 
        v-if="subtitle"
        class="text-lg text-gray-600 dark:text-gray-400 mt-4"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: '3xl'
  }
})
</script>