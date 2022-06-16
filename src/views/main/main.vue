<script setup>
  import { ref } from 'vue'
  const name = ref('main')
</script>

<template>
  <div class="main">
    <h1>{{ name }}</h1>
  </div>
</template>

<style scoped>
  .main {
  }
</style>
