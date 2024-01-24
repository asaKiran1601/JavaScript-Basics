async function myFunction(){
    console.log('Hello');
    await new Promise((reslove)=> setTimeout(reslove));
     console.log('This is executed after await!')

    let status = 200;
    if (status === 200){
        return "Success!"
    }
    else{
        return "Error!"
    }

}

myFunction().then((value)=>{
    console.log("Status :",value)
})
.catch((Error)=>{
    console.log(Error);
})