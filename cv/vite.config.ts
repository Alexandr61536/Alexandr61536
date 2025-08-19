import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
  })],
  base: "https://alexandr61536.github.io/Alexandr61536/",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
})
