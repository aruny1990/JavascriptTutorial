//Function that returns a resolved promise
const resolvedPromise = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolved!");
        },1000);
    });
};


//Function that returns a rejected promise
const rejectPromise = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Rejected!");
        },500);
    });
};

//use Promise.race() to see   which promise settles first
Promise.race([
    resolvedPromise(),
    rejectPromise()
])
.then(result=>{
    console.log("Results: ",result);
})
.catch(error=>{
    console.log("Error ",error);
})