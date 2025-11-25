// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: '实践足迹' }
  },
  {
    path: '/practice-feeling',
    name: 'practiceFeeling',
    component: () => import('@/views/PracticeFeelingView.vue'),
    meta: { title: '实践感想' }
  },
  {
    path: '/practice-summary',
    name: 'practiceSummary',
    component: () => import('@/views/PracticeSummaryView.vue'),
    meta: { title: '实践总结' }
  },
  {
    path: '/practice-insight',
    name: 'practiceInsight',
    component: () => import('@/views/PracticeInsightView.vue'),
    meta: { title: '实践心得' }
  },
  {
    path: '/practice-review',
    name: 'practiceReview',
    component: () => import('@/views/PracticeReviewView.vue'),
    meta: { title: '实践回顾' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0, behavior: 'smooth' }
  }
})

export default router
