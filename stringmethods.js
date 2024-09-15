console.log("Javascript".length);
let str = "Naveen";
console.log(str.length);

console.log("Javascript"[2]);
console.log("Javascript".charAt(2));

console.log("Javascript".charCodeAt(2));
//a-z: 97 to 122

console.log("Javascript".toLowerCase());
console.log("Javascript".toUpperCase());

console.log("Javascript".slice(2,-5))
//Javscript
//012345678
//        -1
//c=-5 and 5
//t=9 and -1
console.log("Javascript".substring(2,6));//vasc
console.log("Javascript".substring(-2,2));//v-ve -->0,2-->Ja

console.log("Naveen".concat(" Automation").concat(" Labs"));

let lang = "Java_Javascript_Python";
let arr =lang.split("_");
console.log(arr[0]);
console.log(arr[1]);

 console.log("Javascript".includes("Java"));

 console.log("Javascript".includes("Hello"));

 console.log("Dev Test Framework Dev".replace("Dev","JS"));

 console.log("Dev Test Framework Dev".replaceAll("Dev","JS"));

 console.log("01-01-1990".replaceAll("-","/"));

 console.log("  hello js  ".trim());
 console.log("  hello js  ".trimStart());
 console.log("  hello js  ".trimEnd());

 console.log("Developer".padEnd(10,"*"));
 console.log("Dev".padStart(10,"*"));
 console.log("Javascript".startsWith("J"));
 console.log("Java script".endsWith("script"));

 console.log("dev".repeat(3));

 console.log("Naveen Automation Labs".indexOf("Automation"));
 console.log("Naveen Automation Labs".indexOf("N"));
 console.log("Naveen Automation Labs".indexOf("JS"));

 console.log("Naveen Automation Labs Naveen".lastIndexOf("Naveen"));

 console.log("Naveen Automation Labs".search("Automation"));


