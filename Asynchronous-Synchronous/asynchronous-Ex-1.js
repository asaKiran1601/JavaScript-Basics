
// callback function perform action after completing all the operations.
// setTimeout is a callback function.
// asynchronous means not occurring/executing at the same time.

function main(){
    console.log("Statement-1 Before SetTimeout!");
    setTimeout(function(){
        console.log('Statement-2 inside a setTimeout method!'); // This line appears after a delay of 2000ms
    },2000)
    console.log('Statement-3 after the SetTimeout!');
}

console.log('Statement-4 before calling a function');
main()
console.log('Statement-5 after calling a function');
