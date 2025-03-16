<template>
    <div class="home-container">
        <div class="logo-text-container" 
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
            <div class="logo-container" 
                v-motion
                :initial="{ opacity: 0, scale: 0.5 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 200 } }">
                <img src="/logo.png" alt="Gudupao Logo" class="square-logo hover-rotate" />
            </div>
            <div class="text-container"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }">
                <h1 class="brand-name">{{ $t('home.brandName') }}</h1>
                <h2 class="brand-name-cn">{{ $t('home.brandNameCn') }}</h2>
            </div>
        </div>

        <div class="tech-stack-container"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
            <h2 class="section-title glow-text">{{ $t('home.techStack.title') }}</h2>
            <div class="tech-stack-grid">
                <div v-for="(tech, index) in techStack" 
                    :key="index"
                    class="tech-card floating"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 200 } }">
                    <img :src="tech.icon" :alt="tech.name" class="tech-icon">
                    <h3 class="tech-name">{{ $t(`home.techStack.${tech.key}.name`) }}</h3>
                    <p class="tech-desc">{{ $t(`home.techStack.${tech.key}.desc`) }}</p>
                </div>
            </div>
        </div>

        <div class="timeline-section">
            <h2 class="section-title glow-text">{{ $t('home.timeline.title') }}</h2>
            <div class="timeline-wrapper"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <TimelineComponent :timelineItems="timelineItems" />
            </div>
        </div>
    </div>
</template>

<script setup>
const techStack = [
    {
        key: 'vue',
        icon: '/icon/vue.png'
    },
    {
        key: 'nuxt',
        icon: '/icon/nuxt.png'
    },
    {
        key: 'python',
        icon: '/icon/python.ico'
    },
    {
        key: 'fastapi',
        icon: '/icon/fastapi.png'
    }
]

const timelineItems = [
    {
        key: 'start',
        date: '2024-01',
        title: '项目启动',
        desc: '开始构建新一代在线教育平台'
    },
    {
        key: 'tech',
        date: '2024-02',
        title: '技术选型',
        desc: '选择Vue3、Nuxt3、Python和FastAPI作为核心技术栈'
    },
    {
        key: 'dev',
        date: '2024-03',
        title: '开发阶段',
        desc: '进入全面开发阶段，打造优质学习体验'
    },
    {
        key: 'future',
        date: '2024-04',
        title: '未来展望',
        desc: '持续优化，打造领先的在线教育平台'
    }
]

useHead({
    title: 'Gudupao | Light Up The Future'
})
</script>

<style scoped>
:root {
    --gradient-start: #00B4DB;
    --gradient-mid: #0083B0;
    --gradient-end: #FFC837;
}

.dark-theme {
    --gradient-start: #005F73;
    --gradient-mid: #0A9396;
    --gradient-end: #EE9B00;
}

.tech-stack-container {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    padding: 0 2rem;
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

.tech-stack-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.tech-card {
    width: calc(25% - 1.5rem);
    background: var(--hover-bg);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: var(--hover-bg);
}

.dark .tech-card {
    background: rgba(32, 32, 32, 0.95);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tech-card:hover {
    transform: translateY(-5px);
}

.tech-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    display: block;
    color: var(--text-color);
}

.dark .tech-icon {
    color: var(--text-color-dark);
}

.tech-name {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.dark .tech-name {
    color: var(--text-color-dark);
}

.tech-desc {
    text-align: center;
    color: var(--text-color-secondary);
    font-size: 0.9rem;
}

.dark .tech-desc {
    color: var(--text-color-secondary-dark);
}



@media (max-width: 1024px) {
    .tech-card {
        width: calc(50% - 1rem);
    }
}

@media (max-width: 768px) {
    .tech-card {
        width: 100%;
    }
}

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.home-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end), var(--gradient-start));
    background-size: 400% 400%;
    z-index: -1;
    animation: gradientBG 10s ease infinite;
    opacity: 0.5;
    filter: blur(3px);
}

@keyframes gradientBG {
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 100% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    75% {
        background-position: 0% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

@media (max-width: 768px) {
    .home-container::before {
        animation-duration: 15s;
        opacity: 0.4;
    }
}
.logo-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
    max-width: 800px;
    padding: 0 15px;
    box-sizing: border-box;
    height: 80vh;
}

.logo-container {
    margin-right: 30px;
}

.square-logo {
    width: 512px;
    height: 512px;
    object-fit: contain;
    max-width: 100%;
}

.text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.brand-name {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;  /* 增加字体粗细到最粗 */
    background: linear-gradient(90deg, #00B4DB, #FFC837);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s linear infinite;
}

.brand-name-cn {
    font-size: 2.5rem;
    margin: 5px 0 0 0;
    font-weight: 900;  /* 增加字体粗细到最粗 */
    background: linear-gradient(90deg, #00B4DB, #FFC837);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s linear infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* 响应式布局 */
@media (max-width: 768px) {
    .logo-text-container {
        flex-direction: column;
        text-align: center;
    }

    .logo-container {
        margin-right: 0;
        margin-bottom: 20px;
    }

    .text-container {
        align-items: center;
    }

    .square-logo {
        width: 512px;
        height: 512px;
    }

    .brand-name {
        font-size: 2.5rem;
    }

    .brand-name-cn {
        font-size: 1.8rem;
    }
}

/* 小屏幕设备 */
@media (max-width: 480px) {
    .square-logo {
        width: 512px;
        height: 512px;
    }

    .brand-name {
        font-size: 2.5rem;
    }

    .brand-name-cn {
        font-size: 1.8rem;
    }
}

/* 添加新的动画样式 */
.hover-rotate {
    transition: transform 0.5s ease;
}

.hover-rotate:hover {
    transform: rotate(5deg) scale(1.05);
}

.floating {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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

.tech-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.tech-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
}

.timeline-item {
    transition: all 0.3s ease;
}

.timeline-item:hover {
    transform: scale(1.05);
}

/* 添加滚动显示动画 */
.fade-up-enter-active {
    transition: all 0.8s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
</style>

<style scoped>
.timeline-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto 8rem;
    padding: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    overflow-x: auto;  /* 恢复横向滚动 */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.timeline-section {
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .timeline-wrapper {
        margin-left: 0;
        padding: 0 1rem;
        width: 100%;
        cursor: grab;  /* 添加抓取光标 */
    }
    
    .timeline-wrapper:active {
        cursor: grabbing;  /* 抓取时的光标 */
    }
}
</style>