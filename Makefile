OSFLAG 				:=
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
	OSFLAG = osx
endif

# it s not possible to use RUSTFLAGS env
# because wasm project will should not use it
init_osx_cfg:
	cp ./src-tauri/.cargo/config_disabled ./src-tauri/.cargo/config
build:
	if [ "${OSFLAG}" == "osx" ]; then cp ./src-tauri/.cargo/config_disabled ./src-tauri/.cargo/config; else rm -f ./src-tauri/.cargo/config; fi
	cd src-go && go build -buildmode=c-archive -o libgophernize.a main.go
