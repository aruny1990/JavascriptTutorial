console.log("Hello World");

console.error("aray err");

console.warn("some warning!");

console.info("this is my js code");

const user = {
    name:"John",
    age:34,
    city:"Bangalore",
    country:"India"
}

const user1 = {
    name:"Lisa",
    age:30,
    city:"LA",
    country:"USA"
}
console.log(user);
console.table({user,user1});

console.group("Login Feature");
console.log("reset pwd");
console.log("error login mesg");
console.log("enter username/password");
console.groupEnd();

// console.time("print 1 to N values");
// for(let i=1;i<=10000;++i){
//     console.log(i);
// }

// console.timeEnd("print 1 to N values");
console.log("reset password");
console.log("reset password");
console.log("reset password");
console.log("reset password");
console.clear();
console.count("reset password");
console.count("reset password");
console.count("reset password");
console.count("reset password");

console.assert(10==20,"this is FAILED");

let flag = true;

console.assert(true,"this is FAILED");

console.log("=======================");

function testMyJob(){
    console.trace();
}

testMyJob();

console.log("%c I love JS coding!!!","color:red; background-color:green; border:solid") //css selector we have to apply