import { ref } from 'vue';

export function name(): string {
  return 'Rust :)';
}

export function vref() {
  return ref('toto');
}

export function vref2() {
  const r = ref('');

  return {
    set value(value) {
      r.value = value;
    },
    get value() {
      return r.value;
    },
  };
}
