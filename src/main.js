import { createApp } from 'vue'
import xlRequire from './service'

import App from './App.vue'
import router from '@/router'

createApp(App).use(router).mount('#app')

xlRequire.get().then((res) => {
  console.log(res.data)
})
