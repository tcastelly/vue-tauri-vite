build:
	cd src-go && go build -buildmode=c-archive -o libgophernize.a main.go
