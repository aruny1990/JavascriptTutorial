//async-await - modern way of handling async calls/steps
//steps
//used with promises
//async - function keyword - beofre function name
//await - keyword/operator: async steps

//Declaring async function
async function get(){
    //It will return a promise - mandatory
    //step - sync - no need of await
    //await step2 - async - time - wait - 5 sec - hold the step for 5 sec
    //await step3 - aysnc
}

function get1(){
    //cann not write await here
}

async function get2(){
    return 42; //--wrapped 42 in the resolved promise and then return
}

async function get3(){
    throw new Error("messg"); //--warp the error in a rejected promise and return
}

async function get4(){
    //I donot have await or async steps we can write without any problem
}

//Normal function we cannot write await steps

//function f1(){
//     return new Promise(resolve()=>{
//         //return 42,
//     });
// }


async function f2(){
    await f1(); //--async step - returning a promise
}

async function getUserData(){
    await fetchData() //async  - 5 sec
    console.log("get the data"); //sync
    await writeDataInDBFile(); //async - 10 secs
    const val = 10; //sync
}