import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './tests/setup.ts',
    coverage: {
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'
      ],
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
})
