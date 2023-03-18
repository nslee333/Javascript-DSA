function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  
    let newArray = [];
  
    for (let i = beginSlice; i < endSlice; i++) {
      newArray.push(inputAnim[i]);
    }
  
    return newArray;
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));




/*


This function slices an array, and returns a new array containing the sliced array contents.

This function will not modify the original array.



*/
