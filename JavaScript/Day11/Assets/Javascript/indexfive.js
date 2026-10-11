let employees = [
    { id: 1, Name: "Mahesh", salary: 25000 },
    { id: 2, Name: "Samuvel", salary: 30000 },
    { id: 3, Name: "Deepak", salary: 35000 }
];

let salary = employees.filter((employee) => {
    return employee.salary >= 30000;
});

console.log(salary);