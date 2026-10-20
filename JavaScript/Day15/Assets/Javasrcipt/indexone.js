let form = document.getElementById("calculatorForm");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");

let result = document.getElementById("result");
let clearBtn = document.getElementById("clearBtn");


function calculateResult(a, b, op) {

    let answer;

    if (op === "+") {
        answer = a + b;
    } else if (op === "-") {
        answer = a - b;
    } else if (op === "*") {
        answer = a * b;
    } else if (op === "/") {
        answer = a / b;
    }

    return answer;
}


form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);
    let selectedOperation = operation.value;

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        result.textContent = "Please enter valid numbers";
        return;
    }

    if (selectedOperation === "/" && secondNumber === 0) {
        result.textContent = "Cannot divide by zero";
        return;
    }

    let finalAnswer = calculateResult(
        firstNumber,
        secondNumber,
        selectedOperation
    );

    result.textContent = finalAnswer;

});


clearBtn.addEventListener("click", function () {

    form.reset();
    result.textContent = "---";

});