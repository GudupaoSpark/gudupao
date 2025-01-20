<template>
  <div class="about-page">
    <!-- 页面标题和简介 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-6">关于古都炮科技</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          古都炮科技是一家充满激情和创新精神的科技公司，我们致力于为企业提供尖端的技术解决方案。通过深入理解客户需求，我们将前沿技术转化为切实可行的商业价值。
        </p>
      </div>
    </section>

    <!-- 公司价值观 -->
    <section class="values py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">我们的核心价值观</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(value, key) in companyValues" 
            :key="key" 
            class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
          >
            <div class="text-5xl text-blue-600 mb-6">
              <i :class="getValueIcon(key)"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">{{ value.title }}</h3>
            <p class="text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">我们的团队</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.name" 
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-64 object-cover"
            />
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
              <p class="text-gray-600 mb-4">{{ member.role }}</p>
              <div class="flex justify-center space-x-4">
                <a 
                  v-for="social in member.socials" 
                  :key="social.platform" 
                  :href="social.link" 
                  target="_blank" 
                  class="text-gray-700 hover:text-blue-600"
                >
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司历程 -->
    <section class="timeline py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">公司发展历程</h2>
        <div class="relative pl-8">
          <div 
            v-for="milestone in companyMilestones" 
            :key="milestone.year" 
            class="mb-8 pl-6 relative"
          >
            <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-6 top-2"></div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-2xl font-semibold text-blue-600 mb-4">
                {{ milestone.year }}
              </h3>
              <p class="text-gray-700">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const getValueIcon = (key) => {
  const icons = {
    innovation: 'fas fa-lightbulb',
    integrity: 'fas fa-handshake',
    collaboration: 'fas fa-users'
  }
  return icons[key] || 'fas fa-star'
}

const companyValues = {
  innovation: {
    title: '技术创新',
    description: '持续追求技术创新，为客户提供前沿解决方案'
  },
  integrity: {
    title: '诚信为本',
    description: '诚信是我们的核心价值，以诚信赢得信任'
  },
  collaboration: {
    title: '团队协作',
    description: '团队协作，共同成长，实现卓越'
  }
}

const teamMembers = [
  {
    name: '张明',
    role: '创始人 & CEO',
    image: '/assets/img/team/team-1.jpg',
    socials: [
      { platform: 'linkedin', icon: 'fab fa-linkedin', link: '#' },
      { platform: 'twitter', icon: 'fab fa-twitter', link: '#' }
    ]
  },
  {
    name: '李华',
    role: '技术总监',
    image: '/assets/img/team/team-2.jpg',
    socials: [
      { platform: 'github', icon: 'fab fa-github', link: '#' },
      { platform: 'twitter', icon: 'fab fa-twitter', link: '#' }
    ]
  },
  {
    name: '王芳',
    role: '产品经理',
    image: '/assets/img/team/team-3.jpg',
    socials: [
      { platform: 'linkedin', icon: 'fab fa-linkedin', link: '#' },
      { platform: 'dribbble', icon: 'fab fa-dribbble', link: '#' }
    ]
  }
]

const companyMilestones = [
  { year: '2020', description: '公司成立，专注于软件开发和技术创新' },
  { year: '2021', description: '获得首轮融资，扩大研发团队' },
  { year: '2022', description: '推出首个AI驱动的企业解决方案' },
  { year: '2023', description: '成为多个科技创新项目的领先者' },
  { year: '2024', description: '获得行业最佳技术创新奖' }
]
</script>

<style scoped>
</style>