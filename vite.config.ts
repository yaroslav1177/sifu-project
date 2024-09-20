import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/sifu-project/',
  resolve: {
    alias: {
      'swiper/swiper-bundle.min.css': 'swiper/swiper.min.css',
    },
  },
})
