let employees = [
    { id: 1, Name: "Mahesh", salary: 25000 },
    { id: 2, Name: "Samuvel", salary: 30000 },
    { id: 3, Name: "Deepak", salary: 35000 },
    { id: 4, Name: "Ramesh", salary: 40000 }
];


let name = employees.map((employee) => {
    return employee.Name
});

console.log(name);