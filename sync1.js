const fs = require('fs'); //import one module someone we to store in a constant I want ot require fs module, fs module is to read data and write data

const data = fs.readFileSync("naveem.txt", "utf-8");
// there are two types of method readFile and readFileSync method
//utf-8 - because it would read buffere data as well
console.log(data);
console.log('Bye naveen');
