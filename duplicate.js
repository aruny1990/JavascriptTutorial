const numbers = [1,2,3,4,4,4,4,5,6,6,7];
const names = ["Naveen","Tom","Lisa","Naveen","Peter","tom","raj","Robby","Tom"];

const uniquezNumbers = [...new Set(numbers)];
console.log(uniquezNumbers);

const uniquezNames= [...new Set(names)];
console.log(uniquezNames);