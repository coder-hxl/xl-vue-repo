<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <div>
      <router-link to="login">登录</router-link>
      <router-link to="main">主页</router-link>
      <router-view></router-view>
    </div>

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="hxl help you create Vue 3 + Vite project" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
