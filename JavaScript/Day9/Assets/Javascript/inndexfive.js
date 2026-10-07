function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(20, 10, add);

calculate(20, 10, subtract);