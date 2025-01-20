<template>
  <div class="gudupao-homepage">
    <!-- 英雄区域 -->
    <section class="hero bg-cover bg-center text-white py-20" :style="{ backgroundImage: `url('/assets/img/hero/hero-1.jpg')` }">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          古都炮科技：创新驱动未来
        </h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          我们致力于提供高质量的技术解决方案，帮助企业在数字时代实现创新和转型
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink 
            to="/about" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            了解我们
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 服务概览 -->
    <section class="services py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">
          我们的服务
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(service, key) in serviceItems" 
            :key="key" 
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl text-blue-600 mb-4">
              <i :class="getServiceIcon(key)"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们预览 -->
    <section class="about-preview py-16">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0 md:mr-12">
          <img 
            src="/assets/img/about/about.jpg" 
            alt="Gudupao Team" 
            class="rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">
            关于古都炮
          </h2>
          <p class="text-gray-700 mb-6">
            古都炮科技是一家专注于创新技术解决方案的科技公司，致力于为客户提供高质量、高效率的软件开发和技术服务。我们的团队由经验丰富的技术专家组成，擅长将前沿技术转化为实际的商业价值。
          </p>
          <div class="grid md:grid-cols-3 gap-4">
            <div 
              v-for="(value, key) in companyValues" 
              :key="key" 
              class="bg-blue-50 p-4 rounded-lg text-center"
            >
              <h3 class="font-semibold text-blue-600">{{ value }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const serviceItems = {
  softwareDev: {
    title: '软件开发',
    description: '为您的业务需求定制高质量软件解决方案'
  },
  cloudComputing: {
    title: '云计算',
    description: '提供灵活、安全的云计算基础设施'
  },
  aiML: {
    title: '人工智能',
    description: '利用人工智能和机器学习提升业务智能'
  },
  dataAnalysis: {
    title: '数据分析',
    description: '通过数据洞察帮助企业做出明智决策'
  },
  cybersecurity: {
    title: '网络安全',
    description: '全方位保护您的数字资产安全'
  },
  techConsulting: {
    title: '技术咨询',
    description: '为企业数字化转型提供专业咨询'
  }
}

const companyValues = {
  innovation: '创新驱动',
  quality: '质量至上',
  customerFirst: '客户为先'
}

const getServiceIcon = (key) => {
  const icons = {
    softwareDev: 'fas fa-code',
    cloudComputing: 'fas fa-cloud',
    aiML: 'fas fa-brain',
    dataAnalysis: 'fas fa-chart-line',
    cybersecurity: 'fas fa-shield-alt',
    techConsulting: 'fas fa-laptop-code'
  }
  return icons[key] || 'fas fa-question'
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
</style>