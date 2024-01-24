// // async keyWord is used to make the function
// // async will always return a promise

// const promise = new Promise(function(resolve, reject){
//     resolve('Promise resolved the value!!!');
// })
// async function getData(){
//     // return 'Hello User';
//     // What if we return a promise instead of value 
//     return promise;
//     // The above promise won't me wraped into the async created promise because it is alread a promise
//     // so the promise = getData() 
// }
// // async function always return a promise
// const dataPromise = getData();

// // console.log(dataPromise); // It will not return the value it will return the promise because getData() is a promise know with the help of async

// // So, know the getData() is a promise, We know by '.then method' we get the value of the promise
// dataPromise.then(responce => console.log(responce))
// promise.then(responce => console.log(responce)) // both gives the same output

// // => Let see how we deal with Promise without using async and await

// const promise1 = new Promise(function(resolve, reject) {
//     resolve("Promise is resolved!!");
//   });
  
//   function getData() {
//     // When we call the function, this will be executed, and it will return the value.
//     promise1
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
  
//   getData();


// => Await
//  -- Await is used infront of a promise that has to be resolved and assign it to a variable. that variable will contain the value of promise.

//  ** Lets see with an example

  const promise = new Promise(function(resolve,reject){
  resolve("Promise is resolve!!")
})

 async function handlePromise(){
        const val = await promise;
        console.log(val); // o/p :- Promise is resolve!!
    } 
    handlePromise();