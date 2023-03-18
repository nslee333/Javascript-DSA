function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      for(let i = 0; i < first.length; i++) {
        if(second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
  
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))


/*

This function compares two arrays and if there is an element that isn't in the other,
  We push that value to a new array and return it.

  Note:
    - We run the function twice (flipping the values) because the indexOf function 
        only checks if the arr1 value is in arr2, and we push that value if it doesn't exist in the arr2.

    If we didn't run it twice with the values flipped, we aren't checking if there's values in
        arr2 that arr1 doesn't have.

*/