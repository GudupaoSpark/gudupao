<template>
  <footer class="footer">
    <div class="container">
      <!-- 主要内容区 -->
      <div class="footer-content">
        <!-- 公司信息 -->
        <div class="footer-section">
          <router-link to="/" class="footer-logo">
            <img src="/assets/img/logo.png" alt="Gudupao Logo" class="logo-img">
          </router-link>
          <p class="company-desc">Pick up your own torch and light up your own future!</p>
          <div class="social-links">
            <a href="https://space.bilibili.com/1016857888" target="_blank" class="social-link" title="Bilibili">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>
            </a>
            <a href="https://qm.qq.com/q/B3vKejsGBi" target="_blank" class="social-link" title="QQ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon"><path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2Z"/></svg>
            </a>
            <a href="https://youtube.com/@GudupaoSpark" target="_blank" class="social-link" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://discord.gg/SC78fv3ZRF" target="_blank" class="social-link" title="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
            <a href="https://x.com/GudupaoSpark" target="_blank" class="social-link" title="X">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h3 class="footer-title">{{ t('footer.quickLinks') }}</h3>
          <ul class="footer-links">
            <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </div>

        <!-- 友情链接 -->
        <div class="footer-section">
          <h3 class="footer-title">{{t('footer.Friendly-links')}}</h3>
          <ul class="footer-links">
            <li><a href="https://open.gudupao.top" target="_blank">GOS</a></li>
            <li><a href="https://haaaash.gudupao.top/" target="_blank">haaaash</a></li>
            <li><a href="https://code-fix.gudupao.top" target="_blank">CodeFix</a></li>
            <li><a href="https://1nk.ltd" target="_blank">咸鱼短链</a></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="footer-section">
          <h3 class="footer-title">{{t('footer.contactUs')}}</h3>
          <ul class="footer-contact">
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <a href="mailto:officialt@gudupao.top">official@gudupao.top</a>
            </li>
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>{{t('footer.address')}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="divider"></div>

      <!-- 版权信息 -->
      <div class="copyright">
        <p>© {{ currentYear }} Gudupao Spark Inc. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #1a202c;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  display: inline-block;
}

.logo-img {
  height: 40px;
  width: auto;
}

.company-desc {
  color: #a0aec0;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: #e2e8f0;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3182ce;
  transform: translateY(-3px);
}

.social-link:hover .social-icon {
  fill: #ffffff;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #2b6cb0;
  padding-left: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: #4a5568;
  transition: all 0.3s ease;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #4a5568;
  font-size: 0.95rem;
}

.footer-contact a {
  color: #4a5568;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-contact a:hover {
  color: #2b6cb0;
}

.contact-icon {
  width: 20px;
  height: 20px;
  fill: #4a5568;
}

.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.copyright {
  text-align: center;
  color: #4a5568;
  font-size: 0.875rem;
}

.icp {
  margin-top: 0.5rem;
  color: #718096;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .social-links {
    justify-content: center;
  }

  .footer-section {
    text-align: center;
  }

  .footer-contact li {
    justify-content: center;
  }

  .footer-links a:hover {
    padding-left: 0;
  }
}
</style>