<script setup lang="ts">
import { onMounted } from 'vue'
// import { setConfigProvider, getConfig } from '@constructions-incongrues/faircamp-cms-config'

onMounted(async () => {  
  // Dynamically import and run the UI package when this component is mounted
  await import('@constructions-incongrues/faircamp-cms-ui')
})
</script>

<template>
  <div id="app"></div>
</template>
