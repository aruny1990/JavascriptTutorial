//. find unique values from an array
const array = [1,2,3,2,3,5,6,2];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//2. int to string
const num = 32;
const numStr = num + '';//'32'
console.log(numStr+10);//3210
//or
const numStr1 = String(num);//'32'
console.log(numStr1+19);

//3. float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

//4. chekc if a variable is a Number:
const value = 50;
if(typeof value== 'number' && !isNaN(value)){
    console.log('is number');
}else{
    console.log(value+' is not number');
}

//5. swap variable values
let a = 5;
let b =10;
[a,b] = [b,a];
console.log(a,b);

//6. check if an object has a property:
const person = {
    name:'John',
    age:30,
}

if(person.hasOwnProperty('address')){
    console.log('person has same property');
}

//7. remove falsy value from the array. (false,'B',"",null,undefined,NaN):
const values = [0,1,false,2,'',3,null,undefined,NaN,4]; //0 is also considered as false values
const newVal = values.filter(Boolean);
console.log(newVal);

//8. String --> uppercase, lower case
const str = "Naveen Automation Labs";
const u1 = str.toUpperCase();
const l1 = str.toLowerCase();
console.log(u1);
console.log(l1);

//9 check if array contains a specific value
const lang = ['Java','Javascript','python','ruby'];
if(lang.includes('Javascript')){
    console.log('found');
}

//10. check if specific array is an empty array
const empty = [];
if(empty.length ==0){
    console.log("Array is empty");
}

//11. Generate a random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max-min+1)+min);
console.log(`Random number: ${randomNumber}` );

//12. String to number
const strNumber = '32.0';
const x1 = parseFloat(strNumber);
console.log(x1);

//13 Join array elements into string
const words = ['Hello','Naveen'];
const sentence = words.join(' ');
console.log(sentence);

//14. get object properties
const user = {
    name:'Tom',
    age:25,
    dob: '01-01-1995'
};

console.log(user['name']);
console.log(user['age']);
console.log(user['dob']);

//15. cloning an array or object
const marks = [10,20,30,50,66,70];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const userDuplicate = { ...user };
console.log(userDuplicate);

//16. convert object to array
const employees = {
    name:'Tom',
    age:25,
    dob: '01-01-1995'
};

//Keys array
const keyArrays = Object.keys(employees);
console.log(keyArrays);

//Values array
const valArrays = Object.values(employees);
console.log(valArrays);

//key-value array
const keyValArray = Object.entries(employees);
console.log(keyValArray);

//17. get Current Data and Time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//18 check variable is defined
let i;
if(typeof i =='undefined'){
    console.log('variable not defined');
}

//19. turncate an array
const testing = [0,1,2,3,4,5,6,7];
testing.length =3;
console.log(testing);

//20 lat item in array
const pop = [0,1,2,3,4,5,6,7];;
const n1= pop.slice(-1);
console.log(n1);