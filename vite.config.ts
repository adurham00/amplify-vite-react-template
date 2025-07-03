import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures the app builds relative to root
  build: {
    outDir: 'dist', // Default, but good to be explicit
  }
})
