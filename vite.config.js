import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', 
  build: {
    outDir: 'dist', // Forces the output to this exact folder
    emptyOutDir: true, // Wipes old files before building
  }
})