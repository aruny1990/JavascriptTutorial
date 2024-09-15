//callback function - It is a function which is passedas an argument to other function and generally it will be executed after some specific task
//async call/task - onc ethis task is completed - thne only call back function will be called

function greet(name,callback){
    console.log('Hello'+ name); //normal /sync step/task, could be async call/api
    callback();
}

//callback function
function welcome(){
    console.log('welcome!!!!');
}

greet('Naveen',welcome);

//callback with async function or process
function printInfo(name,callback){

    //async function or task or step which is taking some time, we can put deilberate delay
    setTimeout(function(){
        console.log("Printing info for "+name);
        callback("plz call me back...");
    },1000);//delay of 1000ms/1sec
}

function displayMessage(mesg){
    console.log(mesg);
}

printInfo("Lisa",displayMessage);

function fetchUserData(userId,callback){
    setTimeout(function(){
        const users = {
            1:{id:1,name:"Naveen"},
            2:{id:2,name:"Tom"}
        };

        const user = users[userId];
        if(user){
            callback(null,user);
        }else{
            callback("user not found..",null);
        }
    },2000);
}

//callback function
function handleUserData(error,user){
    if(error){
        console.error("Error:"+error);
    }else{
        console.log("User: ",user);
    }
}

fetchUserData(3,handleUserData);