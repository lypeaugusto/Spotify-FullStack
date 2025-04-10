import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../dist', 
    target: 'esnext',
  },
  base: './', // Define o caminho base relativo para os recursos
});