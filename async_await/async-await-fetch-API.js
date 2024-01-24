// let us fetch the data from API by using async and await

let url = 'https://jsonplaceholder.typicode.com/todos/1';

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
handlePromise();
