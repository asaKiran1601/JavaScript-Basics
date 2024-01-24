// function f1(){
//     console.log('This is F1 function');
// }

// function f2(){
//     console.log('This is F2 function');
//     f1();
// }

// f2();

function f1(callback){
    console.log("This is f1");
    callback()
}
function f2(){
    console.log('this is f2');
}
// callback = f2()
f1(f2); // passing f2 as a callback to f1