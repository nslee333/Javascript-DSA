// Only change code below this line
function countdown(n){
    if(n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }



console.log(":)");
console.log(countdown(10)); // Should count down from 10 to 1. 
console.log(countdown(20)); // Should count down from 20 to 1.

// This function uses recursion to count down from a given number to 1.

// If n is less than 1, then then return our built array.
// This is our base case.


// Recursion case:
// Recursion call, it calls itself minus 1 for each recursion iteration.
// Add the current number to the end of the array.