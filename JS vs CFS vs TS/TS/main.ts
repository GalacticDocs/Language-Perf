const loop_thru = (array: string[]): void => {
    for (let i: number = 0; i < array.length; i++) {
        console.log(`[FOR LOOP] Item: ${array[i]}`);
    }

    console.log("");
    
    array.forEach((item: string) => {
        console.log(`[FOR EACH LOOP] Item: ${item}`);
    });

    let m1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let m2: number[] = m1;

    console.log(`\n${m2.reverse()}\n`);
};

const time_devider = (timer_one: number, timer_two: number): number => {
    return timer_one - timer_two;
};

const main = (): void => {
    let timer_one: number = Date.now();

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

    let timer_two: number = Date.now();

    return console.log(`[TIMERS DEVISION] ${time_devider(timer_two, timer_one)}ms`);
};

main();
