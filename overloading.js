//Method overloading concept is not there in js

function print(){
    console.log("Hi")
}

print(); //It is decided at runtime so again third function will be called

function print(name){
    console.log("Hi "+name);
}

function print(name,age){
    console.log("hi "+name+ " age "+age );
}

//It will start calling by third function. It will be overriden by latest function
print();

print("Naveen",20);


function displayBrowserInfo(browserName,browserVersion,remoteExecution){
    if(typeof browserVersion == 'number' && typeof remoteExecution == 'boolean'){
        console.log(`Browser: ${browserName}, version: ${browserVersion}, remoteExec:${remoteExecution}`);
    }else if(typeof browserVersion == 'number'){
        console.log(`Browser: ${browserName}, version: ${browserVersion}`);
    }else{
        console.log(`Browser: ${browserName}`);
    }
}

displayBrowserInfo('chrome',115,true);
displayBrowserInfo('chrome',115);
displayBrowserInfo('firefox');