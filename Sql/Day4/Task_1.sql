create database day_4;

use day_4;

create table employees (

emp_id int primary key auto_increment,
emp_name varchar(50) not null,
emp_email varchar(50) unique,
salary decimal(10,2) CHECK (salary > 0),
department varchar(50) not null,
city varchar(50)
);

insert into employees (emp_name, emp_email, salary, department, city)
value
('mahesh','mw906782@gamil.com',40000,'IT','Chennai'),
('deepak','dk906782@gamil.com',45000,'HR','minjur'),
('Sam','Sam906782@gamil.com',40000,'IT','minjur'),
('lokesh','lk906782@gamil.com',30000,'HR','ponneri'),
('mahesh','mw806782@gamil.com',280000,'IT','ponneri'),
('joy','jk906782@gamil.com',22000,'IT','ponneri');

select * from employees where department = 'IT' and salary > 30000;


