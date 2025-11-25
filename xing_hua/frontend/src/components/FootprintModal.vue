<template>
  <div v-if="visible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">{{ modalContent.title }}</h3>
        <button class="close-button" @click="closeModal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div class="modal-body">
        <div class="modal-image">
          <div class="image-placeholder large">
            <component :is="modalContent.icon" />
          </div>
        </div>
        
        <div class="modal-description">
          <p>{{ modalContent.description }}</p>
        </div>
        
        <div v-if="modalContent.details.length" class="modal-details">
          <h4>详细信息</h4>
          <div class="details-grid">
            <div v-for="(detail, index) in modalContent.details" :key="index" class="detail-item">
              <span class="detail-label">{{ detail.label }}</span>
              <span class="detail-value">{{ detail.value }}</span>
            </div>
          </div>
        </div>
        
        <div v-if="modalContent.stats.length" class="modal-stats">
          <h4>统计数据</h4>
          <div class="stats-grid">
            <div v-for="(stat, index) in modalContent.stats" :key="index" class="stat-item">
              <div class="stat-icon">
                <component :is="stat.icon" />
              </div>
              <div class="stat-info">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="modal-button primary" @click="handleAction">
          {{ modalContent.actionText }}
        </button>
        <button class="modal-button secondary" @click="closeModal">
          关闭
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

// 图标组件
const FootprintIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const ResearchIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `
}

const LogIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const LocationIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const PeopleIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const CalendarIcon = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

const props = defineProps<{
  visible: boolean
  type: 'footprint' | 'research' | 'log'
}>()

const emit = defineEmits<{
  close: []
  action: [string]
}>()

const closeModal = () => {
  emit('close')
}

const handleAction = () => {
  emit('action', props.type)
}

// 根据类型获取弹窗内容
type DetailItem = { label: string; value: string }
type IconComponent = typeof FootprintIcon
type StatItem = { icon: IconComponent; value: string; label: string }

const getModalContent = () => {
  switch (props.type) {
    case 'footprint':
      return {
        title: '实践见闻',
        icon: FootprintIcon,
        description: '深入基层，亲身体验，记录真实的社会实践故事。每一次走访、每一次访谈、每一次观察，都是我们理解社会、服务社会的宝贵财富。',
        details: [
          { label: '实践地点', value: '江苏省苏州市、无锡市、常州市等' },
          { label: '实践时间', value: '2024年1月-2月' },
          { label: '团队规模', value: '8人实践团队' },
          { label: '关注领域', value: '乡村振兴、文化传承、产业发展' }
        ] as DetailItem[],
        stats: [
          { icon: LocationIcon, value: '15个', label: '走访地点' },
          { icon: PeopleIcon, value: '32人', label: '访谈对象' },
          { icon: CalendarIcon, value: '28天', label: '实践天数' }
        ] as StatItem[],
        actionText: '查看详情'
      }
    case 'research':
      return {
        title: '调研成果',
        icon: ResearchIcon,
        description: '通过深入调研，我们收集了大量一手资料，形成了详实的调研报告。这些成果为我们理解当地发展现状、发现问题和提出建议提供了重要依据。',
        details: [
          { label: '调研报告', value: '5份专题报告' },
          { label: '访谈记录', value: '32份访谈记录' },
          { label: '现场照片', value: '200+张照片' },
          { label: '数据统计', value: '15个关键指标' }
        ] as DetailItem[],
        stats: [
          { icon: LocationIcon, value: '8个', label: '重点村庄' },
          { icon: PeopleIcon, value: '15份', label: '问卷回收' },
          { icon: CalendarIcon, value: '20天', label: '调研时间' }
        ] as StatItem[],
        actionText: '查看报告'
      }
    case 'log':
      return {
        title: '实践日志',
        icon: LogIcon,
        description: '记录每日实践心得与感悟，包括所见所闻、所思所想。这些日志不仅是我们实践的见证，更是我们成长的记录。',
        details: [
          { label: '日志条目', value: '28篇实践日志' },
          { label: '主题分类', value: '文化、经济、社会、环境' },
          { label: '关键洞察', value: '12个重要发现' },
          { label: '个人反思', value: '8篇深度思考' }
        ] as DetailItem[],
        stats: [
          { icon: LocationIcon, value: '28篇', label: '日志总数' },
          { icon: PeopleIcon, value: '8人', label: '参与记录' },
          { icon: CalendarIcon, value: '每日', label: '更新频率' }
        ] as StatItem[],
        actionText: '阅读日志'
      }
    default:
      return {
        title: '',
        icon: FootprintIcon,
        description: '',
        details: [] as DetailItem[],
        stats: [] as StatItem[],
        actionText: '确定'
      }
  }
}

const modalContent = computed(() => getModalContent())
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(74, 155, 140, 0.3);
  border: 1px solid rgba(74, 155, 140, 0.2);
  animation: slideUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid rgba(74, 155, 140, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2D5A4A;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #4A9B8C;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: rgba(74, 155, 140, 0.1);
  color: #2D5A4A;
}

.modal-body {
  padding: 24px;
}

.modal-image {
  text-align: center;
  margin-bottom: 24px;
}

.image-placeholder.large {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(74, 155, 140, 0.1), rgba(127, 176, 105, 0.1));
  border: 2px solid rgba(74, 155, 140, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4A9B8C;
}

.modal-description {
  margin-bottom: 24px;
}

.modal-description p {
  font-size: 1rem;
  line-height: 1.6;
  color: #4A9B8C;
  margin: 0;
}

.modal-details {
  margin-bottom: 24px;
}

.modal-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2D5A4A;
  margin: 0 0 16px 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: 0.9rem;
  color: #7FB069;
  font-weight: 500;
}

.detail-value {
  font-size: 1rem;
  color: #2D5A4A;
  font-weight: 600;
}

.modal-stats {
  margin-bottom: 24px;
}

.modal-stats h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2D5A4A;
  margin: 0 0 16px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(184, 230, 225, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(74, 155, 140, 0.2);
}

.stat-icon {
  width: 32px;
  height: 32px;
  color: #4A9B8C;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2D5A4A;
}

.stat-label {
  font-size: 0.8rem;
  color: #7FB069;
}

.modal-footer {
  display: flex;
  gap: 16px;
  padding: 16px 24px 24px 24px;
  border-top: 1px solid rgba(74, 155, 140, 0.1);
}

.modal-button {
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-button.primary {
  background: linear-gradient(135deg, #4A9B8C, #7FB069);
  color: white;
}

.modal-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(74, 155, 140, 0.3);
}

.modal-button.secondary {
  background: rgba(184, 230, 225, 0.3);
  color: #2D5A4A;
  border: 1px solid rgba(74, 155, 140, 0.2);
}

.modal-button.secondary:hover {
  background: rgba(184, 230, 225, 0.5);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 20px;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 20px;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .modal-footer {
    flex-direction: column;
  }
}
</style>
