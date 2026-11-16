use collegedb;

create table customers(

customer_id int primary key auto_increment,
customer_name varchar(50) not null,
email varchar(50) unique,
city varchar(50) not null,
age int check (age>17),
registration_date date

);

insert into customers (customer_name, email, city, age, registration_date)
values
("Mahesh","mw906782@gmail.com","chennai",21,"2026-12-04"),
('Arun', 'arun@gmail.com', 'Chennai', 21, '2026-01-10'),
('Bala', 'bala@gmail.com', 'Minjur', 22, '2026-01-11'),
('Kumar', 'kumar@gmail.com', 'Ponneri', 24, '2026-01-12'),
('Ravi', 'ravi@gmail.com', 'Ambattur', 25, '2026-01-13'),
('Vijay', 'vijay@gmail.com', 'Avadi', 23, '2026-01-14'),
('Ajith', 'ajith@gmail.com', 'Thiruvallur', 26, '2026-01-15'),
('Suresh', 'suresh@gmail.com', 'Tiruvottiyur', 28, '2026-01-16'),
('Manoj', 'manoj@gmail.com', 'Red Hills', 20, '2026-01-17'),
('Dinesh', 'dinesh@gmail.com', 'Chennai', 27, '2026-01-18');

insert into customers (customer_name, email, city, age, registration_date)
values
("sam","sam22@gmail.com","minjur",21,"2026-12-04");

insert into customers (customer_name, email, city, age, registration_date)
values
("Deepak","deepak21@gmail.com","minjur",20,"2026-11-06");

insert into customers(customer_name, email, city)
values
("mahesh","mw06782@gmail.com","minjur");

