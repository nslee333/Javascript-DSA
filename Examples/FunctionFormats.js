
// Traditional function declaration.

function traditionalFunction() {
    console.log("Hello World!");
}

traditionalFunction();

// Arrow function V1.

// Something to note is that this is an anonymous function. 

// We are assigning a variable to the value returned by the anonymous function.

const arrowFunction = function() {
    console.log("Hello World!");
}

// Arrow function V2. JS allows us to take out the function keyword and enter an arrow sign to signify that it is a function.

const arrowFunctionV2 = () => {
    console.log("Hello World!");
}
/*
    When there is no function body, and only a return value, arrow function syntax allows us

    to omit the return keyword as well as the curly braces surrounding the code.

    This helps us to simplify smaller functions into one-line statements.

*/ 

const arrowFunctionV3 = () => "value";

// This will return the string 'value' by default.

const arrowFunctionV4 = () => "hello";