<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-overlay">
            <img src="/logo.png" alt="Gudupao Logo" class="loading-logo">
        </div>
    </Transition>
</template>

<script setup>
const isLoading = ref(true)

onMounted(() => {
    // 给一个短暂的延迟以确保应用已完全加载
    setTimeout(() => {
        isLoading.value = false
    }, 100)
})
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    z-index: 9999;
}

.light-theme .loading-overlay {
    background-color: #ffffff;
}

.loading-logo {
    max-width: 80vw;
    max-height: 80vh;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1) rotate(0deg);
    }

    50% {
        transform: scale(.95) rotate(0deg);
    }

    100% {
        transform: scale(1) rotate(0deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-to {
    transform: scale(2);
}
</style>