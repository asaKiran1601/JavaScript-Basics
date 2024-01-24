let url = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(url).then(response =>{
    if(!response){
        throw 'Data is not fetched properly!'
    }
    else{
        return response.json()
    }
})
.then(data =>{
    console.log(data);
})
.catch(error=>{
    console.log(error); 
})