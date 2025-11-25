<script setup lang="ts">
const timeline = [
  {
    date: 'Day 1',
    title: '抵达与落脚',
    detail: '团队分头走访民宿、村委与产业园，梳理关键联系人，确认联合办公点。'
  },
  {
    date: 'Day 4',
    title: '村民茶叙',
    detail: '邀请 12 位村民参加院坝茶叙，收集生产痛点，逐步建立信任。'
  },
  {
    date: 'Day 9',
    title: '沉浸式夜访',
    detail: '跟随护河队夜巡，记录河岸治理真实场景，补齐影像素材。'
  },
  {
    date: 'Day 14',
    title: '成果共创',
    detail: '面向村委与青年代表展示阶段成果，并现场调整行动路线。'
  }
]

const gallery = [
  { caption: '晨雾中的梯田', note: '6:10 航拍记录' },
  { caption: '老屋修葺现场', note: '村民自发行动' },
  { caption: '儿童绘本课堂', note: '共建乡村美育' },
  { caption: '夜间护河小队', note: '“河段责任人”制度' }
]
</script>

<template>
  <section class="page">
    <header class="hero">
      <h1>实践回顾 · 用时间线串联高光与挑战</h1>
      <p>
        14 天的奔忙、数百公里的移动，在关键节点留下标记，就能看见实践如何从灵感变成真实行动。
      </p>
    </header>

    <div class="timeline">
      <article v-for="item in timeline" :key="item.title" class="timeline-item">
        <div class="time-dot"></div>
        <div class="time-line"></div>
        <div class="content">
          <p class="date">{{ item.date }}</p>
          <h2>{{ item.title }}</h2>
          <p class="detail">{{ item.detail }}</p>
        </div>
      </article>
    </div>

    <section class="gallery">
      <article v-for="item in gallery" :key="item.caption" class="gallery-card">
        <div class="photo-placeholder">
          <span>{{ item.caption }}</span>
        </div>
        <p class="note">{{ item.note }}</p>
      </article>
    </section>
  </section>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 0 64px;
  color: #1d3a2f;
}

.hero {
  text-align: center;
  margin-bottom: 36px;
}

.hero h1 {
  margin: 0 0 12px;
  font-size: 2.2rem;
}

.hero p {
  margin: 0 auto;
  max-width: 600px;
  color: #3c6b58;
  line-height: 1.7;
}

.timeline {
  position: relative;
  margin-bottom: 48px;
}

.timeline-item {
  position: relative;
  padding-left: 64px;
  margin-bottom: 28px;
  display: flex;
  align-items: flex-start;
}

.time-dot {
  position: absolute;
  left: 22px;
  top: 14px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #5e9b81;
  box-shadow: 0 0 12px rgba(94, 155, 129, 0.8);
}

.time-line {
  position: absolute;
  left: 29px;
  top: 30px;
  width: 2px;
  height: calc(100% + 10px);
  background: rgba(94, 155, 129, 0.4);
}

.timeline-item:last-child .time-line {
  display: none;
}

.content {
  background: rgba(255, 255, 255, 0.86);
  border-radius: 20px;
  padding: 22px 24px;
  border: 1px solid rgba(47, 102, 83, 0.12);
  box-shadow: 0 15px 35px rgba(27, 58, 47, 0.12);
  width: 100%;
}

.date {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #4d8e75;
  font-size: 0.78rem;
  margin: 0 0 8px;
}

.content h2 {
  margin: 0 0 8px;
  font-size: 1.3rem;
}

.detail {
  margin: 0;
  color: #3c6b58;
  line-height: 1.6;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.gallery-card {
  background: rgba(255, 255, 255, 0.88);
  border-radius: 20px;
  padding: 18px;
  border: 1px solid rgba(47, 102, 83, 0.12);
  box-shadow: 0 15px 30px rgba(25, 54, 44, 0.08);
}

.photo-placeholder {
  height: 120px;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(164, 214, 187, 0.35), rgba(133, 186, 165, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d3a2f;
  font-weight: 600;
  text-align: center;
  padding: 0 12px;
}

.note {
  margin: 12px 0 0;
  text-align: center;
  color: #3c6b58;
}

@media (max-width: 640px) {
  .timeline-item {
    padding-left: 46px;
  }

  .content {
    padding: 18px;
  }
}
</style>

