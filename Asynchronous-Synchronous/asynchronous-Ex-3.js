function printMe(){
    console.log("I am PrintMe Function's statement")
}
function testMe(){
    console.log("I am testMe Function's statement")
}

// Here print the test me statement with a setTimeout of 2 sec
setTimeout(testMe, 2000);
// and print the PrintMe function without any delay
printMe();

// The print function executed 1st though the testMe function invoked 1st. Because of asynchronous behaviour and the printMe function does not stop for the textMe statement to execute.