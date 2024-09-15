//1. var: old way
//ES6
//scope: var
//functionally/locally  + global scope

var x =10;
function test(){
    var y=20;
}

console.log(x);

var pop = "hi js"; //globally declared
function rel(){
    var top = "hello js"; //locally declared
    console.log(top);
}
rel();
console.log(pop);

//Re declaration and re initaliztion allowed in java script but not in java
var browser = "chrome";
var browser = "firefox";
browser = "edge"; //overriding or reinitializtion
console.log(browser);


//Default value of variable
var g;
console.log(g); //undefined

g = "hello world";
console.log(g)

//issue with var - What if we want ot use hey naveen
var flag = "hey naveen";
var t1 = 4;
if(t1>3){
    var flag = "hey tom"; // reinitiaalized
}

console.log(flag); //hey tom


//so let and constant started
//scope: blocks scoped
//{}
let m = "hey naveen";
let time =4;
if(time>3){
    let mesg = "hey h r u?";
    console.log(mesg);
}

//console.log(mesg);//will get errror ecause let is block scoped
console.log(m);

//
let len =4;
//let len =5; //Not allowed
len =5;
console.log(len);

//const
//constant values, string, date, days
const mg = "hey naveen";
//mg = "hey tom";
console.log(mg); //giving error because mg is constant variable

const days = 7;
console.log(100*days);

//
var p;
console.log(p); //undefined

let q;
console.log(q); //undefined

//const r; //issing initializer in const declaration
console.log(r);