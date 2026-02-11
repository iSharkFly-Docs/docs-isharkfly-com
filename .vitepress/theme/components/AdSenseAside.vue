<!-- .vitepress/theme/components/AdSenseAside.vue -->
<template>
  <div class="adsense-aside">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4797644559430915"
         data-ad-slot="1781911644"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    console.error('AdSense error:', e)
  }
})
</script>