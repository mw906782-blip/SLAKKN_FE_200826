use Day_5;

create table depart (

emp_id int primary key auto_increment,
emp_name varchar(50) not null,
department varchar(50)not null,
salary decimal(10,2) check (salary > 0)
);

INSERT INTO depart (emp_name, department, salary)
VALUES
('Arun', 'IT', 50000),
('Bala', 'IT', 45000),
('Kumar', 'IT', 35000),
('Ravi', 'HR', 30000),
('Priya', 'HR', 35000),
('Divya', 'HR', 40000),
('Manoj', 'Sales', 55000),
('Ajay', 'Sales', 60000),
('Ram', 'Sales', 45000),
('Devi', 'Finance', 48000),
('Kavi', 'Finance', 52000),
('Hari', 'Finance', 55000),
('Gokul', 'Marketing', 25000),
('Vijay', 'Marketing', 30000),
('Suresh', 'Marketing', 35000);



select department, avg(salary) as 	avg_salary from depart group by department having avg(salary) > 40000;