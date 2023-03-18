function bouncer(arr) {

    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
      
      if(!!(arr[i]) === false) {
        console.log(false);
      } else {
        newArray.push(arr[i]);
      }
    }
    
    console.log(newArray);
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);

/*

  This program takes an array, removes all the falsy values, and then returns the modified array.

  Interesting note: 
    - The conditional to check if the value is falsy is pretty interesting - you can convert the element into a boolean value with one of two methods.
        - Method 1: 'Boolean(arr[i])' 
        - Method 2: '!!(arr[i])'.
    - What makes the second method interesting is that one '!' is used to as the logical NOT operator, when using two in succession, the first
        '!' coerces the value to a boolean and inverts it, and the second '!' reverses the previous inverted value, resulting in a true boolean value.
    
*/