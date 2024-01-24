function main(arr,callback){
    for(let i=0; i<arr.length ; i++){
        callback(arr[i]);
    }
}

function callbackFunction(result){
    console.log("Result: ", result);
}

let array = [1,2,3,4,5]

main(array, callbackFunction);