package main

import "fmt"

type choice func(int, int) int
type makeChoice func(choice) int

func cons(a, b int) makeChoice {

	ff := func(callback choice) int {
		return callback(a, b)
	}

	return ff

}

func car(callback makeChoice) int {

	getFirst := func(a, b int) int {
		return a
	}

	return callback(getFirst)
}

func cdr(callback makeChoice) int {

	getLast := func(a, b int) int {
		return b
	}

	return callback(getLast)
}

func main() {

	car := car(cons(3, 4))
	cdr := cdr(cons(3, 4))

	fmt.Printf("car: %d, cdr: %d ", car, cdr)
}
