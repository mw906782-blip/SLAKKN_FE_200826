let student = [
    { id: 1, name: "Mahesh", Age: 21},
    { id: 2, name: "Samuvel", Age: 21},
    { id: 3, name: "Deepak", Age: 21}
]

let result = student.find((student) => {
     return student.id === 2;
})

console.log(result)