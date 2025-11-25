<script setup lang="ts">
const insights = [
  {
    phase: '走进田间',
    insight: '真正理解乡村，需要把脚伸进泥土里。在田边蹲下来的那一刻，我才意识到数据背后是沉甸甸的劳作。',
    action: '建立“田间访谈”模板，要求每次调研都与一位生产者同行至少 30 分钟。'
  },
  {
    phase: '对话青年',
    insight: '回乡青年最怕被贴“逃离”或“失败”标签，他们需要的是理解和一起试错的伙伴。',
    action: '设计“回乡起步清单”，帮助青年梳理资源、伙伴与第一笔资金的路径。'
  },
  {
    phase: '复盘现场',
    insight: '写日志的过程其实是自我校准的过程，让我们在情绪与事实之间找到平衡。',
    action: '实践队坚持“日更日志”，并在每周共创会上抽取片段共读。'
  }
]
</script>

<template>
  <section class="page">
    <header class="hero">
      <p class="eyebrow">实践心得 · 内在动能</p>
      <h1>把每一次触动、困惑与突破，都整理为可复用的经验</h1>
      <p class="intro">
        心得不是流水账，而是让下次行动更笃定的“行动指南”。我们尝试用结构化的方式记录那些让团队发生变化的瞬间。
      </p>
    </header>

    <div class="insight-list">
      <article v-for="item in insights" :key="item.phase" class="insight-card">
        <div class="phase">{{ item.phase }}</div>
        <p class="insight">{{ item.insight }}</p>
        <div class="action-block">
          <span class="label">行动提炼</span>
          <p>{{ item.action }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 920px;
  margin: 0 auto;
  padding: 40px 0 64px;
  color: #19382c;
}

.hero {
  text-align: center;
  margin-bottom: 36px;
  padding: 0 18px;
}

.eyebrow {
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: #4d8e75;
  margin-bottom: 10px;
}

.hero h1 {
  font-size: 2.3rem;
  margin: 0 0 16px;
  line-height: 1.4;
}

.intro {
  margin: 0 auto;
  max-width: 620px;
  color: #3a6856;
  line-height: 1.7;
}

.insight-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.insight-card {
  padding: 28px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(46, 92, 76, 0.08);
  box-shadow: 0 20px 40px rgba(20, 45, 36, 0.1);
}

.phase {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #4d8e75;
  margin-bottom: 12px;
}

.insight {
  margin: 0 0 18px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #1b3b2f;
}

.action-block {
  background: rgba(90, 148, 124, 0.08);
  border-radius: 16px;
  padding: 18px;
  border: 1px dashed rgba(90, 148, 124, 0.5);
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #4d8e75;
}

.action-block p {
  margin: 8px 0 0;
  color: #2f5c49;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .insight-card {
    padding: 22px;
  }

  .hero h1 {
    font-size: 1.8rem;
  }
}
</style>

