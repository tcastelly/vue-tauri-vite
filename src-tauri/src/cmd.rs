use serde::Deserialize;
use tauri::command;

use crate::MyState;

#[derive(Debug, Deserialize)]
pub struct RequestBody {
  id: i32,
  name: String,
}

#[command]
pub fn log_operation(event: String, payload: Option<String>) {
  println!("{} {:?}", event, payload);
}

#[command]
pub fn perform_request(endpoint: String, body: RequestBody) -> String {
  println!("{} {:?}", endpoint, body);
  "message response".into()
}

#[command]
pub async fn read_state(state: tauri::State<'_, MyState>) -> Result<String, String> {
  println!("state: {:?}", state.0);

  Ok("done".to_string())
}
