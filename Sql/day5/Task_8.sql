use Day_5;

create table product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    cost DECIMAL(10,2) NOT NULL
);

insert into product(product_name, category, cost)
values
('Laptop', 'Electronics', 65000),
('Mobile', 'Electronics', 25000),
('Keyboard', 'Accessories', 1500),
('Monitor', 'Electronics', 18000),
('Mouse', 'Accessories', 800),
('Tablet', 'Electronics', 30000),
('Headphones', 'Accessories', 5000),
('Smart Watch', 'Electronics', 12000),
('Gaming Laptop', 'Electronics', 85000),
('Printer', 'Electronics', 15000),
('Webcam', 'Accessories', 3500),
('Projector', 'Electronics', 45000);


select * from product where cost > 10000 order by cost desc;