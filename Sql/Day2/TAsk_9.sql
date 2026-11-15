create database library_db;

use library_db;

create table books(

book_id int primary key auto_increment,
book_name varchar(50) not null,
author varchar(50) not null,
price decimal (10,2) check (price > 0),
published_date date
);

insert into books 
(book_name, author, price, published_date)
values
('Wings of Fire', 'A.P.J. Abdul Kalam', 350, '1999-01-01'),
('The Alchemist', 'Paulo Coelho', 450, '1988-01-01'),
('Atomic Habits', 'James Clear', 550, '2018-10-16'),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 400, '1997-04-01'),
('Ikigai', 'Hector Garcia', 300, '2016-08-29');


select * from books;

truncate table books;

select * from books;
