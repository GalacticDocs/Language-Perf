const loop_thru = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`[FOR LOOP] Item: ${array[i]}`);
    }

    console.log("");
    
    array.forEach((item) => {
        console.log(`[FOR EACH LOOP] Item: ${item}`);
    });

    let m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let m2 = m1;

    console.log(`\n${m2.reverse()}\n`);
};
const time_devider = (timer_one, timer_two) => {
    return timer_one - timer_two;
};

const main = () => {
    let timer_one = Date.now();

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

    let timer_two = Date.now();

    return console.log(`[TIMERS DEVISION] ${time_devider(timer_two, timer_one)}ms`);
};

main();
