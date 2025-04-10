import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist', // Altere para criar a pasta dist fora de front-end
    target: 'esnext',
  }
})
