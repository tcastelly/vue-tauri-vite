pub mod my_cmp {
    use wasm_bindgen::prelude::*;

    #[wasm_bindgen(module = "/vue-wasm.ts")]
    extern "C" {
        pub type VRef;

        #[wasm_bindgen(method, getter)]
        fn value(this: &VRef) -> String;

        #[wasm_bindgen(method, setter)]
        fn set_value(this: &VRef, value: String);

        fn vref() -> JsValue;
        fn vref2() -> VRef;
        fn name() -> String;
    }

    #[wasm_bindgen]
    pub fn createRef() -> JsValue {
        vref()
    }
}
