
let employees = JSON.parse(localStorage.getItem("employees")) || [];

let form = document.getElementById("employeeForm");
let tableBody = document.getElementById("tableBody");


// Save the array in localStorage
function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}


// Display all employees in the table
function displayEmployees() {
    let data = "";

    employees.forEach(function (emp) {
        data += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button type="button" onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = data;
}


// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let ageValue = document.getElementById("age").value;
    let department = document.getElementById("department").value.trim();
    let salaryValue = document.getElementById("salary").value;

    if (
        name === "" ||
        ageValue === "" ||
        department === "" ||
        salaryValue === ""
    ) {
        alert("Please fill in all fields");
        return;
    }

    let age = Number(ageValue);
    let salary = Number(salaryValue);

    if (
        !Number.isInteger(age) ||
        age <= 0 ||
        !Number.isFinite(salary) ||
        salary <= 0
    ) {
        alert("Age must be a positive whole number and salary must be positive");
        return;
    }

    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    saveEmployees();
    displayEmployees();

    form.reset();
});


// Delete an employee using the employee ID
function deleteEmployee(id) {
    employees = employees.filter(function (emp) {
        return emp.id !== id;
    });

    saveEmployees();
    displayEmployees();
}


// Display saved records when the page loads
displayEmployees();
