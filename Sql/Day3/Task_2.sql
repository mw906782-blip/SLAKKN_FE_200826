use collegedb;

create table employees(

employee_id int primary key auto_increment,
e_name varchar(50) not null,
emp_salary decimal (10,2),
emp_department varchar(100) default "IT",
joining_date date,
emp_city varchar(100) default "Chennai"
);

alter table employees rename column e_name to emp_name;

alter table employees modify emp_salary decimal (12,2);

alter table employees add emp_email varchar(100) unique;

desc employees;