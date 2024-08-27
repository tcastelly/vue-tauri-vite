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
	cd src-go && go get ./... && go build -buildmode=c-archive -o libgophernize.a main.go

# force to re-build c lib
buildc:
	go clean -cache && $(MAKE) build
