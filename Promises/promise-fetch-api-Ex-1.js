let url =('https://dummyjson.com/products/1');

fetch(url).then(responce =>{
    return responce.json()
})
.then((data)=>{
    console.log("data: ",data);
})
.catch((Error)=>{
    console.log('Error: ', Error);
})