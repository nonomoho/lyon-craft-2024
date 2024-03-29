/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/main/webapp/app') }],
  },
  test: {
    reporters: ['verbose', 'vitest-sonar-reporter'],
    outputFile: {
      'vitest-sonar-reporter': 'target/test-results/TESTS-results-sonar.xml',
    },
    globals: true,
    logHeapUsage: true,
    poolOptions: {
      minThreads: 1,
      maxThreads: 4,
    },
    environment: 'jsdom',
    cache: false,
    include: ['src/test/spec/**/*.(spec|test).(ts|tsx)'],
    exclude: ['node_modules', 'src/test/component/**/*.spec.ts'],
    coverage: {
      thresholds: {
        perFile: true,
        autoUpdate: true,
        100: true,
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
      exclude: [
        'src/main/webapp/**/*.component.ts',
        'src/main/webapp/app/main.ts',
        '.eslintrc.js',
        '.lintstagedrc.cjs',
        'src/test/**/*',
        'target/**',
        'src/main/webapp/app/common/primary/**',
        'src/main/webapp/app/galette-and-co/primary/**',
      ],
      provider: 'istanbul',
      reportsDirectory: 'target/test-results/',
      reporter: ['html', 'json-summary', 'text', 'text-summary', 'lcov', 'clover'],
      watermarks: {
        statements: [100, 100],
        branches: [100, 100],
        functions: [100, 100],
        lines: [100, 100],
      },
    },
  },
});
