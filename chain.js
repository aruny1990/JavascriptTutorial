function getEvenNumber(value,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value % 2==0){
                resolve(value);
            }else{
                reject(new Error("value is not divisble by 2"));
            }
        },delay);
    });
}

//promise chain
getEvenNumber(4,1000)
    .then(result=>{
        console.log("step 1: getting the result: ",result);
        return getEvenNumber(6,2000); //this o/p will input for other then block
    })
    .then(result=>{
        console.log("step 2: getting the result with even number: ",result);
    })
    .catch(error =>{
        console.log("promise chain error: ",error)
    });