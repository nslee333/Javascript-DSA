function sumAll(arr) {

    let max = Math.max(arr[0], arr[1]);
    console.log(max);
    let min = Math.min(arr[0], arr[1]);
    console.log(min);
  
    let value = 0;
    
    for (let i = min; i <= max; i++) {
      value += i;
    } 
    
    return value;
  }
  
  console.log(sumAll([1, 4]));


/*

  This function takes an array, sorts it numerically, then sums each of the numbers between
    A + B.
    
    e.g. [1, 4] will equal 10 because 1+2+3+4 === 10.

  We then loop through the array, using min and max for our counter and test statements, 
    we then add our value + our current counter value.

*/