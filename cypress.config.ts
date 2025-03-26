import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      mobileViewportWidthBreakpoint: 420,
    },
    viewportWidth: 1440,
    viewportHeight: 990,
  },
});
