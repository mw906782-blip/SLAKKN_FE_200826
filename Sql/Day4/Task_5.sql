use day_4;

create table employ(
emp_id int primary key auto_increment,
emp_name varchar(50) not null,
 department varchar(50) not null,
 salary decimal(10,2) check (salary > 0)
);

insert into employ (emp_name, department, salary)
values
('Arun', 'IT', 50000),
('Bala', 'IT', 35000),
('Charan', 'IT', 25000),
('David', 'HR', 45000),
('Ezhil', 'HR', 55000),
('Farhan', 'HR', 30000),
('Gokul', 'Sales', 60000),
('Hari', 'Sales', 40000),
('Kumar', 'Sales', 20000),
('Lokesh', 'Sales', 50000);

select department, avg(salary) as average_salary from employ where salary > 25000 group by department having avg(salary) > 40000;

