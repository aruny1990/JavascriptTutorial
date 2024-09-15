//In java script promises are way to handle asynchronous operations in a more organized and readable manner

//They provide a cleaner syntax for dealing with asynchronous code compared to traditional callback-based approaches

//Promises are widely used for tasks like making netwrok requests, reading/writing files and other applications that don't block the main thread

//A promise represent a value that may not be available yet but will be resolved at some point in the future

//It can be one of three states pending, fulfilled or rejected.

//Once promise is fulfilled or rejected. It's considered settled and its state cannot change

//Asynchronous operations - Promises are a way to handle asynchronous operations in javascript. They provide a structure for managing and chaining asynchronous tasks.


//states: Promises have three states : pending, fulfilled and rejected. They start in the pending state
// and transistion to either fulfilled (if the operation is succesful) or rejctts (it fails).

//callbacks: Promises use then() and catch()  method to specify callbacks for when the promise is fulfilled 
// or rejected. This promotes a more structured and readable code flow.

const randomNumberPromise = new Promise((resolve,reject)=>{
    //async operation:
    setTimeout(()=>{
        const randomValue = Math.random();
        if(randomValue>0.5){
            resolve(randomValue);
        }else{
            reject(new Error("value is too small"));
        }
    },2000); //delay of 2s
});

randomNumberPromise
.then(result=>{
    console.log("Promise is fulfilled with values: ",result);
})
.catch(error =>{
    console.error("promise is rejected with error: ",error);
})