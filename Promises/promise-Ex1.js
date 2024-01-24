let promise = new Promise(function (reslove, reject){
    
    let heComes = true;

    if (heComes){
        reslove("He is Coming to office!");
    }
    else{
        reject("He can't come to office!");
    }
})

promise.then((fromResole) => {
    console.log(fromResole);
})
.catch((fromReject)=>{
    console.log(fromReject);
})

