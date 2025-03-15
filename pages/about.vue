<template>
    <div class="about-container">
        <!-- 视差滚动头部 -->
        <div class="hero-section">
            <div class="sticky-container">
                <div class="hero-content" v-motion :initial="{ scale: 1.2, opacity: 0 }"
                    :enter="{ scale: 1, opacity: 1 }" :visible="checkAndRunAnimation()">
                    <h1 class="hero-title">{{ $t('about.title') }}</h1>
                    <p class="hero-description">{{ $t('about.description') }}</p>
                </div>
            </div>
        </div>

        <!-- 添加团队简介部分 -->
        <div class="section-wrapper">
            <div class="team-intro-section">
                <h2 class="section-title" v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 800 }
                }">
                    {{ $t('about.teamIntroTitle') }}
                </h2>
                <p class="team-intro-description" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 200,
                        duration: 800
                    }
                }">
                    {{ $t('about.teamIntroDescription') }}
                </p>
            </div>
        </div>

        <!-- 团队介绍 -->
        <div class="section-wrapper">
            <div class="team-section">
                <!-- 团队标题 -->
                <h2 class="section-title" v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 800 }
                }">
                    {{ $t('about.teamTitle') }}
                </h2>

                <!-- 团队成员卡片 -->
                <div class="team-grid">
                    <div v-for="(member, index) in teamMembers" :key="index" class="team-card" v-motion
                        :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index * 200,
                        duration: 800
                    }
                }">
                        <div class="member-image-container">
                            <img :src="member.avatar" :alt="$t(`about.team.${index}.name`)" class="member-image">
                        </div>
                        <div class="member-info">
                            <h3>{{ $t(`about.team.${index}.name`) }}</h3>
                            <p class="position">{{ $t(`about.team.${index}.position`) }}</p>
                            <p class="description">{{ $t(`about.team.${index}.description`) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 公司愿景 -->
        <div class="vision-wrapper">
            <div class="vision-section">
                <h2 class="section-title" v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 800 }
                }">
                    {{ $t('about.visionTitle') }}
                </h2>
                <div class="vision-grid">
                    <div v-for="(vision, index) in 3" :key="index" class="vision-card" v-motion
                        :initial="{ opacity: 0, y: 50 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index * 200,
                        duration: 800
                    }
                }">
                        <div class="vision-content">
                            <div class="vision-icon"></div>
                            <h3>{{ $t(`about.vision.${index}.title`) }}</h3>
                            <p>{{ $t(`about.vision.${index}.description`) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'

const animationExecuted = ref(false)

// 检查动画状态的函数
const checkAndRunAnimation = () => {
    if (!animationExecuted.value) {
        animationExecuted.value = true
        // 这里可以触发你的动画
        return true
    }
    return false
}

// 监听路由变化
onMounted(() => {
    animationExecuted.value = false
    checkAndRunAnimation()
})

// Set page title
useHead({
    title: 'About | Gudupao'
})

// 直接初始化数据，不需要等待 onMounted
const teamMembers = ref([
    { avatar: '/img/team/member1.jpg', id: 0 },
    { avatar: '/img/team/member2.jpg', id: 1 },
    { avatar: '/img/team/member3.jpg', id: 2 }
])

onMounted(() => {
    // 在组件挂载后初始化团队成员数据
    teamMembers.value = [
        { avatar: '/img/team/member1.jpg', id: 0 },
        { avatar: '/img/team/member2.jpg', id: 1 },
        { avatar: '/img/team/member3.jpg', id: 2 }
    ]

    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll)
})

// 视差滚动效果
const handleScroll = () => {
    const scrolled = window.scrollY
    const heroContent = document.querySelector('.hero-content')
    if (heroContent) {
        heroContent.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`
        heroContent.style.opacity = Math.max(1 - scrolled / 700, 0)
    }
}

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.about-container {
    background: var(--bg-color);
    color: var(--text-color);
}

.hero-section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at center,
        rgba(59, 130, 246, 0.25) 0%,
        rgba(219, 39, 119, 0.25) 25%,
        rgba(96, 165, 250, 0.25) 50%,
        rgba(236, 72, 153, 0.25) 75%,
        rgba(59, 130, 246, 0.25) 100%);
    background-position: center;
    background-size: 100% 100%;
    animation: breatheAnimation 6s ease-in-out infinite;
}

@keyframes breatheAnimation {
    0% {
        background-size: 100% 100%;
    }
    50% {
        background-size: 150% 150%;
    }
    100% {
        background-size: 100% 100%;
    }
}

@keyframes shine {
    0% {
        background-position: 0% center;
    }
    50% {
        background-position: 150% center;
    }
    100% {
        background-position: 0% center;
    }
}
.sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    text-align: center;
    color: var(--text-color);
    padding: 0 20px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-title {
    font-size: 8vw;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(300deg,
            #0ea5e9 0%,
            #db2777 20%,
            #60a5fa 40%,
            #ec4899 60%,
            #0ea5e9 80%,
            #0ea5e9 100%
        );
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 6s ease-in-out infinite;
    text-align: center;
    width: 100%;
}

.hero-description {
    font-size: 1.5rem;
    line-height: 1.6;
    background: linear-gradient(120deg,
            #0ea5e9 0%,
            #ec4899 50%,
            #0ea5e9 100%
        );
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 6s ease-in-out infinite;
    max-width: 800px;
    margin: 0 auto;
}

.section-wrapper {
    background: var(--bg-color);
    /* 改为浅色背景 */
    position: relative;
    z-index: 1;
}

.team-section,
.vision-section {
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 20px;
    background: var(--bg-color);
}

.section-title {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 80px;
    color: var(--text-color);
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.team-section,
.vision-section {
    width: 100%;
    margin: 0;
    padding: 120px 0;
    margin: 0 auto;
    padding: 120px 20px;
    text-align: center;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.team-card {
    background: var(--dropdown-bg);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.5s ease;
    box-shadow: var(--header-shadow);
}

.dark-theme .team-card {
    background: var(--dropdown-bg);
    box-shadow: var(--dropdown-shadow);
}

.team-card:hover {
    transform: translateY(-10px);
    background: var(--hover-bg);
    box-shadow: var(--dropdown-shadow);
}

.member-image-container {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.member-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.team-card:hover .member-image {
    transform: scale(1.1);
}

.member-info {
    padding: 30px;
    text-align: center;
}

.member-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    color: var(--text-color);
}

.position {
    color: var(--text-color);
    margin-bottom: 15px;
    opacity: 0.8;
}

.description {
    color: var(--text-color);
    opacity: 0.7;
    line-height: 1.6;
}

.vision-wrapper {
    background: var(--bg-color);
    /* 改为浅灰色背景 */
    position: relative;
}

.vision-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.vision-card {
    padding: 40px;
    background: var(--dropdown-bg);
    border-radius: 20px;
    transition: all 0.5s ease;
    box-shadow: var(--header-shadow);
}

.dark-theme .vision-card {
    background: var(--dropdown-bg);
    box-shadow: var(--dropdown-shadow);
}

.vision-card:hover {
    transform: translateY(-10px);
    background: var(--hover-bg);
    box-shadow: var(--dropdown-shadow);
}

.vision-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 30px;
    background: linear-gradient(45deg, #60a5fa, #ec4899);
    /* 改为渐变色 */
    border-radius: 50%;
    position: relative;
}

.vision-icon::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #fff;
    /* 改为白色背景 */
}

.vision-content h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: var(--text-color);
}

.vision-content p {
    color: var(--text-color);
    /* 改为深灰色 */
    line-height: 1.6;
    text-align: center;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }

    .hero-description {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2.5rem;
    }
}

.team-intro-section {
    width: 100%;
    margin: 0;
    padding: 120px 0;
    text-align: center;
    background: var(--bg-color);
    transition: all 0.3s ease;
}

.team-intro-description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-color);
    opacity: 0.8;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
    transition: color 0.3s ease;
}

@media (max-width: 768px) {
    .team-intro-description {
        font-size: 1rem;
        padding: 0 15px;
    }
}
</style>