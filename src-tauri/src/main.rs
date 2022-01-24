// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;

use serde::Serialize;
use std::collections::HashMap;
use std::ffi::{CStr, CString};
use std::os::raw::c_char;
use std::sync::{Arc, Mutex};

type GoInt64 = ::std::os::raw::c_longlong;

#[derive(Debug)]
#[repr(C)]
struct GoString {
  a: *const c_char,
  b: i64,
}

extern "C" {
  fn Concat(str: GoString) -> *const c_char;
  fn Timestamp() -> GoInt64;
  fn Add(nb1: i64, nb2: i64) -> i64;
  fn Divide(nb1: f64, nb2: f64) -> f64;
  fn Sort(val: Vec<i32>) -> Vec<i32>;
  fn IsCorrect() -> bool;
  fn MutateInt(i: &i32);
  fn MutateStr(str: &GoString);
}

#[derive(Serialize)]
struct Reply {
  data: String,
}

pub struct MyState(HashMap<String, String>);

fn main() {
  // ex_1
  // call Go with one string and retrieve a string
  let s = CString::new("I'm a Rustacean").expect("CString::new failed");
  let ptr = s.as_ptr();
  let input = GoString {
    a: ptr,
    b: s.as_bytes().len() as i64,
  };

  let concat_res = unsafe { Concat(input) };
  let c_str = unsafe { CStr::from_ptr(concat_res) };
  let output = c_str.to_str().expect("to_str failed");
  println!("concat: {}", output);

  // during dev if reload, don t listen multiple times same event
  let cpt_load = Arc::new(Mutex::new(0));

  let state = HashMap::from([("key".to_string(), "value".to_string())]);

  tauri::Builder::default()
    .manage(MyState(state))
    .on_page_load(move |window, _| {
      let mut cpt_load_ = cpt_load.lock().unwrap();

      let window_ = window.clone();
      if *cpt_load_ == 0 {
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

      *cpt_load_ += 1;
    })
    .invoke_handler(tauri::generate_handler![
      cmd::log_operation,
      cmd::perform_request,
      cmd::read_state,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
