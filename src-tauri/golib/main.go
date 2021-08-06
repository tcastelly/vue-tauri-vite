package main

import (
	"C"
	"sort"
	"time"
)
import "fmt"

//export Concat
func Concat(name string) *C.char {
	str := name + " ʕ ◔ϖ◔ʔ"

	return C.CString(str)
}

//export Timestamp
func Timestamp() int64 {
	return time.Now().UnixNano()
}

//export Add
func Add(nb1 int64, nb2 int64) int64 {
	return nb1 + nb2
}

//export Divide
func Divide(nb1 float64, nb2 float64) float64 {
	return nb1 / nb2
}

//export Sort
func Sort(vals []int32) []int32 {
	// len of slice is wrong
	sort.Slice(vals[:cap(vals)], func(i, j int) bool {
		return vals[i] < vals[j]
	})

	return vals
}

//export MutateStr
func MutateStr(str *string) {
	*str = "updated"
}

//export MutateInt
func MutateInt(nb *int32) {
	*nb = 42
}

//export IsCorrect
func IsCorrect() bool {
	return true
}

func main() {
	// try Mutate
	str := "hey"
	MutateStr(&str)
	fmt.Println(str)
}
