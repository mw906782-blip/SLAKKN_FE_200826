create database companydb;

use  companydb;

create table departments(

department_id int primary key auto_increment,
department_name varchar(50) not null,
trainer_name varchar(50) not null,
course_name varchar(50) not null
); 


create table employees (

employee_id int primary key auto_increment,
employee_name varchar(50) not null,
department varchar(50) not null,
salary decimal(10,2) check (salary > 0), 
joining_date date
);

INSERT INTO departments
(department_name, trainer_name, course_name)
VALUES
('HR', 'mahesh', 'fs'),
('IT', 'mahesh', 'fs'),
('Finance', 'mahesh', 'fs'),
('Sales', 'mahesh', 'fs'),
('Marketing', 'mahesh', 'fs');

INSERT INTO employees
(employee_name, department, salary, joining_date)
VALUES
('Ajith', 'HR', 30000, '2024-01-10'),
('Bala', 'IT', 45000, '2024-02-15'),
('Karthik', 'Finance', 35000, '2024-03-20'),
('Manoj', 'Sales', 40000, '2024-04-25'),
('Surya', 'Marketing', 32000, '2024-05-30');

select * from departments;

select * from employees;

show tables;

drop table departments;

show tables;

select * from employees;


drop database companydb;