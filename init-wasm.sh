#!/bin/bash

# wasm build by running a `npm run dev` before the build
# because vite will open a dev server, kill it by setting a wrong port

npm run dev -- --port 1 --strictPort true &> /dev/null
echo "init wasm done"
