function alphabeticalOrder(arr) {
    // Only change code below this line
    
    return arr.sort(function(a,b) {
      return a === b ? 0: a < b ? -1 : 1;
    })
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


/*

This function takes an array of characters, and returns a sorted array in alphabetical order.

  if a === b, then do nothing,
  else:
    - is A larger than B ? 
        if true, then -1, (A comes before B.)
        else return 1. (B comes before A.)
  In arr.sort with JavaScript, 
    - === 0 means that they are the same value, and shouldn't move.
    - A < B means that A is smaller than B, and should go before B.
    - A > B < means that B is smaller than A, and should go before A.

*/