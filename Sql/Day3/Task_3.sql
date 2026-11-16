use collegedb;

create table products(

product_id int primary key auto_increment,
product_name varchar(100) not null,
product_price decimal(10,2) check (product_price > 0),
category varchar(50) not null,
stock int default 0 check (stock >= 0),
manufacturing_date date 
);

rename table products to product_details;

alter table product_details drop check product_details_chk_1;

desc product_details;

alter table product_details rename column product_price to price;

alter table product_details drop column manufacturing_date;