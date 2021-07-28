// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;

use serde::Serialize;
use std::sync::{Arc, Mutex};

#[derive(Serialize)]
struct Reply {
  data: String,
}

fn main() {
  let cptLoad = Arc::new(Mutex::new(0));

  tauri::Builder::default()
    .on_page_load(move |window, _| {
      let mut _cptLoad = cptLoad.lock().unwrap();

      if *_cptLoad == 0 {
        let window_ = window.clone();

        window.listen("js-event", move |event| {
          println!("got js-event with message '{:?}'", event.payload());
          let reply = Reply {
            data: "something else".to_string(),
          };

          window_
            .emit("rust-event", Some(reply))
            .expect("failed to emit");
        });
      }

      *_cptLoad += 1;
    })
    .invoke_handler(tauri::generate_handler![
      cmd::log_operation,
      cmd::perform_request
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
