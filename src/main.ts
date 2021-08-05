import { createApp } from 'vue';
import rustWasmInit from 'wasm-rust';
import App from './App.vue';

const main = async () => {
  await rustWasmInit();

  createApp(App).mount('#app');
};

main();
