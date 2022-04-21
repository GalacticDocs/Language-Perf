loop_thru = (array) ->
	for i in array by 1
		console.log "[FOR LOOP] Item: #{i}"

	console.log ""

	array.forEach (item) ->
		console.log "[FOR EACH LOOP] Item: #{item}"

	m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	m2 = m1

	console.log m2.reverse()

time_devider = (timer_one, timer_two) ->
	return timer_one - timer_two

main = () ->
	timer_one = Date.now()

	loop_thru(
		[
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
			"possible"
		]
	)

	timer_two = Date.now()

	return console.log "[TIMERS DEVISION] #{time_devider(timer_two, timer_one)}ms"

main()
