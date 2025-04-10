import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'front-end', // Define o diretório raiz como 'front-end'
  base: '/', // Define caminhos absolutos no HTML
  plugins: [react()],
  build: {
    outDir: 'dist', // Saída da build será em 'front-end/dist'
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  publicDir: 'public', // Define um diretório fixo para arquivos públicos
});