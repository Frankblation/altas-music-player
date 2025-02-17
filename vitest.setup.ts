import "@testing-library/jest-dom/vitest";
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.js'],
  },
});