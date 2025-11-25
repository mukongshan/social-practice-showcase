<template>
  <div class="map">
    <iframe
        src="https://www.amap.com/"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
// 可根据需要添加 props 或事件
</script>

<style scoped>
.map {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  /* 江南水乡风格的地图阴影 - 淡雅青色，营造水乡朦胧感 */
  box-shadow: 0 2px 8px rgba(74, 155, 140, 0.15);

  /* 控制上下外边距 */
  margin-top: 0;   /* 上方边距变小（原可能是 20px 或更大，现在减小） */
  margin-bottom: 50px; /* 下方边距变大（下方留出更多空白） */
  
  /* 江南水乡风格 - 添加淡雅青色边框，营造水乡氛围 */
  border: 1px solid rgba(74, 155, 140, 0.2);
  
  /* 江南水乡风格 - 添加水色背景，增强水乡特色 */
  background: rgba(184, 230, 225, 0.05);
}
</style>