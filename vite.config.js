import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'front-end', // Define o diretório raiz como 'front-end'
  base: './', // Define o caminho base como relativo
  plugins: [react()],
  build: {
    outDir: 'dist', // Saída da build será em 'front-end/dist'
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajustar o limite de tamanho do chunk
  },
  
});