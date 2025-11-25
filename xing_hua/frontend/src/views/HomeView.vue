<!-- src/views/HomeView.vue -->
<template>
  <div class="container">
    <!-- 第一部分：实践足迹（实践见闻）- 上方占比大 -->
    <div class="practice-footprint" id="footprint">
      <div class="footprint-header">
        <h1 class="main-title">
          <span class="title-text">实践足迹</span>
          <div class="title-underline"></div>
        </h1>
        <p class="subtitle">记录每一次实践的精彩瞬间与深刻感悟</p>
      </div>
      
      <div class="footprint-content">
        <div class="footprint-grid">
          <div class="footprint-item large">
            <div class="item-image">
              <div class="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="item-content">
              <h3>实践见闻</h3>
              <p>深入基层，亲身体验，记录真实的社会实践故事。每一次走访、每一次访谈、每一次观察，都是我们理解社会、服务社会的宝贵财富。</p>
              <div class="item-stats">
                <span class="stat">走访地点：15个</span>
                <span class="stat">访谈对象：32人</span>
                <span class="stat">实践天数：28天</span>
              </div>
            </div>
          </div>
          
          <div class="footprint-item" id="research">
            <div class="item-image">
              <div class="image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <div class="item-content">
              <h4>调研成果</h4>
              <p>收集一手资料，形成详实调研报告</p>
            </div>
          </div>
          
          <div class="footprint-item" id="journal">
            <div class="item-image">
              <div class="image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="item-content">
              <h4>实践日志</h4>
              <p>记录每日实践心得与感悟</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第二部分：四个小部分（点击进入） -->
    <div class="practice-sections" id="explore">
      <h2 class="section-title">实践探索</h2>
      <div class="sections-grid">
        <div
            v-for="(item, idx) in practiceSections"
            :key="idx"
            class="section-card"
            @click="navigateTo(item.link)"
            :style="{ animationDelay: `${idx * 0.1}s` }"
        >
          <div class="card-content">
            <div class="card-icon">
              <div class="icon-background">
                <component :is="item.icon" />
              </div>
            </div>
            <div class="card-info">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-desc">{{ item.desc }}</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="card-glow"></div>
          <div class="card-border"></div>
        </div>
      </div>
    </div>

    <!-- 第三部分：交互式地图 -->
    <div class="interactive-map">
      <div class="map-header">
        <h2>实践足迹地图</h2>
        <p>点击地图标记，探索我们的实践足迹</p>
      </div>
      <MapView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import MapView from '../components/MapView.vue'

const router = useRouter()

// 四个实践探索部分
const practiceSections = [
  {
    title: '实践感想',
    desc: '用文字保存走访中的情绪波动，将瞬间的触动变成长期的成长记录。',
    link: '/practice-feeling',
    icon: 'ReflectionIcon'
  },
  {
    title: '实践总结',
    desc: '梳理调研成果、经验教训与可复用方法论，让下一次行动更笃定。',
    link: '/practice-summary',
    icon: 'SummaryIcon'
  },
  {
    title: '实践心得',
    desc: '提炼内心体会与行动指南，形成团队内部共享的经验库。',
    link: '/practice-insight',
    icon: 'MethodIcon'
  },
  {
    title: '实践回顾',
    desc: '以时间线和影像重温高光时刻，记录那些值得珍藏的故事。',
    link: '/practice-review',
    icon: 'TeamIcon'
  }
]

// 图标组件
const ReflectionIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `
}

const SummaryIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const MethodIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const TeamIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 21V19C23 18.1137 22.7312 17.2458 22.2318 16.4999C21.7324 15.754 21.0202 15.1629 20.1962 14.7956C19.3721 14.4282 18.4656 14.3003 17.5743 14.4263C16.683 14.5522 15.8449 14.9277 15.1528 15.5198L23 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1876 4.55232C18.7521 5.25392 19.087 6.11853 19.1429 7.01754C19.1988 7.91655 18.9739 8.80511 18.4999 9.57993C18.0259 10.3548 17.3259 10.9789 16.5 11.37" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const navigateTo = (link: string) => {
  router.push(link)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  /* 江南水乡主题背景 - 从水色到青绿的渐变，营造水乡氛围 */
  background: linear-gradient(135deg, #E8F4F8 0%, #B8E6E1 30%, #A8D5BA 70%, #D4E9D7 100%);
  color: #2D5A4A;  /* 深青色文字，符合水乡特色 */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 40px 24px;
  position: relative;
  overflow-x: hidden;
}

/* 背景装饰 - 江南水乡风格 */
.container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 江南水乡背景装饰 - 水色、竹色、荷色的柔和光晕 */
  background-image:
      radial-gradient(circle at 20% 80%, rgba(72, 155, 140, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(127, 176, 105, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(184, 230, 225, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* 第一部分：实践足迹 - 上方占比大 */
.practice-footprint {
  margin-bottom: 60px;
}

.footprint-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}

.main-title {
  position: relative;
  margin: 0 0 16px 0;
  font-size: 3rem;
  font-weight: 700;
  /* 江南水乡标题渐变 - 从深青色到青色，增加对比度 */
  background: linear-gradient(135deg, #1a3d32 0%, #2D5A4A 50%, #4A9B8C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  
  /* 备用样式：如果渐变不支持，使用深色文字确保可读性 */
  color: #1a3d32;
}

/* 确保渐变文字在支持的环境中正确显示 */
@supports (-webkit-background-clip: text) or (background-clip: text) {
  .main-title {
    color: transparent;
  }
}

.title-text {
  position: relative;
  display: inline-block;
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  /* 江南水乡下划线 - 深青色渐变，增加对比度 */
  background: linear-gradient(135deg, #1a3d32 0%, #2D5A4A 100%);
  border-radius: 2px;
  /* 水乡风格的发光效果 */
  box-shadow: 0 0 20px rgba(74, 155, 140, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  color: #2D5A4A;  /* 深青色副标题，增加对比度 */
  margin: 0 0 20px 0;
  font-weight: 300;
  letter-spacing: 0.05em;
}

/* 实践足迹内容网格 */
.footprint-content {
  margin-top: 40px;
}

.footprint-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.footprint-item {
  background: rgba(184, 230, 225, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(74, 155, 140, 0.2);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.footprint-item:hover {
  transform: translateY(-4px);
  border-color: rgba(74, 155, 140, 0.4);
  box-shadow: 0 8px 24px rgba(74, 155, 140, 0.2);
}

.footprint-item.large {
  grid-row: span 2;
  display: flex;
  flex-direction: column;
}

.item-image {
  margin-bottom: 20px;
  text-align: center;
}

.image-placeholder {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(74, 155, 140, 0.1), rgba(127, 176, 105, 0.1));
  border: 2px solid rgba(74, 155, 140, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4A9B8C;
}

.footprint-item.large .image-placeholder {
  width: 120px;
  height: 120px;
}

.item-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #2D5A4A;
}

.item-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #2D5A4A;
}

.item-content p {
  font-size: 0.95rem;
  color: #4A9B8C;
  margin: 0 0 20px 0;
  line-height: 1.6;
}

.item-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
}

.stat {
  background: rgba(74, 155, 140, 0.1);
  color: #2D5A4A;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(74, 155, 140, 0.2);
}

/* 第二部分：四个小部分 */
.practice-sections {
  margin-bottom: 60px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 40px 0;
  color: #2D5A4A;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #1a3d32 0%, #2D5A4A 100%);
  border-radius: 2px;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.section-card {
  background: rgba(184, 230, 225, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(74, 155, 140, 0.2);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-card:hover {
  transform: translateY(-8px);
  border-color: rgba(74, 155, 140, 0.5);
  box-shadow:
      0 20px 40px rgba(74, 155, 140, 0.2),
      0 0 0 1px rgba(74, 155, 140, 0.2),
      0 0 40px rgba(74, 155, 140, 0.1);
}

.section-card:hover .card-glow {
  opacity: 1;
  transform: scale(1.02);
}

.section-card:hover .card-border {
  opacity: 1;
  transform: scale(1.02);
}

.card-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  position: relative;
  z-index: 2;
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
}

.icon-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(74, 155, 140, 0.2), rgba(127, 176, 105, 0.2));
  border: 1px solid rgba(74, 155, 140, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #4A9B8C;
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #2D5A4A;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.95rem;
  color: #4A9B8C;
  margin: 0 0 20px 0;
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
}

.card-arrow {
  flex-shrink: 0;
  color: #4A9B8C;
  opacity: 0.7;
  transition: all 0.3s ease;
  margin-left: 8px;
}

.section-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(4px);
  color: #7FB069;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(74, 155, 140, 0.1), rgba(127, 176, 105, 0.1));
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(74, 155, 140, 0.2);
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

/* 第三部分：交互式地图 */
.interactive-map {
  margin-top: 40px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(74, 155, 140, 0.2);
}

.map-header {
  background: rgba(184, 230, 225, 0.8);
  padding: 20px 24px;
  border-bottom: 1px solid rgba(74, 155, 140, 0.2);
}

.map-header h2 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2D5A4A;
}

.map-header p {
  margin: 0;
  font-size: 0.9rem;
  color: #4A9B8C;
}

/* 动画 */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footprint-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .footprint-item.large {
    grid-row: span 1;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 24px 16px;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .sections-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-card {
    padding: 20px;
  }

  .footprint-header {
    margin-bottom: 30px;
  }

  .subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.8rem;
  }

  .section-card {
    padding: 16px;
  }

  .card-content {
    gap: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }

  .map-header {
    padding: 16px 20px;
  }

  .map-header h2 {
    font-size: 1.3rem;
  }
  
  .footprint-item {
    padding: 20px;
  }
  
  .item-stats {
    flex-direction: column;
    gap: 8px;
  }
}
</style>