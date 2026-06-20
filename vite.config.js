import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// En build el sitio vive en la subcarpeta /lfortaleza/ (https://novacodefc.com/lfortaleza).
// En desarrollo se sirve desde la raíz (localhost:5173/).
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/lfortaleza/' : '/',
  plugins: [react()],
}))
