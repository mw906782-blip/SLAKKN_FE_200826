
function createCounter() {
    let count = 0;

    return () => {
        count = count + 10;
        console.log(count);
    };
}

let counter = createCounter();

counter();
counter();
counter();
counter();
counter();
