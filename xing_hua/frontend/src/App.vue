<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'

const route = useRoute()
</script>

<template>
  <div id="app">
    <header class="app-header">
      <AppNavbar />
      <div class="title-stack">
        <p class="page-label">当前页面</p>
        <h1 class="page-title">
          <span class="title-text">{{ route.meta.title || '未命名页面' }}</span>
          <span class="title-underline"></span>
        </h1>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* 江南水乡主题 - 整体背景渐变 */
html, body, #app {
  height: 100%;
  width: 100vw;         /* 确保始终铺满窗口 */
  max-width: 100vw;     /* 防止子元素撑大 */
  margin: 0;
  padding: 0;
  overflow-x: hidden;   /* 禁止横向滚动 */
  box-sizing: border-box;
  /* 江南水乡背景 - 从水色到青绿的渐变，营造水乡氛围 */
  background: linear-gradient(135deg, #E8F4F8 0%, #B8E6E1 30%, #A8D5BA 70%, #D4E9D7 100%);
}

#app {
  min-height: 100vh;    /* 确保始终占满整个可见高度 */
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 0;
  padding: 24px;
  animation: fadeIn 0.6s ease;
}

.app-header {
  background: rgba(72, 155, 140, 0.85);
  backdrop-filter: blur(24px);
  border-bottom: 2px solid rgba(74, 155, 140, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(74, 155, 140, 0.2);
  animation: slideDown 0.5s ease;
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.title-stack {
  text-align: center;
}

.page-label {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 8px 0 0;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.title-text {
  background: linear-gradient(135deg, #e9fff7 0%, #d6f4ec 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  animation: glowText 3s ease-in-out infinite;
}

@supports (-webkit-background-clip: text) or (background-clip: text) {
  .title-text {
    color: transparent;
  }
}

.title-underline {
  display: inline-block;
  width: 72px;
  height: 3px;
  margin-top: 8px;
  border-radius: 999px;
  background: rgba(233, 255, 247, 0.8);
  box-shadow: 0 0 12px rgba(233, 255, 247, 0.8);
  animation: pulse 2.5s infinite;
}

/* 动画效果 - 江南水乡风格 */
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes glowText {
  /* 江南水乡文字发光效果 - 增强对比度和可读性 */
  0%, 100% { 
    text-shadow: 
      0 1px 2px rgba(255, 255, 255, 0.4),
      0 0 6px rgba(26, 61, 50, 0.8); 
  }
  50% { 
    text-shadow: 
      0 1px 2px rgba(255, 255, 255, 0.5),
      0 0 8px rgba(45, 90, 74, 0.9),
      0 0 12px rgba(74, 155, 140, 0.6); 
  }
}

@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: translateX(-50%) scaleX(1); }
  50% { opacity: 1; transform: translateX(-50%) scaleX(1.1); }
}

/* 响应式 */
@media (max-width: 768px) {
  .page-title { font-size: 1.6rem; }
  .title-underline { width: 50px; }
}

@media (max-width: 480px) {
  .page-title { font-size: 1.3rem; }
}
</style>
