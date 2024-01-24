// let & const are blocked scope variable 
// we can't re-declare but we can initilize let.

let a = 10;
console.log('let value before re-inilization-',a);
// Here a will be 10

let b;
b = 20;
console.log('let value outside block-',b);

a = 40;
console.log('let value after re-inilization-',40);

{
    let a = 30;
    console.log('let value inside block-',a);
    // Here a will be 30
}

// we can,t re-declare and re-initilize const.
// It should be declared and inilitize at a same time(same line).
const x = 100;
console.log("const Value-",x);

