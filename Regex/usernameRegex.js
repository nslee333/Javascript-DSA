
/* 

This is a small project to use regular expressions with javascript.

    When a user is creating a username, he has to pass the following requirements 
        for his username to be accepted.

        1. The Usernames can only use alpha-numeric characters.
        
        2. The only numbers in the username have to be at the end.
            2.1 There can be zero or more numbers at the end of the username.
            2.2 Username cannot start with a number.
        
        3. Username letters can be lowercase and/or uppercase.
        
        4. Usernames have to be at least two characters long.
            4.1 A two character username can only use alphabet letters as characters.

    We have a bunch of strings to test to make sure our regex match works properly.

    All of these strings are test cases for the above requirements. 
    
    We assign multiple result variables to each test case.

    We then log the results (boolean value) and also log the result number and what it should equal.

    To run this file all you have to do is point your terminal to the root directory 'Regex' and enter the command 'node usernameRegex.js'


*/

const string1 = "JACK";
const string2 = "J"; 
const string3 = "Jo"; 
const string4 = "Oceans11";
const string5 = "RegexGuru";
const string6 = "007";
const string7 = "9";
const string8 = "A1";
const string9 = "BadUs3rnam3";
const string10 = "Z97";
const string11 = "c57bT3";
const string12 = "AB1";
const string13 = "J%4";


let username = "JackOfAllTrades";

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

/* 

I'm going to break down this regex






*/

let result0 = userCheck.test(username);
let result1 = userCheck.test(string1);
let result2 = userCheck.test(string2);
let result3 = userCheck.test(string3);
let result4 = userCheck.test(string4);
let result5 = userCheck.test(string5);
let result6 = userCheck.test(string6);
let result7 = userCheck.test(string7);
let result8 = userCheck.test(string8);
let result9 = userCheck.test(string9);
let result10 = userCheck.test(string10);
let result11 = userCheck.test(string11);
let result12 = userCheck.test(string12);
let result13 = userCheck.test(string13);





console.log(result0, "username, should equal true"); 
console.log(result1, "string1, should equal true" );
console.log(result2, "string2, should equal false" );
console.log(result3, "string3, should equal true" );
console.log(result4, "string4, should equal true" );
console.log(result5, "string5, should equal true" );
console.log(result6, "string6, should equal false" );
console.log(result7, "string7, should equal false" );
console.log(result8, "string8, should equal false" );
console.log(result9, "string9, should equal false" );
console.log(result10, "string10, should equal true" );
console.log(result11, "string11, should equal false" );
console.log(result12, "string12, should equal true" );
console.log(result13, "string13, should equal false" );




