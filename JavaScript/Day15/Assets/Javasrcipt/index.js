let employees = [];

let form = document.getElementById("employeeForm");
let tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let department = document.getElementById("department").value.trim();
    let salary = Number(document.getElementById("salary").value);

    if (
        name === "" ||
        document.getElementById("age").value === "" ||
        department === "" ||
        document.getElementById("salary").value === ""
    ) {
        alert("Please fill in all fields");
        return;
    }

    if (
        !Number.isInteger(age) ||
        age <= 0 ||
        !Number.isFinite(salary) ||
        salary <= 0
    ) {
        alert("Enter a valid positive age and salary");
        return;
    }

    let employee = {
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let data = "";

    employees.forEach(function (emp) {
        data += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = data;

    form.reset();

});