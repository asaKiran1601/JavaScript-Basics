let number = [3,5,6,7,9,4,7]
function main(callback){
    console.log("Wait for result!");
    number.forEach(callback)
}

function callbackFunction(numbers){
    console.log('Array numbers : ', numbers);
}

main(callbackFunction);