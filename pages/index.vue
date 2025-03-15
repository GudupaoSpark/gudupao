<template>
    <div class="home-container">
        <div class="logo-text-container">
            <div class="logo-container">
                <img src="/logo.png" alt="Gudupao Logo" class="square-logo" />
            </div>
            <div class="text-container">
                <h1 class="brand-name">GudupaoSpark</h1>
                <h2 class="brand-name-cn">古都炮星火</h2>
            </div>
        </div>
        <div class="tech-stack-container">
            <h2 class="section-title">我们的技术栈</h2>
            <div class="tech-stack-grid">
                <div class="tech-card">
                    <img src="/icon/vue.png" class="tech-icon">
                    <h3 class="tech-name">Vue.js</h3>
                    <p class="tech-desc">渐进式 JavaScript 框架</p>
                </div>
                <div class="tech-card">
                    <img src="/icon/nuxt.png" class="tech-icon">
                    <h3 class="tech-name">Nuxt.js</h3>
                    <p class="tech-desc">Vue.js 的全栈框架</p>
                </div>
                <div class="tech-card">
                    <img src="/icon/python.ico" class="tech-icon">
                    <h3 class="tech-name">Python</h3>
                    <p class="tech-desc">解释型脚本语言</p>
                </div>
                <div class="tech-card">
                    <img src="/icon/fastapi.png" class="tech-icon">
                    <h3 class="tech-name">FastAPI</h3>
                    <p class="tech-desc">基于 Python 的高性能 Web 框架</p>
                </div>
            </div>
        </div>
        <div class="timeline-container">
            <h2 class="section-title">发展历程</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2023年12月</div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">古都炮星火正式成立</h3>
                        <p class="timeline-desc">致力于打造高质量的技术学习平台</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2024年1月</div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">首个技术课程上线</h3>
                        <p class="timeline-desc">发布第一期Vue.js高级开发课程</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2024年3月</div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">社区建设启动</h3>
                        <p class="timeline-desc">技术交流社区正式开放</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2024年6月</div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">课程体系完善</h3>
                        <p class="timeline-desc">全栈开发课程体系构建完成</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 移除了原有的语言切换逻辑，因为已经封装到LanguageSwitcher组件中
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
    background: linear-gradient(90deg, #00B4DB, #FFC837);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s linear infinite;
}

.brand-name-cn {
    font-size: 2.5rem;
    margin: 5px 0 0 0;
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
</style>