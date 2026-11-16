use collegedb;

create table orders (

order_id int primary key auto_increment,
customer_name varchar(50) not null,
product_name varchar(50) not null,
quantity int default 0,
price decimal (10,2) check (price > 0),
order_date date
);

insert into orders (customer_name, product_name, quantity, price, order_date)
values
('Arun', 'Laptop', 2, 55000, '2026-01-10'),
('Bala', 'Mouse', 1, 450, '2026-01-11'),
('Kumar', 'Keyboard', 3, 1200, '2026-01-12'),
('Ravi', 'Monitor', 1, 8500, '2026-01-13'),
('Vijay', 'Headphones', 4, 1500, '2026-01-14'),
('Ajith', 'USB Cable', 2, 250, '2026-01-15'),
('Suresh', 'Laptop Stand', 1, 700, '2026-01-16'),
('Manoj', 'Webcam', 5, 2200, '2026-01-17'),
('Dinesh', 'Charger', 3, 400, '2026-01-18'),
('Karthik', 'Speaker', 2, 1800, '2026-01-19');

delete from orders where order_id = 4;

 delete from orders where quantity < 2;
 
 delete from orders where price < 500 and quantity < 500; 
 