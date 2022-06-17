import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useMainStore } from './main/main'

const store = createPinia()

export default store
export { 
  useLoginStore, 
  useMainStore 
}
