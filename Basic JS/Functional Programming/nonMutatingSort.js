const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  let newArrayBlank = [];

  let newArray = newArrayBlank.concat(arr);

  newArray.sort(function(a , b) {
    return a === b ? 0: a < b ? -1 : 1; 
  })

  // Only change code above this line
  return newArray;
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));



/*

This function is a non-mutating sort function, it takes an array, concats it into another new array,
    sorts the new array and returns it.



*/