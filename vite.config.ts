import { defineConfig } from 'vitest/config'; // includes vite configuration and vitest config
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react() ],
  customLogger: {
    info: (msg) => {
      // if (msg.includes('The `onAfterSetupMiddleware` option is deprecated')) {
      //   return;
      // }           
      console.log(msg);
    },
    warn: (msg) => {
      // if (msg.includes('The `onBeforeSetupMiddleware` option is deprecated')) {
      //   return;
      // }           
      console.warn(msg);
    },
    warnOnce: (msg) => {
      console.warn(msg);
    },
    error: (msg) => {
      console.error(msg);
    },
    clearScreen: () => { },
    hasErrorLogged: () => false,
    hasWarned: false,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupTests.ts',
  },

});
