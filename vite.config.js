import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Modern browsers only: smaller, faster code.
    target: 'es2019',
    cssMinify: true,
    // Small icons are inlined; photos stay as separate, cacheable files.
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Libraries go in their own files: they rarely change, so visitors keep
        // them in cache between updates of the portfolio content.
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
