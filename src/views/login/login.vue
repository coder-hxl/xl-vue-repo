<script setup>
  import { ref } from 'vue'
  const name = ref('login')
</script>

<template>
  <div class="login">
    <h1>{{ name }}</h1>
  </div>
</template>

<style scoped>
  .login {
  }
</style>
