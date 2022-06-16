import axios from 'axios'

class XLRequire {
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 每个实例对象都有的拦截
    this.instance.interceptors.request.use(
      (res) => {},
      (err) => {}
    )
    this.instance.interceptors.response.use(
      (res) => {},
      (err) => {}
    )

    // 单个实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, methods: 'GET' })
  }

  post(config) {
    return this.request({ ...config, methods: 'POST' })
  }

  delete(config) {
    return this.request({ ...config, methods: 'DELETE' })
  }

  patch(config) {
    return this.request({ ...config, methods: 'PATCH' })
  }
}

export default XLRequire
