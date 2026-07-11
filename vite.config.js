import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// El sitio se sirve desde la raíz del dominio propio (https://lafortalezagt.com).
export default defineConfig({
  base: '/',
  plugins: [react()],
})
