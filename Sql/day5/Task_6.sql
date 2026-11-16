use Day_5;

create table students(

student_id int primary key auto_increment,
student_name varchar(50) not null,
course_name varchar(50) not null
);

insert into students( student_name, course_name)
values
('Arun', 'Java'),
('Bala', 'Python'),
('Kumar', 'Java'),
('Ravi', 'Python'),
('Priya', 'Java'),
('Divya', 'Java'),
('Manoj', 'Java'),
('Ajay', 'Java'),
('Ram', 'Python'),
('Devi', 'React'),
('Kavi', 'React'),
('Hari', 'React'),
('Gokul', 'React'),
('Vijay', 'Python'),
('Suresh', 'Java');


select course_name, count(*) as total_students from students group by course_name having count(*) > 5;