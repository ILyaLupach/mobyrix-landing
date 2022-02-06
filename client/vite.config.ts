import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

const PROXY_PORT = process.env.PORT || 5000

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    origin: 'http://0.0.0.0:3000',
    proxy: {
      '/api': {
        target: `http://0.0.0.0:${PROXY_PORT}`,
      },
    }
  }
})
