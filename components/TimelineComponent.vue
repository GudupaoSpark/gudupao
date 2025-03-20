<template>
    <div class="timeline-container"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <div class="timeline">
            <div v-for="(item, index) in timelineItems" 
                :key="index"
                class="timeline-item"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }">
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
    padding: 0 1rem;
    position: relative;
    overflow-x: hidden;
}

.timeline {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 1rem;
    width: 100%;
    min-height: 400px;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 115px;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #00B4DB, #FFC837);
    z-index: 1;
}

@media (max-width: 768px) {
    .timeline::before {
        left: 1rem;
        transform: none;
    }
}

.timeline-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    padding: 2rem 0;
    width: 100%;
    transition: all 0.3s ease;
}

.timeline-date {
    background: var(--hover-bg);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    width: 160px;
    text-align: center;
    margin-right: 2rem;
}

.timeline-content {
    background: var(--hover-bg);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    flex: 1;
    margin-left: 1rem;
    opacity: 1;
    transform: none;
    position: relative;
    pointer-events: auto;
    max-width: 60%;
}

@media (max-width: 768px) {
    .timeline::before {
        left: 1rem;
        transform: none;
    }

    .timeline-item {
        flex-direction: column;
        align-items: flex-start;
    }

    .timeline-date {
        width: auto;
        margin-right: 0;
        margin-bottom: 1rem;
        margin-left: 2rem;
    }

    .timeline-date::after {
        left: -2.25rem;
        right: auto;
    }

    .timeline-content {
        max-width: 100%;
        margin-left: 2rem;
    }
}

.timeline-item {
    transform-origin: 110px 50%;
}

.timeline-item:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .timeline-item {
        transform-origin: 1rem 50%;
    }
}

.timeline-date::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--hover-bg);
    border-radius: 50%;
    z-index: 2;
}

.dark .timeline-date {
    background: rgba(32, 32, 32, 0.95);
    color: var(--text-color-dark);
}

.timeline-content {
    background: var(--hover-bg);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    flex: 1;
    margin-left: 1rem;
    opacity: 1;
    transform: none;
    position: relative;
    pointer-events: auto;
    max-width: 60%;
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