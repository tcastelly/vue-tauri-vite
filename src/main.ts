import { createApp } from 'vue';
import rustWasmInit from 'src-wasm';
import App from './App.vue';

const main = async () => {
  await rustWasmInit();

  createApp(App).mount('#app');
};

main();
