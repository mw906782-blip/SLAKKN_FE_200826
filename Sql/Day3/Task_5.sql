use collegedb;

create table courses (

course_id int primary key auto_increment,
course_name varchar(50) not null,
duration int default 3,
fees decimal (10,2) check ( fees > 0),
trainer_name varchar(50) not null,
start_date date
); 

alter table courses add course_status varchar(50);

alter table courses rename column trainer_name to instructor_name;

alter table courses modify duration varchar(20);

alter table courses modify duration varchar(30) default "3"; 

ALTER TABLE courses ALTER COLUMN duration SET DEFAULT '3';