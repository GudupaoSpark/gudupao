<template>
  <div class="contact-page">
    <PageHeader
      title="联系我们"
      description="我们随时准备倾听您的需求，共同探讨技术解决方案"
    />

    <!-- 联系表单和联系信息 -->
    <section class="contact-section py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- 联系表单 -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">发送消息</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block mb-2">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required 
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                />
              </div>
              <div>
                <label for="email" class="block mb-2">电子邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required 
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                />
              </div>
              <div>
                <label for="message" class="block mb-2">您的消息</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  required 
                  rows="5" 
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                ></textarea>
              </div>
              <button 
                type="submit" 
                class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                提交
              </button>
            </form>
          </div>

          <!-- 联系信息 -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">联系方式</h2>
            <div class="space-y-6">
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-blue-600 mr-4 text-2xl"></i>
                <div>
                  <h3 class="font-semibold">地址</h3>
                  <p>广州市花都区</p>
                </div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope text-blue-600 mr-4 text-2xl"></i>
                <div>
                  <h3 class="font-semibold">邮箱</h3>
                  <p>contact@gudupao.com</p>
                </div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-clock text-blue-600 mr-4 text-2xl"></i>
                <div>
                  <h3 class="font-semibold">工作时间</h3>
                  <p>周一至周五 9:00-18:00</p>
                </div>
              </div>
            </div>

            <!-- Leaflet 地图 -->
            <ClientOnly>
              <div class="mt-8 rounded-lg overflow-hidden shadow-lg">
                <div id="contact-map" class="w-full h-[300px]"></div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '~/components/PageHeader.vue'
import { ref, onMounted } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

onMounted(() => {
  if (process.client) {
    import('leaflet/dist/leaflet.css')
    import('leaflet').then(L => {
      // 广州市花都区坐标
      const companyLocation = [23.4025, 113.3205]
      
      // 初始化地图
      const map = L.map('contact-map', {
        attributionControl: false  // 隐藏 Leaflet 版权信息
      }).setView(companyLocation, 12)
      
      // 使用默认的 OpenStreetMap 图层
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map)
      
      // 添加标记
      L.marker(companyLocation)
        .addTo(map)
        .bindPopup('Gudupao 公司')
        .openPopup()
      
      // 比例尺
      L.control.scale({
        position: 'bottomleft',
        maxWidth: 100,
        imperial: false
      }).addTo(map)
    })
  }
})

const submitForm = async () => {
  try {
    // 模拟表单提交
    console.log('表单数据:', formData.value)
    
    // 实际项目中应使用真实的后端API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })

    if (response.success) {
      // 显示成功消息
      alert('消息发送成功！')
      
      // 重置表单
      formData.value = {
        name: '',
        email: '',
        message: ''
      }
    } else {
      // 显示错误消息
      alert('发送失败，请稍后重试')
    }
  } catch (error) {
    console.error('表单提交错误:', error)
    alert('发送失败，请检查网络连接')
  }
}
</script>

<style>
/* 隐藏 Leaflet logo */
.leaflet-control-attribution {
  display: none !important;
}
</style>

<style scoped>
.contact-section input,
.contact-section textarea {
  transition: border-color 0.3s ease;
}

.contact-section input:focus,
.contact-section textarea:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
</style>