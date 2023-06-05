import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /* build npm 빌드 out directory 
  1. 

  */
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
   
  },
  build:{
    outDir: '../bankend/public/'
  },
  server:{ 
    proxy: {
      '/api' : {
        target: 'http://localhost:12381/api',
        changeOrigin:true,
        rewrite:(path) => path.replace('/api', '/'),
      }
    },
   headers : {"Access-Control Allow_Origin" : "*"}
  }
})
