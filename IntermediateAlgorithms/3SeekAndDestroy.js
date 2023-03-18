function destroyer(arr) {

    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
   
  
  for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  
  
  
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



/*

This function takes an array and any number of arguments, and returns a modified array with 
  all of the argument values removed.

  Note:
  - Something pretty interesting is the arguments object.
    Since we don't know how many arguments we will get with each function call,
    we take the arguments object and assign it to an array.
    Since argument[0] will equal our argument array, we slice off the first argument
        to get the values that we need.
    
  - We then loop through each element of the array, we then loop that index[i] value 
    through our valsToRemove array, and if the [i] value is in the valsToRemove array, we
    set the removeElement value to true.
        
  - For every loop of the parent array, it checks if the removeElement is false, 
    In other words, if the element isn't to be removed, we push it to a new array.


*/