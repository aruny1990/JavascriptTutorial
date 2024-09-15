//If we need to repetitive work we need to use loops
//1 to 10
//for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

console.log("---------------");

//for...of loop: //It's like for each loop in java
const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log("-----------------------------------")
//
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}

console.log("---------------------------");
//while 1 to 10
let p=1;
while(p<=10){
    console.log(p);
   // p++;
  // ++p;
  p = p+1;
}

console.log("------------------");

//
let l=2;
while(l<=10){
    console.log(l);
    l+=2;
}

console.log("-----------------------");

//Do-while llop - It is like while loop only but it will execute at least once
let h=1;
do{
    console.log(h);
    h++;
}while(h>=10);

console.log("------------------------");
//break
//print 1 to 100: print the hi when you see the multiplication of break
let num=0;
while(num<=100){
    console.log(num);
    if(num % 5==0){
        console.log("Hi---bye");
        break;
    }
    num++;
}

console.log("---------------------------");
//
const browser = ["chrome","firefox","edge","IE"];
for(const e of browser){
    console.log(e);
    if(e=="edge"){
        console.log(e);
        console.log("Launch edge....");
        break;
    }
}


console.log("--------------------");
//for...of loop of an object
const user = {
    name:"John Doe",
    age: 30,
    city: "New York City",
}
for(const key in user){
    console.log(key +" : " + user[key]);
}

console.log("----------------");
const br = ["chrome","firefox","edge","IE"];
for(const ele in br){
    console.log(br[ele]); //ele represents the index
}