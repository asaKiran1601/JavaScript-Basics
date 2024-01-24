let myPromise = new Promise(function(resolve, reject) {
    let status = 0;

    if (status === 200) {
        resolve("Success!");
    } else {
        reject('Error!');
    }
});

myPromise.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
});
