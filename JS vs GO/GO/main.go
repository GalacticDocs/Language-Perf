package main

import (
	"fmt"
	"time"
)

func loop_thru(array []string) {
	for i := 0; i < len(array); i++ {
		fmt.Println("[FOR LOOP] ", array[i])
	}

	fmt.Print("\n")

	for _, value := range array {
		fmt.Println("[FOR EACH LOOP] ", value)
	}

	fmt.Print("\n")

	m1 := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	for i, j := 0, len(m1)-1; i < j; i, j = i+1, j-1 {
		m1[i], m1[j] = m1[j], m1[i]
	}

	fmt.Println(m1)
	fmt.Print("\n")
}

func time_devider(timer_one int64, timer_two int64) int64 {
	return timer_one / timer_two
}

func timester(timer time.Time) int64 {
	timester := timer.UnixNano()
	millis := timester / 1000000

	return millis
}

func main() {
	timer_one := time.Now()

	loop_thru(
		[]string{
			"This",
			"is",
			"that",
			"and",
			"that",
			"is",
			"this",
			"and",
			"I",
			"am",
			"not",
			"possible",
		},
	)

	timer_two := time.Now()

	fmt.Print("[TIMER DEVISION] ", time_devider(timester(timer_two), timester(timer_one)))
	fmt.Print("ms")
}
