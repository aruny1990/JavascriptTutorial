//Promise.allSettled();

//Behavior:
//It requires a single promise tha tis fulfilled with an array of result objects, one for each promise
//Each result contains:
//a status (either "fulfilled" or "rejected") and
// a value (fulfilled value) or reason (rejection reason)

//use case:
//Useful when you want to process all promises, whether they success or fail
//and you want to gether information about the outsome of each promise

const getData1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("get Data from getData");
        },2000);
    });
    
};

const getError = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           reject("Error: data is not available from getError");
        },2000);
    });
    
};

Promise.allSettled([
    getData1(),
    getError()]
    )
.then(result =>{
    result.forEach(result=>{
        if(result.status == 'fulfilled'){
            console.log("value: ",result.value);
        }else{
            console.error("reason for rejection: "+result.reason);
        }
    })
})
.catch(error=>{
    console.log("Error occured: ",error);
});