package main

import (
	"leizhenpeng/go-wasm-calc/calc"
	"syscall/js"
)

// Declare a main function, this is the entrypoint into our go module
func main() {
	done := make(chan int, 0)
	js.Global().Set("expression", js.FuncOf(warpExpression))
	<-done
}

func warpExpression(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(expression(args[0].String()))
}

func expression(str string) string {
	f, err := calc.CalcStr(str)
	if err != nil {
		return err.Error()
	}
	return calc.FormatMathOut(f)
}
