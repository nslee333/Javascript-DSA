const squareList = arr => {

    arr = arr
    .filter(num => num > 0)
    .filter(num => num % 1 === 0)
    .map(x => x * x);
    
      return arr;
    };
    
    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);
    
    console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))



/*

The function is used to square the integers in the given array, then return a new array containing the squared values.

The function:
    - filters the array for numbers that are bigger than zero.
        - We do this because negative numbers cannot be squared.
    - Filters the array for floating point numbers (decimal point numbers), 
        - We do this because a float is not an integer.
        - We check if it's a float by doing a modulo operation, which returns the remainder 
            of two numbers, (num(arrayNumber) % 1), and if the value is strictly equal to zero, then 
            it is an integer.
            - A floating point number will return a decimal remainder, and it won't equal zero.
        - We then map the array, multiplying the number by itself, then we return the array.

*/