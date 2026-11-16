use day_4;

create table products(

product_id int primary key auto_increment,
product_name varchar(50) not null,
category varchar(50) not null,
stock int default 0,
price decimal (10,2) check (price > 0)
);

insert into products (product_name, category, stock, price)
values
('Laptop', 'Electronics', 10, 50000),
('Mouse', 'Electronics', 20, 500),
('Keyboard', 'Electronics', 15, 1200),
('Monitor', 'Electronics', 8, 12000),

('Shirt', 'Clothing', 25, 800),
('Jeans', 'Clothing', 15, 1500),
('Jacket', 'Clothing', 10, 2500),

('Rice', 'Groceries', 50, 60),
('Sugar', 'Groceries', 40, 45),
('Oil', 'Groceries', 30, 150);

select * from products;
select category, sum(stock) as total_stock,avg(price) as average_price from products group by category;
