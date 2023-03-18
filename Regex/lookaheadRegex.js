const string1 = "astronaut";
const string2 = "banan1"; 
const string3 = "bana12"; 
const string4 = "abc123";
const string5 = "12345";
const string6 = "8pass99";
const string7 = "1a2bcde";
const string8 = "astr1on11aut";



let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/g; // Change this line



let result1 = pwRegex.test(string1);
let result2 = pwRegex.test(string2);
let result3 = pwRegex.test(string3);
let result4 = pwRegex.test(string4);
let result5 = pwRegex.test(string5);
let result6 = pwRegex.test(string6);
let result7 = pwRegex.test(string7);
let result8 = pwRegex.test(string8);


console.log(result1, "string1, should equal false"); 
console.log(result2, "string2, should equal false" );
console.log(result3, "string3, should equal true" );
console.log(result4, "string4, should equal true" );
console.log(result5, "string5, should equal false" );
console.log(result6, "string6, should equal true" );
console.log(result7, "string7, should equal false" );
console.log(result8, "string8, should equal true" );