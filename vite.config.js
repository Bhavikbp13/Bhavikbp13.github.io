import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Keep this
  build: {
    // This ensures the assets are bundled correctly
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})