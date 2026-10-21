
function checkResult(mark) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            if (mark >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }

        }, 2000);

    });
}

checkResult(75)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });

checkResult(20)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
