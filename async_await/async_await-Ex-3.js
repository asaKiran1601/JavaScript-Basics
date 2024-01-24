//  if we call 2 same promises at same time using await 

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise Resloved!!");
//     },10000)
// })

// console.log('Statement before async await!!!');

// async function handlePromise(){
    // JS engine is waiting for promise to resolve
//     let val1 = await promise;
//     console.log('Hello user-1!')
//     console.log('Await-1',val1);
    
//     let val2 = await promise;
//     console.log('Await-2',val2);
// }

// handlePromise();

// Here, the 1st await will give result in 10sec but second operation wont take 10sec because during 1st 10 sec only the 2nd await will be loaded and will be waiting to give responce


// ----------------------------------

// What if we use two different promises and call one after one
// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise-1 Resloved!!");
//     },10000)
// })
// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise-2 Resloved!!");
//     },5000)
// })

// console.log('Statement before async await!!!');

// async function handlePromise(){
//     let val1 = await promise1;
//     console.log('Hello user-1!')
//     console.log('Await-1',val1);
    
//     let val2 = await promise2;
//     console.log('Await-2',val2);
// }

// handlePromise();

// --------------------------------------
// What if we change the eecution time of promises. will they print at the same time?

let promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise-3 Resloved!!");
    },5000)
})
let promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise-4 Resloved!!");
    },10000)
})

console.log('Statement before async await!!!');

async function handlePromise(){
    let val3 = await promise3;
    console.log('Hello user-1!')
    console.log('Await-3',val3);
    
    let val4 = await promise4;
    console.log('Await-4',val4);
}

handlePromise();