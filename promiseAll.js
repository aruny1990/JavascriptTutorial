//promise.all - If we want ot perform multiple async operation in parallel mode
//1. 
//f1 -- resolve
//f2 --resolve
//f3 -- resolve

const function1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // resolve("data from function 1");
           const data = [1,2,3,4,5];
           resolve(data);
        },2000);
    });
    
};

const function2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = [6,7,8,9];
            //resolve("data from function 2");
            resolve(data);
        },2000);
    });
    
};

const function3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // resolve("data from function 3");
           const data = [10,11,12,13];
           resolve(data);
        },2000);
    });
    
};

// Corrected: Promise.all should take an array of promises
Promise.all([
    function1(),
    function2(),
    function3()])
.then(dataArray => {
    console.log("All Data from diff function: ",dataArray);
})
.catch(error=>{
    console.log("Error in promise",error);
});


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

Promise.all([
    getData1(),
    getError()]
    )
.then(dataArray =>{
    console.log("All data fetched: "+dataArray);
})
.catch(error=>{
    console.log("Error occured: ",error);
});