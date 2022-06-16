// 普通加载路由
// export login from './login.vue'

// 懒加载路由
const login = () => import('@/views/login/login.vue')
export default {
  path: '/login',
  name: 'login',
  component: login,
  children: [],
}
