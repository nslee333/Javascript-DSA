function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            const nestedArr = [];
            if(arr[i][j] !== elem) {
                nestedArr.push(arr[i][j]);
          }
          newArr.push(nestedArr);
        }
    
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9] ], 3));

  /* 

  This is my second version of a array filter function, I made this while working on FCCs JS BasicDS course, and it's pretty interesting, so I'm keeping it around to play with.

  Takes in a nested array and an element to filter out.

  If the current element is not equal to the element that we're removing, then push it to a nested array, then when done, push that nested array to the new (root?) array.

  



  */