import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "src/tests/setup.ts",
    coverage: {
      provider: 'v8',
      exclude: [
        'dist/**',
        'node_modules/**',
        'src/tests/**',
        'public/**',
        '**/index.ts',
        '**/*.{data,d}.{ts,js}',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier,astro,commitlint}.config.*',
      ],
      thresholds: {
        branches: 80,
        lines: 80,
        functions: 80,
        statements: 80
      }
    },
  }
})
