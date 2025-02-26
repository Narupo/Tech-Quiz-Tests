import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Adjust if your frontend runs on a different port
    setupNodeEvents(on, config) {
      // Implement event listeners if needed
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});