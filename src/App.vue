<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <HelloTsx />

  <div>
    Backend answer: {{ res }}

    <button @click="log" type="button">Log me</button>
  </div>

  <div>
    <button @click="getState" type="button">Get State</button>
  </div>
  <Add />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { listen, emit } from '@tauri-apps/api/event';
import { invoke } from '@tauri-apps/api/tauri';
import HelloTsx from './components/HelloTsx';
import HelloWorld from './components/HelloWorld.vue';
import Add from './components/Add';

export default defineComponent({
  name: 'App',
  components: {
    HelloTsx,
    Add,
    HelloWorld,
  },
  setup() {
    const res = ref('default');

    invoke('perform_request', {
      endpoint: 'dummy endpoint arg',
      body: {
        id: 5,
        name: 'test',
      },
    })
      .then((m) => console.log(m))
      .catch((e) => console.error(e));

    listen('rust-event', ({ payload }: any) => {
      res.value = payload.data;
    });

    setTimeout(() => {
      emit('js-event', 'come from vuejs');
    }, 1000);

    const log = () => invoke('log_operation', {
      event: 'will be logged',
      payload: 'data',
    });

    const getState = () => invoke('read_state');

    return {
      res,
      log,
      getState,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
