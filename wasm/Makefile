all: copy main

copy:
	cp $$(tinygo env TINYGOROOT)/targets/wasm_exec.js .

main: main.go
	GO111MODULE=auto GOOS=js GOARCH=wasm tinygo build -o main.wasm -target wasm ./main.go

