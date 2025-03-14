<template>
  <div class="home">
    <div class="hero-section">
      <div class="cyber-grid"></div>
      <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
      <div class="hero-content">
        <div class="typing-container">
          <h1 class="typing-text" ref="typingText">
            <span class="typed-content"></span><span class="cursor">|</span>
          </h1>
          <div class="glowing-line"></div>
          <p class="hero-subtitle" ref="heroSubtitle" :class="{ 'fade-in': subtitleVisible }">
            {{ t('home.heroSubtitle') }}
          </p>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </div>

    <div class="tech-stack-section">
      <h2 class="section-title">{{ t('home.techStackTitle') }}</h2>
      <div class="tech-grid">
        <div v-for="(tech, index) in techStack" :key="index" 
             class="tech-card" :style="{ '--delay': `${index * 0.1}s` }">
          <div class="tech-icon">{{ tech.icon }}</div>
          <h3>{{ t(`home.techStack.${index}.title`) }}</h3>
          <p>{{ t(`home.techStack.${index}.description`) }}</p>
          <div class="tech-glow"></div>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-container">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ t(`home.stats.${index}.label`) }}</div>
        </div>
      </div>
    </div>
    
    <!-- 在 tech-stack-section 和 stats-section 之间添加时间线 -->
    <div class="timeline-section">
      <h2 class="section-title">{{ t('home.timelineTitle') }}</h2>
      <div class="timeline">
        <div v-for="(event, index) in timeline" :key="index" 
             class="timeline-item" :class="{ 'right': index % 2 !== 0 }"
             :style="{ '--delay': `${index * 0.1}s` }">
          <div class="timeline-content">
            <div class="timeline-date">{{ event.year }}</div>
            <h3>{{ t(`home.timeline.${index}.title`) }}</h3>
            <p>{{ t(`home.timeline.${index}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { loadFull } from 'tsparticles'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const typingText = ref(null)
const subtitleVisible = ref(false)
const typingInProgress = ref(false)
const hasTyped = ref(false) // 新增：用于跟踪是否已经执行过打字效果

// 修改 watch 逻辑
watch(() => t('home.heroTitle'), (newText) => {
  if (typingText.value && !hasTyped.value) { // 只在首次加载时执行
    typeWriter(newText, typingText.value, 150)
    hasTyped.value = true
  }
})

// 在组件挂载时初始化
onMounted(() => {
  document.title = 'Gudupao | Light Up The Future'
  // 初始化打字效果
  if (typingText.value && !hasTyped.value) {
    typeWriter(t('home.heroTitle'), typingText.value, 150)
    hasTyped.value = true
  }
})

// 将 techStack 和 stats 改为计算属性
const techStack = ref([
  { icon: '🚀' },
  { icon: '🔒' },
  { icon: '🤖' },
  { icon: '📊' },
  { icon: '🔄' },
  { icon: '🌐' }
])

const stats = ref([
  { number: '2+' },
  { number: '8+' },
  { number: '10+' },
  { number: '0' }
])

// 修改打字机效果函数
const typeWriter = (text, element, speed = 100) => {
  // 强制重置打字状态
  typingInProgress.value = false
  
  const typedContent = element.querySelector('.typed-content')
  const cursor = element.querySelector('.cursor')
  
  // 重置内容和状态
  typedContent.textContent = ''
  cursor.classList.remove('blink')
  subtitleVisible.value = false
  
  // 开始新的打字效果
  typingInProgress.value = true
  
  let i = 0
  const lines = text.split('\n')
  let currentLine = 0
  
  const typing = () => {
    if (currentLine < lines.length) {
      if (i < lines[currentLine].length) {
        if (i === 0 && currentLine > 0) {
          typedContent.textContent += '\n'
        }
        
        const randomSpeed = speed + Math.random() * 50 - 25
        typedContent.textContent += lines[currentLine].charAt(i)
        i++
        setTimeout(typing, randomSpeed)
      } else {
        i = 0
        currentLine++
        setTimeout(typing, speed * 4)
      }
    } else {
      cursor.classList.add('blink')
      setTimeout(() => {
        subtitleVisible.value = true
        typingInProgress.value = false
      }, 500)
    }
  }
  typing()
}

// 修改语言监听逻辑
watch(() => t('home.heroTitle'), (newText) => {
  if (typingText.value) {
    // 清除之前的定时器
    const timers = window.setTimeout(() => {}, 0)
    for (let i = 0; i <= timers; i++) {
      window.clearTimeout(i)
    }
    typeWriter(newText, typingText.value, 150)
  }
})

// 删除重复的 onMounted 钩子
const particlesInit = async (engine) => {
  try {
    await loadFull(engine)
  } catch (error) {
    console.error('Failed to initialize particles:', error)
  }
}

const particlesOptions = {
  background: { color: { value: 'transparent' } },
  particles: {
    number: { value: 80 },
    color: { 
      value: ['#ffffff', '#2196f3', '#00bcd4'],
      animation: {
        enable: true,
        speed: 20
      }
    },
    shape: { 
      type: ['circle', 'triangle', 'square'],
      options: {
        triangle: { sides: 3 },
        square: { sides: 4 }
      }
    },
    opacity: { 
      value: 0.5,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1
      }
    },
    size: { 
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.05
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      outModes: 'bounce',
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: ['grab', 'bubble']
      },
      onClick: {
        enable: true,
        mode: 'push'
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: { opacity: 0.5 }
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 0.3
      },
      push: { quantity: 4 }
    }
  }
}

const timeline = ref([
  { year: '2023' },
  { year: '2024' },
  { year: '2025' },
])
</script>

<style scoped>
.home { 
  background: #000; 
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
}

.hero-section {
  height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #090909 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(transparent 95%, rgba(33,150,243,0.05) 95%),
    linear-gradient(90deg, transparent 95%, rgba(33,150,243,0.05) 95%);
  background-size: 30px 30px;
  animation: gridMove 15s linear infinite;
  opacity: 0.3;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transform: translateY(-5%);
}

.typing-text {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, #fff 30%, #2196f3 50%, #00bcd4 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;
  white-space: pre-line;
  text-shadow: 0 0 15px rgba(33, 150, 243, 0.4);
  text-align: center;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 10px rgba(33, 150, 243, 0.3);
  letter-spacing: 0.05em;
}

.hero-subtitle.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.glowing-line {
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(33,150,243,0) 0%,
    rgba(33,150,243,0.8) 50%,
    rgba(33,150,243,0) 100%
  );
  margin: 25px auto;
  position: relative;
  animation: expandLine 2s ease forwards, glowPulse 2s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(33,150,243,0.6);
}

@keyframes expandLine {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 200px;
    opacity: 1;
  }
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
}

.typing-container {
  position: relative;
  z-index: 2;
}

.typing-text {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, #fff 30%, #2196f3 50%, #00bcd4 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;
  white-space: pre-line;
  text-shadow: 0 0 10px rgba(33, 150, 243, 0.3);
  min-height: 14rem; /* 预留两行文字的空间 */
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.hero-subtitle.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.glowing-line {
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    rgba(33,150,243,0) 0%,
    rgba(33,150,243,0.8) 50%,
    rgba(33,150,243,0) 100%
  );
  margin: 30px auto;
  position: relative;
  animation: expandLine 2s ease forwards, glowPulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(33,150,243,0.5);
}

@keyframes expandLine {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 200px;
    opacity: 1;
  }
}

@keyframes glowPulse {
  0% {
    box-shadow: 0 0 5px rgba(33,150,243,0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(33,150,243,0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(33,150,243,0.5);
  }
}


@keyframes shine {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.tech-stack-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #000 0%, #090909 100%);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  background: linear-gradient(45deg, #fff, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  padding: 0 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #2196f3, transparent);
  border-radius: 3px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.tech-card {
  position: relative;
  padding: 40px 30px;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: var(--delay);
}

.tech-card:hover {
  transform: translateY(-10px);
  background: rgba(255,255,255,0.05);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.tech-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(33,150,243,0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card:hover .tech-glow {
  opacity: 1;
}

.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #090909 0%, #000000 100%);
}

.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  margin: 20px;
  min-width: 200px;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.8);
}

@keyframes shine {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-item {
    width: 100%;
    margin: 10px 0;
  }
}

/* 将时间线样式移到这里 */
.timeline-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #000 0%, #090909 100%);
  position: relative;
}

.timeline {
  max-width: 1200px;
  margin: 60px auto;
  position: relative;
  padding: 0 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom,
    rgba(33,150,243,0) 0%,
    rgba(33,150,243,0.8) 10%,
    rgba(33,150,243,0.8) 90%,
    rgba(33,150,243,0) 100%
  );
  transform: translateX(-50%);
}

.timeline-item {
  width: 50%;
  padding: 30px;
  position: relative;
  opacity: 0;
  transform: translateX(-100px);
  animation: slideIn 0.6s ease forwards;
  animation-delay: calc(var(--delay, 0) * 0.2s);
}

.timeline-item.right {
  left: 50%;
  transform: translateX(100px);
}

.timeline-content {
  background: rgba(255,255,255,0.03);
  padding: 30px;
  border-radius: 15px;
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #2196f3;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(33,150,243,0.8);
}

.timeline-item:not(.right) .timeline-content::before {
  right: -40px;
  transform: translate(50%, -50%);
}

.timeline-item.right .timeline-content::before {
  left: -40px;
  transform: translate(-50%, -50%);
}

.timeline-date {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #fff, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #fff;
}

.timeline-content p {
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
}

.timeline-content:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.05);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 70px;
  }
  
  .timeline-item.right {
    left: 0;
  }
  
  .timeline-content::before {
    left: -40px !important;
    transform: translate(-50%, -50%) !important;
  }
}
</style>
