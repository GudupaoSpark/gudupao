<template>
  <div class="services-page">
    <!-- 服务标题和简介 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-6">我们的服务</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          我们提供全面的技术解决方案，助力企业数字化转型
        </p>
      </div>
    </section>

    <!-- 详细服务 -->
    <section class="services-grid py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, key) in serviceItems" 
            :key="key" 
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div class="text-5xl text-blue-600 mb-6">
              <i :class="getServiceIcon(key)"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">
              {{ service.description }}
            </p>
            <div class="space-y-3">
              <div 
                v-for="detail in service.details" 
                :key="detail" 
                class="flex items-center"
              >
                <i class="fas fa-check-circle text-green-500 mr-3"></i>
                <span>{{ detail }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术能力 -->
    <section class="tech-capabilities bg-blue-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">我们的技术能力</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div 
            v-for="tech in technologiesWeUse" 
            :key="tech.name" 
            class="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
          >
            <i 
              :class="tech.icon" 
              class="text-6xl text-blue-600 mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold">{{ tech.name }}</h3>
            <p class="text-gray-600 mt-2">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 案例展示 -->
    <section class="case-studies py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">成功案例</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in successProjects" 
            :key="project.name" 
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">{{ project.name }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-blue-600 font-medium">{{ project.industry }}</span>
                <a 
                  :href="project.link" 
                  target="_blank" 
                  class="text-blue-600 hover:underline"
                >
                  查看详情
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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

const serviceItems = {
  softwareDev: {
    title: '软件开发',
    description: '为您的业务需求定制高质量软件解决方案',
    details: [
      '定制化软件开发',
      '敏捷开发方法',
      '跨平台解决方案'
    ]
  },
  cloudComputing: {
    title: '云计算服务',
    description: '提供灵活、安全的云计算基础设施',
    details: [
      '云基础架构设计',
      '混合云解决方案',
      '性能优化'
    ]
  },
  aiML: {
    title: '人工智能',
    description: '利用人工智能和机器学习提升业务智能',
    details: [
      '机器学习模型开发',
      '自然语言处理',
      '计算机视觉'
    ]
  },
  dataAnalysis: {
    title: '数据分析',
    description: '通过数据洞察帮助企业做出明智决策',
    details: [
      '大数据分析',
      '可视化报告',
      '预测性分析'
    ]
  },
  cybersecurity: {
    title: '网络安全',
    description: '全方位保护您的数字资产安全',
    details: [
      '安全评估',
      '渗透测试',
      '风险管理'
    ]
  },
  techConsulting: {
    title: '技术咨询',
    description: '为企业数字化转型提供专业咨询',
    details: [
      '数字化战略',
      '技术路线图',
      '创新咨询'
    ]
  }
}

const technologiesWeUse = [
  {
    name: 'Vue.js',
    icon: 'fab fa-vuejs',
    description: '现代前端框架'
  },
  {
    name: 'Python',
    icon: 'fab fa-python',
    description: '数据科学与AI'
  },
  {
    name: 'Docker',
    icon: 'fab fa-docker',
    description: '容器化部署'
  },
  {
    name: 'AWS',
    icon: 'fab fa-aws',
    description: '云计算平台'
  }
]

const successProjects = [
  {
    name: '智能客服系统',
    image: '/assets/img/project/project-1.jpg',
    description: '基于AI的智能客服解决方案',
    industry: '电商',
    link: '#'
  },
  {
    name: '企业数据分析平台',
    image: '/assets/img/project/project-2.jpg',
    description: '提供实时数据洞察',
    industry: '金融',
    link: '#'
  },
  {
    name: '云安全管理系统',
    image: '/assets/img/project/project-3.jpg',
    description: '全面的云安全解决方案',
    industry: '科技',
    link: '#'
  }
]
</script>

<style scoped>
.services-grid .service-item {
  transition: transform 0.3s ease;
}

.services-grid .service-item:hover {
  transform: translateY(-10px);
}
</style>