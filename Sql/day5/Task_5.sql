use Day_5;

create table employs(

emp_id int primary key auto_increment,
emp_name varchar(50) not null,
department varchar(50) not null,
salary decimal (10,2) check (salary > 0),
city varchar(50) not null
);


insert into employs(emp_name, department, salary, city)
values

('Arun', 'HR', 25000, 'Chennai'),
('Bala', 'IT', 35000, 'Minjur'),
('Kumar', 'HR', 30000, 'Ponneri'),
('Ravi', 'Sales', 40000, 'Ambattur'),
('Vijay', 'Finance', 28000, 'Avadi'),
('Ajith', 'IT', 45000, 'Chennai'),
('Suresh', 'HR', 32000, 'Red Hills'),
('Manoj', 'Sales', 38000, 'Minjur');

select * from employs where salary > 30000 order by salary desc;