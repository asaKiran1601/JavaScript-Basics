function f1(){
    console.log('f1 statement');
}
function f2(){
    console.log("f2 statement");
    f1();
}
function f3(){
    console.log('f3 statement');
    f2();
}
f3();

// flow f3 -> f2 -> f1