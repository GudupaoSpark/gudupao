<template>
  <div class="contact-page">
    <div class="hero-section">
      <div class="container">
        <h1 class="title" v-motion
          :initial="{ y: 50, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 800 } }">
          {{ t('contact.title') }}
        </h1>
        <p class="subtitle" v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 800, delay: 200 } }">
          {{ t('contact.subtitle') }}
        </p>
      </div>
    </div>

    <div class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- 联系信息卡片 -->
          <div class="contact-info" v-motion
            :initial="{ x: -50, opacity: 0 }"
            :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
            <h2>{{ t('contact.getInTouch') }}</h2>
            <div class="info-items">
              <div class="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:official@gudupao.top">official@gudupao.top</a>
              </div>
              <div class="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{{ t('footer.address') }}</span>
              </div>
            </div>
          </div>

          <!-- 联系表单 -->
          <form class="contact-form" @submit.prevent="handleSubmit" v-motion
            :initial="{ x: 50, opacity: 0 }"
            :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
            <div class="form-group">
              <label for="name">{{ t('contact.form.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                :placeholder="t('contact.form.namePlaceholder')"
                required
              >
            </div>
            <div class="form-group">
              <label for="email">{{ t('contact.form.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                :placeholder="t('contact.form.emailPlaceholder')"
                required
              >
            </div>
            <div class="form-group">
              <label for="message">{{ t('contact.form.message') }}</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                :placeholder="t('contact.form.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              {{ t('contact.form.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from 'nuxt/app'  // 添加这行

const { t } = useI18n()

// 设置页面标题
useHead({
  title: 'Contact | Gudupao'
})

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  // 这里添加表单提交逻辑
  console.log('Form submitted:', formData.value)
  // 重置表单
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
}

.hero-section {
  background: linear-gradient(135deg, #f6f8fb 0%, #f1f4f8 100%);
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.title {
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #4a5568;
}

.info-item a {
  color: #4a5568;
  text-decoration: none;
  transition: color 0.2s;
}

.info-item a:hover {
  color: #2b6cb0;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a202c;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  transition: all 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3182ce;
  background: white;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.submit-button {
  background: #3182ce;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-button:hover {
  background: #2b6cb0;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-section {
    padding: 3rem 0;
  }

  .title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>