<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <HelloTsx />
  <Add />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloTsx from './components/HelloTsx';
import HelloWorld from './components/HelloWorld.vue'
import Add from './components/Add';

export default defineComponent({
  name: 'App',
  components: {
    HelloTsx,
    Add,
    HelloWorld
  }
})
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
