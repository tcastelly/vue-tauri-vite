import { createRef } from 'src-wasm';

export default function () {
  const r = createRef();
  r.value += ' & tata';
  return <h3>{r.value} With TSX</h3>;
}
