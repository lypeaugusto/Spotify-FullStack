import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Spotify',
        },
      },
    }),
  ],
  build: {
    outDir: '../dist',
    target: 'esnext',
    manifest: true, // Gera um manifest.json para mapear os arquivos
  },
  base: './', // Define o caminho base relativo para os recursos
});