// If the promise state is successful(Reslove)

let value = 'Jack gets water from the well'
value = false;
if(value){
    let promiseReslove = new Promise(function (reslove, reject){
        reslove('Hurray! Featched the water')
    })
    
    promiseReslove.then((fromResole)=>{
        console.log(fromResole,'We can start cooking');
    })
} 
else{

    // If the state is unsuccessful(Reject)
    
let promiseReject = new Promise(function (reslove, reject){
    reject( 
        new Error(
            "Jack fell down and he was not able to Fetch the water from the well!"
            )
    )
})
promiseReject.catch((fromReject)=>{
    console.log(`${fromReject} We didn't get water for cooking.`);
})
}