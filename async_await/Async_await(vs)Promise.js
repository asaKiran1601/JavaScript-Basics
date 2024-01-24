// Promise code 
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('Promise Resloved!!!')
    },3000);
})

function handlePromise(){
    promise.then((res)=> console.log('Promise-',res));
    console.log('Hello User-promise!');
}
handlePromise();

// Same code using async and await

let promise1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('Promise Resloved!!!')
    },3000);
})
async function handlePromise1(){
    const val = await promise;
    console.log('async',val);
    console.log("Hello User-async")
}
handlePromise1();

// output will be
// Hello User-promise!
// Promise- Promise Resloved!!!
// async Promise Resloved!!!
// Hello User-async

// See here in promise function the didn't wait for promise to get resolved. but in the async and await untill the promise is resolved it wont move to next line.