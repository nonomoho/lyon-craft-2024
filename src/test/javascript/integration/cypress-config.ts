import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9090',
    specPattern: 'src/test/javascript/integration/**/*.spec.ts',
    fixturesFolder: false,
    supportFile: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});

