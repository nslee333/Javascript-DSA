function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        const array1 = [];
        array1.push(endNum);
        return array1;
    } else {
      const array = rangeOfNumbers(startNum, endNum - 1);
      array.push(endNum);
      return array;
    }
  };

console.log(rangeOfNumbers(1, 5)); // Should equal [1, 2, 3, 4, 5],
console.log(rangeOfNumbers(6, 9)); // [6, 7, 8, 9,]
console.log(rangeOfNumbers(4, 4)); // [4]
console.log(rangeOfNumbers(1, 1)); // [5]

// This is a function that returns a range of numbers using recursion.

// The function takes in two arguments: min and max values for our range.

// If the two values are equal, add the endNum to the empty array, then return the array.
// This is our base case.

// Else, Assign array to a rangeOfNumbers function call - and subtract 1 from the end num. 

// Push the current value of endNum to the end of the array.
// The return the array.

// This will cycle using recursion to go to the base case, which will break end the function.

// Recursion involves alot of unfinished function calls until it gets to the base case, then like going up a waterfall, the all of the function calls are
// completed and it ends with returning the completed arrays.


