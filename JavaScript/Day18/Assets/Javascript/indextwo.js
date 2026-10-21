
function calculateSalary(salary, callback) {
    return callback(salary);
}

let addBonus = (salary) => {
    return salary + 5000;
};

let deductSalary = (salary) => {
    return salary - 2000;
};

let salary = 20000;

console.log("Original Salary:", salary);

console.log("Salary After Bonus:", calculateSalary(salary, addBonus));

console.log("Salary After Deduction:", calculateSalary(salary, deductSalary));
