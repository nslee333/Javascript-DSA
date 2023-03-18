function largestOfFour(arr) {
    let largeArr = [];
  
    for(let i = 0; i < arr.length; i++) {
  
      let largestNumber = arr[i][0];

      for(let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      largeArr.push(largestNumber);
    }
      return largeArr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]), "second test");

  /* 
  

  The goal of this algorithm is to find the largest number in each sub-array, then add all of those numbers into an array to be returned. 
  
  An interesting note about the largestNumber - 
    - If you initialize the largestNumber to 0, then if you get an array with all negative numbers it will return a zero everytime.
            - Obviously this is not how the algorithm is supposed to operate.

    - In this, we initialize largestNumber to the first element in the sub-array, which then would check the elements against themselves instead of zero.

  */