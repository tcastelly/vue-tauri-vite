import { computed, defineComponent, ref, watchEffect } from 'vue';
import { add } from 'wasm-rust';

export default defineComponent({
  setup() {
    const nb1 = ref(0);
    const nb2 = ref(0);

    const res = ref(0);

    watchEffect(() => {
      res.value = add(+nb1.value, +nb2.value);
    });

    return () => <>
      <h3>With Wasm (Rust)</h3>

      <input v-model={nb1.value} placeholder='Number to add' />
      +
      <input v-model={nb2.value} placeholder='Number to add' />
      =
      <span>{res.value}</span>
    </>;
  }
});
