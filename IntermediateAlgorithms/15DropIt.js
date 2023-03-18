function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if(func(arr[i])) {return arr.slice(i)}
    }
    
      return [];
    }
    
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));




/*

The purpose of this function is to slice off all the elements before the element that func returns true for.

Here we iterate over the array and when the func(arr[i]) returns true, then we slice the array starting from that element.





*/
