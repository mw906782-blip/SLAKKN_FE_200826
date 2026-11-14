use collegedb;

create table patients(
patient_id int primary key auto_increment,
patient_name varchar(50) not null,
age int check (age > 0),
gender varchar(50),
disease varchar(50),
admission_date date, 
doctor_name varchar (50)  
);

alter table patients add contact_number varchar(20);

alter table patients rename column disease to diagnosis;

alter table patients modify patient_name varchar(150); 