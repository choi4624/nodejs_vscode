const promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("성공했음");
    }
    else{
        reject("실패했음");
    }
});

promise
    .then((message) => {
        console.log(message);})
    .catch((message) => {
        console.log(message);})
    .finally((message) => {
        console.log("무조건 실행");})