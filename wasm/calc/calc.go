package calc

import (
	"fmt"

	"gopkg.in/Knetic/govaluate.v2"
)

//go:export CalcStr
func CalcStr(str string) (float64, error) {
	expression, _ := govaluate.NewEvaluableExpression(str)
	out, _ := expression.Evaluate(nil)
	return out.(float64), nil
}

func FormatMathOut(out float64) string {
	if out == float64(int(out)) {
		return fmt.Sprintf("%d", int(out))
	}
	return fmt.Sprintf("%f", out)
}
