//sync vs async behavior:
//1 -- done --fetch 100 usrs from API/DB -- 20 sec
//2 -- done - display user profile
//3 -- done
//4 -- done
//end
///blocking behavior for the user

console.log("start");
for(let i=0;i<3;i++){
    console.log(i);
}
console.log("end");
console.log("================================");

//Async
//1 - fetch user -- 100 users are coming from DB --> 20 secs --> callback function
//2 - display user profile -- 10 sec
//3 --fetch order info -- 5 sec
//4 do something else
//setTimeout is actually is an implementation of asynchronous behavior
console.log("start");
setTimeout(()=>{
    console.log("timeout is done");
},10000);
console.log("end");

//Sync vs async api
//If there are n number of requests send from client to server so in case of sync it will do first request then next
//But in case of async we are giving back to back request s ohere it really doesn't matter which request is completing first
//async request is not blocking the request and it is ot time consuming and performance is going to improve drastically
//sync api is to be used when ordering of request is important