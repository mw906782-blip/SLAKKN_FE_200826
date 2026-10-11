let number = [100,200,300,400];

let result = number.reduce((sum, number) => {
    return sum + number;
});

console.log(result)