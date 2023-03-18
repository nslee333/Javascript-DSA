function frankenSplice(arr1, arr2, n) {
    let counter = n;
    let newArray1 = [];
    let newArray2 = [];
  
  
    for (let i = 0; i < arr1.length; i++) {
      newArray1.unshift(arr1[i]);
    }
  
    for (let k = 0; k < arr2.length; k++) {
      newArray2.push(arr2[k]);
    }
  
  
    for (let j = 0; j < newArray1.length; j++) {
      newArray2.splice(counter, 0, newArray1[j]);
    }
  
  
    return newArray2;
  
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
/*
    This takes two arrays, and without affecting the original arrays, it splices the first array into the second array and returns it.

    In order to not effect the original arrays, I created two new arrays, and looped through the original arrays and pushed/unshifted their elements into the new arrays.

        
    and in order to splice the given array into the target array I had to 
        loop through with the unshift method to make sure that the elements of the given array (array1) are in the correct order (i.e. 1,2,3,)
            (if I arr.push() it would've returned (3,2,1,))

*/