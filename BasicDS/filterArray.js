function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i], "here");
      for(let j = 0; j < arr[i].length; i++) {
        console.log(arr[i]);
        console.log(arr[i].length);
        if(arr[i][j] != elem) {
          newArr.push(arr[i][j]);
        }
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// This filter doesn't work as of 7/2/2022, it keeps throwing a type error for the second for loop conditional, saying 'TypeError: Cannot read properties of undefined (reading length)"
// Even though it logs out the value of arr[1]. *eye roll* maybe I'll come back to this. 

