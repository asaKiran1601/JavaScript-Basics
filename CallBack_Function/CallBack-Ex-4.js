function main(callback){
    console.log("Task is Panding...");
    setTimeout(function(){
        callback('Operation Completed!');
    },1000);
}
function callbackFunction(result){
    console.log('Result:' + result );
}
main(callbackFunction)

// How it is working

// callback = callbackFunction(result)
// then callback() function is invoked
// now callback(result) = callbackFunction