import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'front-end', // Define o diretório raiz como 'front-end'
  base: './', // Mantém os caminhos relativos no HTML
  plugins: [react()],
  build: {
    outDir: 'dist', // Saída da build será em 'front-end/dist'
    emptyOutDir: true,
  },
});