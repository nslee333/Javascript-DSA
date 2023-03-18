function getIndexToIns(arr, num) {

    // Sort the array from lowest to highest.
    arr.sort((a, b) => a - b);
    
    // loop through the array until you find the position that the number can be inserted into.
    let numValue = 0;
    for (let i = 0; i < arr.length; i++) {
    
        if (num <= arr[i]) {
        console.log("C1")
        return numValue = i;

      } else if ((i + 1) == arr.length) {

        console.log("C2");
        return numValue = i + 1;

      }
    
    }
    // Return that index position.
    
      console.log(numValue, "numValue")
      return numValue;
    }
    
    console.log(getIndexToIns([40, 60], 50), "test 1");
    
    console.log(getIndexToIns([100, 30], 300), "test 2");
    console.log(getIndexToIns([100, 30, 32, 300], 200), "test 3");
    console.log(getIndexToIns([100, 30, 1000], 2000), "test 4");
    console.log(getIndexToIns([40, 60], 1), "test 5");

/*

This program takes an array and a number, sorts the array from lowest to highest, 
    and then finds the correct position for the number to be inserted, 
        then it returns that index  position to the caller.

    
    A few notes:
        - In the first conditional branch, we include '<=' specifically because if the array already has an element that equals the number passed in, 
             our program wouldn't return an index position.
            - the equals helps us include that specific case.
        - In the second conditional branch, the program check if we are at the end of the array, and if its true, we return the index position + 1 because our number 
            is larger than all the elements in the array, so we return the index position of i + 1.






*/