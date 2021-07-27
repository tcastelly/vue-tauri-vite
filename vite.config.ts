import { defineConfig } from 'vite';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import ViteRsw from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteRsw({
      crates: [
        'wasm-rust',
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    port: 3222,
  }
});

