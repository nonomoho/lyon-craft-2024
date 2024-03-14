import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9090',
    specPattern: 'src/test/component/**/*.spec.ts',
    fixturesFolder: 'src/test/component/fixtures',
    supportFile: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
