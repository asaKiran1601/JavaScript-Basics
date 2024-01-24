// // let us fetch the data from API by using async and await
// // Error Handling by using try and catch block
// let url = 'https://jsonplaceholder.typicode.com/todos/1';

// async function handlePromise(){

//     try{
//         // Here fetch is a promise so we are using await before it assign it to a variable  
//         let data = await fetch(url)    
//         // Here again the data.json() will return a promise 
//         let jsonValue = await data.json();
//         console.log(jsonValue);
//     }
//     catch(Error){
//         console.log(Error)
//     }
//     // This is how we actually fetch the data
//     // fetch(url).then((res)=> res.json()).then((res)=>console.log(res))
//     // fetch(url) => Response.json() => jsonValue
// } 
// handlePromise();
// ----------------
// let us fetch the data from API by using async and await
// Error Handling by using .catch() method
let url = 'https://jsonplaceholder.typicode.com/todoss/1';

async function handlePromise(){

        // Here fetch is a promise so we are using await before it assign it to a variable  
        let data = await fetch(url)    
        // Here again the data.json() will return a promise 
        let jsonValue = await data.json();
        console.log(jsonValue);

    // This is how we actually fetch the data
    // fetch(url).then((res)=> res.json()).then((res)=>console.log(res))
    // fetch(url) => Response.json() => jsonValue
} 
handlePromise().catch((res)=>console.log(res));
