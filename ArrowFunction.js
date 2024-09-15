const square  = num => num * num;
const result = square(5);
console.log(result);

const mesg = () => 'Hello JS';
console.log(mesg());

const add = (a,b) => a+b; //If ou hjave only one parameter then it is not mandator to use (a)
console.log(add(4,5));


const getFullName = person => `${person.firstName} ${person.lastName}`
const person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}



console.log(getFullName(person))


const greet = (username='guest',age=0) => `Hello, ${username}! you are ${age} years pld`;
const g1 = greet();
console.log(g1);

const g2 = greet('Tom',30);
console.log(g2);

//rest parameters ...varargs
const sum = (...numbers) => numbers.reduce((acc,num)=>acc+num,0);
const total = sum(1,2,3,4,5);
console.log(total);

//
const browserInfo = (browser = 'chrome',...details) => {
    console.log(`browser: ${browser}`);
    console.log('enter details:',details);
};

browserInfo();
browserInfo('firefox','115.11','moxilla','headless');

//Max number suing Math
const indMaxNum = (a,b,c) => {
    return Math.max(a,b,c);
};

const maxVal = indMaxNum(10,20,30);
console.log(maxVal);