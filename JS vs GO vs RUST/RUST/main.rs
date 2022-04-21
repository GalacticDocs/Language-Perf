use std::time::{SystemTime, UNIX_EPOCH, Duration};

fn loop_thru(array: [&str; 12]) {
    for i in array {
        println!("[FOR LOOP] Item: {}", i);
    }

    println!("");

    let mut m1: [i32; 10] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let m2: Vec<i32> = m1.iter().copied().rev().collect();
    // println!(vec!(m1))
    m1.reverse();

    println!("{:?}", m1);
}

fn time_devider(timer_one: Duration, timer_two: Duration) -> Duration {
    return timer_one - timer_two;
}

fn calculate_ms(time: SystemTime) -> Duration {
	let since_the_epoch = time
	    .duration_since(UNIX_EPOCH)
	    .expect("Time went backwards");

    return since_the_epoch;
}

fn main() {
	let timer_one = SystemTime::now();

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
    );

    let timer_two = SystemTime::now();

    println!("[TIMER DEVISION] {}ms", time_devider(calculate_ms(timer_two), calculate_ms(timer_one)).as_millis());
}
