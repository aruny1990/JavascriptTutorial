function add(a,b){
    return a+b;
}

const sum= add(5,6);
console.log(sum);

function print(){
    console.log("hi this is JS");
}

print();

//2. Function Expression: Anonymous Function
const multiply = function(x,y){
    return x*y;
}

const mul = multiply(5,6);
console.log(mul);

//3. Arrow function
const divide = (t1,t2)=>t1/t2;
const div = divide(20,2);
console.log(div);


//4. Function constructors
const substract = new Function('a','b','return a-b;');
const subs = substract(10,2);
console.log(subs);

//5. IIFE (Immidiately Invoked  Function Expression)
(function(){
    console.log("server is up and running on port 3000")
})();

//6. Generator Function
//functions and yield
function* generatedNumberSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generatedNumberSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Anonymous Function
//no specific name
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(function(e){
    return e*e;
});

console.log(squareNumbers);

//8. Recursive Function
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(4));

//9. High Order Functions
function addition(a,b){
    return a+b;
}

function mulitplication(a,b){
    return a*b;
}

function operate(funcName,a,b){
    return funcName(a,b);
}

const s = operate(addition,2,3);
console.log(s);

const s1 = operate(mulitplication,2,3);
console.log(s1);