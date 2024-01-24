function result(data) {
    data();
}

function sum(num1, num2) {
    return function() {
        console.log(num1 + num2);
    };
}

let add = sum(5, 5);
result(add);
