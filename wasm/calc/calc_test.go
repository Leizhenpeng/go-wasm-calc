package calc

import "testing"

//'1+1' => 2
func TestCalcStr(t *testing.T) {
	out, err := CalcStr("1+1")
	if err != nil {
		t.Error(err)
	}
	if out != 2 {
		t.Error("1+1 != 2")
	}
}

//'3*2' => 6
func TestCalcStr2(t *testing.T) {
	out, err := CalcStr("3*2")
	if err != nil {
		t.Error(err)
	}
	if out != 6 {
		t.Error("3*2 != 6")
	}
}
