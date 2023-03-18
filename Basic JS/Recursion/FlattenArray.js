function steamrollArray(arr) {

    let flatArray = [];
  
    function recurse(arr) {
      for(let i = 0; i < arr.length; i++) {
        let element = arr[i];
  
        if(Array.isArray(element)) {
          recurse(element);
        } else {
          flatArray.push(element);
        }
      }
    }
  
    recurse(arr);
      
  
  console.log(flatArray);
  return flatArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]))


  /*
  
  This function uses recursion to flatten arrays.
  
  */