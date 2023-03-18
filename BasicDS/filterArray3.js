function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            let nestedArray = [];
            if(arr[i][j] == elem) {
                nestedArray = [];
          } else {
            nestedArray.push(arr[i][j]);
          }
          newArr.push(nestedArray);
        }
    
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9] ], 3));

  /*

  See the other filterArray.js - filterArray2.js

  Came up with this junk working on FCC JS DSA #5.11. 



  */