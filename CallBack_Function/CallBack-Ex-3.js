function greet(name, callback){
    console.log(`Hello ${name}!`);
    callback();
}

function goodBye(){
    console.log('Thank You for visiting!')
}
greet('Asa Kiran',goodBye);