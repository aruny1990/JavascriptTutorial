//array/object --> variables


//array
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const lang = ["Javascript","Java","Ruby","Python","GO"];
const [P,Q, ...testLang] = lang; //... -> spread operator
console.log(P);
console.log(Q);
console.log(testLang);

//object
const user = {
    firstName: "Tom",
    lastName: "Smith",
    age:30
}

const{firstName,lastName,city="LA",age} = user;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city)

//function params:
function printUserName(person){
    console.log(person.firstName+" "+person.lastName);
}

const person = {
    firstName: "John",
    lastName: "Doe"
}

printUserName(person);