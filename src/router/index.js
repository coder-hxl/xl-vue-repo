import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
]

// 动态加载路由
const routeModules = import.meta.globEager('@/views/*/route.js')
for (const key in routeModules) {
  routes.push(routeModules[key].default)
}

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
