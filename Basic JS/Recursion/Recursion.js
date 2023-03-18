function sum(arr, n) {

    if(n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1]
    }
  
  }

console.log(sum([1], 0)); // Should equal 0.
console.log(sum([2, 3, 4], 1)); // Should equal 2.
console.log(sum([2, 3, 4, 5], 3)); // Should equal 9

// This function uses recursion to add the first 'n' elements of the array passed in.