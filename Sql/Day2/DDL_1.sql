create database colleges_db;

use colleges_db;

create table students(
student_id int primary key auto_increment,
student_name varchar(100) not null,
student_age int check (student_age>=18),
student_email varchar(100) unique,
city varchar(50) default "chennai",
admission_date date
);

desc students;