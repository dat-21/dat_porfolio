import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
    preview: {
    allowedHosts: ["dat-porfolio-web.onrender.com"], // 👈 thêm dòng này
  },
  server: {
    allowedHosts: ["dat-porfolio-web.onrender.com"], // 👈 thêm dòng này cho môi trường dev
  },
})
