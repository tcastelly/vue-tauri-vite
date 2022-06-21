OSFLAG 				:=
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
	OSFLAG = osx
endif

OSFLAG 				:=
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
	OSFLAG = osx
endif

build:
	if [ "${OSFLAG}" == "osx" ]; then make init_osx_cfg; else rm -rf ./**/.cargo/config; fi
	cd src-go && go get ./... && go build -buildmode=c-archive -o libgophernize.a main.go

# force to re-build c lib
buildc:
	go clean -cache && $(MAKE) build

# it s not possible to use RUSTFLAGS env
# because wasm project will should not use it
init_osx_cfg:
	cp .cargo/config_disabled .cargo/config
