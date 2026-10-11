let marks = [75, 80, 35, 90, 65];

let result = marks.some((marks) =>{
    return marks < 40;
});
console.log(result);

let resultOne = marks.every((marks) =>{
    return marks >= 30;
})

console.log(resultOne);