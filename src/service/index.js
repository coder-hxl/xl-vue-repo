import XLRequire from './require'
import { BASE_URL, TIME_OUT } from './require/config'

const xlRequire = new XLRequire({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {},
})

export default xlRequire
