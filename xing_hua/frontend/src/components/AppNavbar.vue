<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

type SectionLink = {
  label: string
  hash: string
}

const sectionLinks: SectionLink[] = [
  { label: '实践见闻', hash: '#footprint' },
  { label: '调研成果', hash: '#research' },
  { label: '实践日志', hash: '#journal' },
  { label: '实践探索', hash: '#explore' }
]

const practiceLinks = [
  { label: '实践感想', to: { name: 'practiceFeeling' } },
  { label: '实践总结', to: { name: 'practiceSummary' } },
  { label: '实践心得', to: { name: 'practiceInsight' } },
  { label: '实践回顾', to: { name: 'practiceReview' } }
]

const isHome = computed(() => route.name === 'home')

const scrollToSection = async (hash: string) => {
  if (!hash) return

  if (!isHome.value) {
    await router.push({ name: 'home', hash })
    return
  }

  const target = document.querySelector(hash)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const goHome = () => router.push({ name: 'home' })
</script>

<template>
  <nav class="navbar">
    <div class="brand" @click="goHome">
      <span class="dot"></span>
      <span class="name">和美乡村实践</span>
    </div>

    <div class="nav-groups">
      <div class="group">
        <button
            v-for="item in sectionLinks"
            :key="item.hash"
            class="ghost-link"
            @click="scrollToSection(item.hash)"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="group practice-links">
        <RouterLink
            v-for="item in practiceLinks"
            :key="item.label"
            class="ghost-link"
            :to="item.to"
            active-class="active"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>

    <RouterLink
        class="primary-link"
        :to="{ name: 'home' }"
        :class="{ active: isHome }"
    >
      返回主页
    </RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 14px 20px;
  border-radius: 20px;
  border: 1px solid rgba(63, 134, 111, 0.25);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #103126;
  cursor: pointer;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a9b8c, #86c1a2);
  box-shadow: 0 0 12px rgba(74, 155, 140, 0.6);
}

.nav-groups {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.ghost-link {
  border: none;
  background: transparent;
  padding: 8px 14px;
  border-radius: 12px;
  color: #1f4134;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ghost-link:hover,
.ghost-link.active {
  background: rgba(74, 155, 140, 0.18);
  color: #103126;
}

.practice-links {
  border-left: 1px solid rgba(63, 134, 111, 0.25);
  padding-left: 12px;
}

.primary-link {
  padding: 10px 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(74, 155, 140, 0.9), rgba(127, 176, 105, 0.9));
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(74, 155, 140, 0.35);
}

.primary-link.active {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .practice-links {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(63, 134, 111, 0.2);
    padding-top: 10px;
  }
}
</style>

