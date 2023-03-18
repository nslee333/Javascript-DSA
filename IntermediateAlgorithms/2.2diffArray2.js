function diffArray(arr1, arr2) {
  
    return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
   
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))


/*

This function compares two arrays and if there is an element that isn't in the other,
  We push that value to a new array and return it.

  This one is simpler than the other because we concatenate the two arrays, and
    call a .filter function, that will filter only the elements that pass the test.
        In this case, it will only enter the item that doesn't exist in array1, OR
        exist in array2.

    We then return that value.



*/