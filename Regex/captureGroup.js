const string1 = "42 42 42";
const string2 = "100 100 100"; 
const string3 = "42 42 42 42"; 
const string4 = "42 42";
const string5 = "101 102 103";
const string6 = "1 2 3";
const string7 = "10 10 10";





let reRegex = /^(\d+)\s\1\s\1$/; // Change this line


let result1 = string1.match(reRegex);
let result2 = string2.match(reRegex);
let result3 = string3.match(reRegex);
let result4 = string4.match(reRegex);
let result5 = string5.match(reRegex);
let result6 = string6.match(reRegex);
let result7 = string7.match(reRegex);


console.log(result1, "(string1, should equal a match)");
console.log(result2, "(string2, should equal a match)");
console.log(result3, "(string3, should equal null)");
console.log(result4, "(string4, should equal null)");
console.log(result5, "(string5, should equal null)");
console.log(result6, "(string6, should equal null)");
console.log(result7, "(string7, should equal a match)");