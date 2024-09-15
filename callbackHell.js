//"pyramid of doom" pr "callback hell"

asyncFunction1((result) =>{
    asyncFunction2(resul1,(result2)=>{
        asyncFunction3(result2,(result3)=>{
            asyncFunction4(result3,(result4)=>{
                //More nested callbacks.....
            });
        });
    });
});

//better readability with Promise
asyncFunction1()
.then(result1=>asyncFunction2(result1))
.then(result2=>asyncFunction3(result2))
.then(result3=>asyncFunction4(result3))
.then(result4=>{
    //code here
})
.catch(error=>{
    //Error Handling
});

//or using async- wait
async function myFunction(){
    try{
        const result1 = await asyncFunction1(); //await used for internal step used for async operation will hold the execution for this particular line
        const result2 = await asyncFunction2(result1);
        const result3 = await asyncFunction3(result2);
        const result4 = await asyncFunction4(result3);
        //code here
    }catch(error){
        //Error handling
    }
}