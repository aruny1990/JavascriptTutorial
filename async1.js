const fs = require('fs'); //import one module someone we to store in a constant I want ot require fs module, fs module is to read data and write data

const data = fs.readFile("naveem.txt", "utf-8", (error,data)=>{
    console.log(data);
});
// there are two types of method readFile is async and readFileSync method
//utf-8 - because it would read buffere data as well
console.log('Bye naveen');