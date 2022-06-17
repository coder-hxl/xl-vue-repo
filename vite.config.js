import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (pathName) => path.resolve(process.cwd(), pathName)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: pathResolve('src') },
      { find: 'components', replacement: pathResolve('src/components') },
    ],
  },
  server: {
    open: true,
  },
})
