//Declaration of an array
let myArray = []; //An empty array
//let numbers = [1,2,3,4,5]; //An array with numbers


let lang = ["Java","Python","JS"];
//1. push
lang.push("Rubby");
console.log(lang);

//2.pop
let numbers = [1,2,3,4,5];
numbers.pop()
console.log(numbers);

//3. shifts
let fruits = ["apple","banana","orange"]; //An array with strings
let firstFruit = fruits.shift(); //It will remove and get the first value
console.log(firstFruit);
console.log(fruits);

//4. unshift
let colors = ['red','green','black','white'];
colors.unshift('blue','pink');
console.log(colors);
console.log(colors.length);

//5. splice - remove the elements from array if necessary add the elements in te array at that index
let animals = ['dog','cat','bird','fish'];
animals.splice(1,2,'bear'); //2 - represent total number of elemnts you want to remove and 1 - represents from where we need to start
console.log(animals);

//6. slice
let pop = [1,2,3,4,5];
let newpop = pop.slice(1,4);
console.log(newpop);

//7. Concat
let fr = ["apple","banana","orange"]; 
let num = [1,2,3,4];
let mixedArr = fr.concat(num);
console.log(mixedArr);

//8. indexof
let color = ["black","red","green","blue","red"];
let indexRed = color.indexOf("red"); //It will return the first occurence of the element in array
console.log(indexRed);
let naveenIndex = color.indexOf("naveen");
console.log(naveenIndex); //It will return -1 since it is not existing

//2. red index
let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
console.log(redSecondIndex);

//9. includes:
let test = ["admin","customer","seller","vendor"];
let flag = test.includes("seller"); //It checks the presence of the element
console.log(flag);

//10. for Each
let n = [1,2,3,4,5,6,7];
n.forEach((e)=>{
    console.log(e*2);
})