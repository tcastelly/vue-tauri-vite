declare module 'src-wasm' {
  export function add(a: number, b: number): number;

  export default function (): Promise<void>;
}
