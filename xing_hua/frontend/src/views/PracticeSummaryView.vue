<script setup lang="ts">
const highlights = [
  {
    title: '乡村治理协同模型',
    desc: '梳理村委、合作社与驻村工作队之间的协同性关系，形成“三线合流”治理示意图。'
  },
  {
    title: '特色产业诊断',
    desc: '对茶叶、油菜、乡村民宿三类产业进行 SWOT 复盘，明确资源禀赋与短板。'
  },
  {
    title: '青年返乡路径',
    desc: '总结“返乡见习—创业孵化—品牌共建”三阶段流程，为青年赋能提供案例。'
  }
]

const milestones = [
  { label: '问卷有效回收', value: '428份' },
  { label: '访谈纪要', value: '18万字' },
  { label: '影像素材', value: '96张' },
  { label: '共创工作坊', value: '4场' }
]
</script>

<template>
  <section class="page">
    <header class="summary-hero">
      <div>
        <p class="eyebrow">实践总结 · 结构化成果</p>
        <h1>一次扎实的基层调研，应该留下有温度的证据</h1>
        <p class="lead">
          我们将散落的观察点梳理为体系化成果，确保每一个行动都能被复盘、被传承、被再次利用。
        </p>
      </div>
      <div class="milestones">
        <div v-for="item in milestones" :key="item.label" class="milestone">
          <p class="milestone-label">{{ item.label }}</p>
          <p class="milestone-value">{{ item.value }}</p>
        </div>
      </div>
    </header>

    <div class="content-layout">
      <section class="report-card">
        <h2>成果要点</h2>
        <ul>
          <li>建立“村情扫描 → 议题聚焦 → 联合行动”的完整闭环。</li>
          <li>输出 3 套可复用的乡村活动策划方案与视觉物料。</li>
          <li>提出数字乡村治理的 6 条可操作建议，包含配套指标。</li>
        </ul>
        <div class="attachments">
          <div class="attachment">
            <span>调研报告.pdf</span>
            <small>12.6 MB · 已分享</small>
          </div>
          <div class="attachment">
            <span>村史数字化方案.docx</span>
            <small>4.1 MB · 草稿</small>
          </div>
        </div>
      </section>

      <section class="highlight-list">
        <article v-for="item in highlights" :key="item.title" class="highlight-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0 64px;
  color: #1f3e32;
}

.summary-hero {
  background: rgba(255, 255, 255, 0.78);
  border-radius: 28px;
  padding: 36px;
  border: 1px solid rgba(50, 104, 84, 0.12);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  box-shadow: 0 25px 55px rgba(35, 76, 61, 0.18);
}

.eyebrow {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #4c8a72;
}

.summary-hero h1 {
  margin: 12px 0;
  font-size: 2.3rem;
  line-height: 1.35;
}

.lead {
  margin: 0;
  color: #3d6f5b;
  line-height: 1.7;
}

.milestones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.milestone {
  background: linear-gradient(140deg, rgba(164, 214, 187, 0.45), rgba(133, 186, 165, 0.35));
  border-radius: 20px;
  padding: 18px;
  border: 1px solid rgba(47, 102, 83, 0.12);
}

.milestone-label {
  font-size: 0.85rem;
  color: #3b6b58;
  margin: 0;
}

.milestone-value {
  margin: 6px 0 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #163427;
}

.content-layout {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
}

.report-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 32px;
  border: 1px solid rgba(47, 102, 83, 0.08);
  box-shadow: 0 25px 45px rgba(24, 51, 41, 0.12);
}

.report-card h2 {
  margin-top: 0;
}

.report-card ul {
  margin: 16px 0 24px;
  padding-left: 20px;
  color: #3b6b58;
  line-height: 1.7;
}

.attachments {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.attachment {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px dashed rgba(63, 134, 111, 0.26);
  background: rgba(106, 170, 147, 0.08);
}

.attachment span {
  display: block;
  font-weight: 600;
}

.attachment small {
  color: #4c8a72;
}

.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid rgba(47, 102, 83, 0.08);
  box-shadow: 0 15px 35px rgba(24, 51, 41, 0.08);
}

.highlight-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.highlight-card p {
  margin: 0;
  color: #3b6b58;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .summary-hero {
    grid-template-columns: 1fr;
  }

  .content-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .summary-hero {
    padding: 28px;
  }

  .report-card {
    padding: 24px;
  }
}
</style>

