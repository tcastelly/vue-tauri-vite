# Tauri Application

In this project I try to show how to use Tauri application with multiple technologies as:
- VueJS with TypesScript
- Wasm (Rust)
- Vite for the client bundle
- Go and Rust as backend thanks to ffi

## Launch dev

⚠️ Note: Open two terminal windows, execute `npm run watch` in the first and `npm run tauri:dev` in the second. **The order of execution is important, do not close the first window!**

## Update Dependencies

- Javascript part:
  - package.json > "@tauri-apps/api"
- Rust part: 
  > cd src-tauri

  > cargo update -p tauri
  - and check
  - https://crates.io/crates/tauri/versions
  - https://crates.io/crates/tauri-build/versions

## Release build

### Github Actions
Take a look to:
https://github.com/tcastelly/vue-tauri-vite/blob/master/.github/workflows/release.yml

### Manual release
Increase version of

> package.json > version

> src-tauri/Cargo.toml > version

> npm run tauri:build
