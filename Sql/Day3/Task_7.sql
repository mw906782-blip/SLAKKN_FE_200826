use collegedb;

create table staff(

staff_id int primary key auto_increment,
staff_name varchar(50) not null,
department varchar(50) not null,
salary decimal (10,2) check ( salary > 0),
city varchar(50) not null
);


insert into staff 
(staff_name, department, salary, city)
values
('Arun', 'HR', 25000, 'Chennai'),
('Bala', 'IT', 35000, 'Minjur'),
('Kumar', 'HR', 30000, 'Ponneri'),
('Ravi', 'Sales', 40000, 'Ambattur'),
('Vijay', 'Finance', 28000, 'Avadi'),
('Ajith', 'IT', 45000, 'Chennai'),
('Suresh', 'HR', 32000, 'Red Hills'),
('Manoj', 'Sales', 38000, 'Minjur');

update staff set salary = 45000
where staff_id = 3;

update staff set department = "IT"
where staff_id = 5;

update staff set salary = salary + 5000
where department = "HR";

update staff set city = "Chennai"
where salary > 30000;
