create database collegedb;

use collegedb;

create table student_s(

student_id int primary key auto_increment,
student_name varchar(50) not null,
student_age int check(student_age>=18),
student_email varchar(100) unique,
student_couurse varchar(50),
student_fees decimal(10,2) check (student_fees>0),
admission_date date
);

rename table student_s to student_details;

alter table student_details add mobile_number varchar(50);

desc student_details;


