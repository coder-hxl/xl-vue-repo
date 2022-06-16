// 普通加载路由
// export main from './main.vue'

// 懒加载路由
const main = () => import('@/views/main/main.vue')
export default {
  path: '/main',
  name: 'main',
  component: main,
  children: [],
}
