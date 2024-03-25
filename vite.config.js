import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Plugin de atualização automática 
import liveReload from 'vite-plugin-live-reload';

// Importando função para buscar caminhos relativos
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    liveReload('.src/pages/**/*.jsx')
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Mapeia @ para a pasta src
      '@pages': path.resolve(__dirname, './src/pages'), // Mapeia ~components para src/components
      '@layout': path.resolve(__dirname, './src/components/layout'), // Mapeia ~components para src/components
      '@components': path.resolve(__dirname, './src/components'), // Mapeia ~components para src/components
    }
  }
})
