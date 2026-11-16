use day_4;

create table students(
student_id int primary key auto_increment,
student_name varchar(50) not null,
age int check ( age > 17),
city varchar(50) not null
);

insert into students(student_name, age, city)
values
('mahesh',23,'Chennai'),
('lokesh',18,'Madurai'),
('Deepak',19,'Chennai'),
('Sam',21,'Madurai'),
('mahesh',22,'Chennai'),
('Joy',21,'Madurai'),
('Ragu',19,'Chennai'),
('Sam',20,'Madurai');


insert into students (student_name, age, city)
values
('mahesh',30,'Chennai');


select * from students where age between 18 and 25
and city in ('Chennai','Madurai');



