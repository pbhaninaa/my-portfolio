import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // Required for GitHub Pages: site is at https://<user>.github.io/my-portfolio/
  base: mode === 'production' ? '/my-portfolio/' : '/',
}))
