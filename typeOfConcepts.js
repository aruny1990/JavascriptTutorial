//JS is not compile time language, we don't needt odecalre the datatype so it is decided at the runtime
//JS iis interpreted language executed line by line
let x = 30;
console.log(typeof(x));

x = "Hello";
console.log(typeof(x));

x = {
    name:'John',
}

console.log(typeof x);

let flag = true;
console.log(typeof flag);

const arr= [1,2,3,4,5];
console.log(typeof arr);

const j = null;
console.log(typeof j);

let y;
console.log(typeof y);

function print(name){
    console.log("My name is "+ name);
}

console.log(typeof print);