import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SITE_BASE is set for the GitHub Pages preview, which is served from /adakindigital/.
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  plugins: [react()],
})
