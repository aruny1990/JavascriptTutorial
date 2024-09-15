//Reverse a number
//12345 -> 54321
//123 -> 321
//123 --> 3
//12 -> 2
//1

//123/10 --> 12.3 -> 12
//12/10 -> 1.2 -> 1

function reverseANumber(num){
    //1
    //2
    //0-9 --> same number
    if(num>=0 && num<=9){
        return num;
    }

    let reverseNum = 0;
    while(num!=0){
        reverseNum = reverseNum*10 + (num%10);
        num = Math.floor(num/10);
    }
    return reverseNum;
}

console.log(reverseANumber(1));
console.log(reverseANumber(9));
console.log(reverseANumber(123));
console.log(reverseANumber(123459899999));