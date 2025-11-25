<script setup lang="ts">
const reflections = [
  {
    title: '遇见乡村新面貌',
    mood: '清晨沿着乡村小路行走，看到村民忙碌的身影，我感受到乡村振兴不仅是数据，更是鲜活的人与情感。',
    tags: ['乡村振兴', '晨光', '人情味']
  },
  {
    title: '把握倾听的分寸',
    mood: '访谈中刻意保持沉默的瞬间，反而让对方愿意敞开心扉。倾听是一种尊重，也是一种力量。',
    tags: ['访谈技巧', '沟通', '尊重']
  },
  {
    title: '在困难中找到节奏',
    mood: '行程突变、天气炎热，但团队互相鼓劲。困难让我们更懂得调整节奏，也更懂得珍惜彼此的支持。',
    tags: ['团队协作', '自我调节', '成长']
  }
]
</script>

<template>
  <section class="page">
    <header class="hero-card">
      <div class="hero-content">
        <p class="eyebrow">实践感想 · 心路碎片</p>
        <h1>把真实的所见所感，写进成长的笔记</h1>
        <p class="lead">
          感想不是简单的记录，而是与土地、人群和自我连结后的沉淀。
          这里存放着一路走来那些温暖、复杂但珍贵的瞬间。
        </p>
      </div>
      <div class="metrics">
        <div class="metric">
          <span class="label">情感片段</span>
          <strong>24</strong>
          <span class="hint">累计记录</span>
        </div>
        <div class="metric">
          <span class="label">团队共创</span>
          <strong>8</strong>
          <span class="hint">共同感悟</span>
        </div>
        <div class="metric">
          <span class="label">返乡回访</span>
          <strong>3次</strong>
          <span class="hint">持续追踪</span>
        </div>
      </div>
    </header>

    <div class="card-grid">
      <article
          v-for="item in reflections"
          :key="item.title"
          class="reflection-card"
      >
        <div class="card-header">
          <div class="badge">现场感悟</div>
          <span class="dot"></span>
        </div>
        <h2>{{ item.title }}</h2>
        <p class="body">{{ item.mood }}</p>
        <div class="tag-list">
          <span v-for="tag in item.tags" :key="tag" class="tag">#{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0 64px;
  color: #1f4134;
}

.hero-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(63, 134, 111, 0.12);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  box-shadow: 0 25px 60px rgba(46, 92, 76, 0.18);
}

.hero-content {
  flex: 2;
  min-width: 260px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #5b937c;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.hero-card h1 {
  margin: 0 0 16px;
  font-size: 2.4rem;
  line-height: 1.3;
}

.lead {
  margin: 0;
  color: #3b6957;
  line-height: 1.7;
}

.metrics {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  min-width: 240px;
}

.metric {
  background: linear-gradient(145deg, rgba(168, 213, 186, 0.45), rgba(141, 194, 174, 0.35));
  border-radius: 18px;
  padding: 18px;
  text-align: center;
  border: 1px solid rgba(46, 92, 76, 0.08);
}

.metric .label {
  font-size: 0.85rem;
  color: #3b6957;
}

.metric strong {
  display: block;
  font-size: 1.8rem;
  margin: 6px 0;
  color: #1d3a2f;
}

.metric .hint {
  font-size: 0.8rem;
  color: #5b937c;
}

.card-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.reflection-card {
  padding: 28px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(46, 92, 76, 0.08);
  box-shadow: 0 20px 40px rgba(28, 63, 51, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.reflection-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(28, 63, 51, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.badge {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(91, 147, 124, 0.15);
  color: #3b6957;
  font-size: 0.8rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5b937c;
  box-shadow: 0 0 6px rgba(91, 147, 124, 0.6);
}

.reflection-card h2 {
  margin: 0 0 12px;
  font-size: 1.4rem;
  color: #1f4134;
}

.body {
  margin: 0 0 20px;
  line-height: 1.7;
  color: #3b6957;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(46, 92, 76, 0.08);
  color: #1f4134;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .hero-card {
    padding: 28px;
  }

  .hero-card h1 {
    font-size: 1.8rem;
  }
}
</style>

