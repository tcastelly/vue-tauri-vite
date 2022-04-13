# Tauri Application

In this project I try to show how use in a Tauri application multiple technologies as:
- VueJS with TypesScript
- Wasm (Rust)
- Vite for the client bundle
- Go and Rust as backend thanks to ffi

### Update Tauri

- Javascript part: `ncu`
- Rust part: 
  > cd src-tauri

  > cargo update -p tauri
  - https://crates.io/crates/tauri/versions
  - https://crates.io/crates/tauri-build/versions

### Launch dev

⚠️ Note: Open two terminal windows, execute `npm run watch` in the first and `npm run tauri:dev` in the second. **The order of execution is important, do not close the first window!**

