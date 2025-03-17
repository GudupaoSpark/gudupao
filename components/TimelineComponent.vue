<template>
    <div class="timeline-container"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <div class="timeline">
            <div v-for="(item, index) in timelineItems" 
                :key="index"
                class="timeline-item">
                <div class="timeline-date">{{ $t(`home.timeline.items.${index}.date`) }}</div>
                <div class="timeline-content">
                    <h3 class="timeline-title">{{ $t(`home.timeline.items.${index}.title`) }}</h3>
                    <p class="timeline-desc">{{ $t(`home.timeline.items.${index}.desc`) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    timelineItems: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.timeline-container {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    position: relative;
}

.timeline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    padding: 2rem 0;
    width: 100%;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00B4DB, #FFC837);
    z-index: 1;
}

.timeline-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    padding: 0 1rem;
    transition: all 0.3s ease;
}

.timeline-item:hover {
    transform: scale(1.05);
}

.timeline-date {
    background: var(--hover-bg);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    top: -1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.timeline-date:hover {
    transform: scale(1.05);
}

.dark .timeline-date {
    background: rgba(32, 32, 32, 0.95);
    color: var(--text-color-dark);
}

.timeline-content {
    text-align: center;
    background: var(--hover-bg);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 250px;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
}

.timeline-date:hover + .timeline-content {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
}

.dark .timeline-content {
    background: rgba(32, 32, 32, 0.95);
}

.timeline-title {
    color: var(--text-color);
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
}

.dark .timeline-title {
    color: var(--text-color-dark);
}

.timeline-desc {
    color: var(--text-color-secondary);
    font-size: 0.9rem;
    margin: 0;
}

.dark .timeline-desc {
    color: var(--text-color-secondary-dark);
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-color);
}

.dark .section-title {
    color: var(--text-color-dark);
}

.glow-text {
    text-shadow: 0 0 10px rgba(0, 180, 219, 0.5);
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px rgba(0, 180, 219, 0.5);
    }
    to {
        text-shadow: 0 0 20px rgba(0, 180, 219, 0.8),
                     0 0 30px rgba(0, 180, 219, 0.6);
    }
}
</style>