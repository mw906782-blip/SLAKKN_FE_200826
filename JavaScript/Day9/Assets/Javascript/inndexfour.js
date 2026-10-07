function createCounter() {

    let count = 0;

    function counter() {
        count++;
        console.log(count);
    }

    return counter;
}

let myCounter = createCounter();

myCounter();
myCounter();
myCounter();