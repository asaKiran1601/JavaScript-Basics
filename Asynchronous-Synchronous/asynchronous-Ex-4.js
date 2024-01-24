console.log("Operation started");

function main(callback){
    console.log('Data is Loading...');
    setTimeout( () =>{
        var data = {Name : 'Asa Kiran', Institute : 'BridgeLabz'};
        callback(data)
    }, 1000);
}
function printData(result){
    console.log('Data: ', result);
}
main(printData);