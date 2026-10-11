let student = {
    namee: "Mahesh",
    age: 21,
    course: "JavaScript",
    city: "chennai"
};

for ( let key in student){
    console.log(key + " " + student[key]);
}