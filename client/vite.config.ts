import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    host: '0.0.0.0',
    port: 5000,
    // https: false,
  },
  // optimizeDeps: {
  //   exclude: ['react-paystack'],
  // },
});
