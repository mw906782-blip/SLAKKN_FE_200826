create database college_db;

use college_db;

create table students(
student_id int primary key auto_increment,
student_name varchar(50) not null,
student_age int check (student_age>=18),
student_email varchar(100) unique not null,
student_mobile varchar(20),
student_course varchar(50),
student_fees decimal(10,2) check (student_fees > 0),
admission_date date,
student_city varchar(50) default "chennai"
);


desc students;