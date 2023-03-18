function pairElement(str) {
    let array = [];
      for (let i = 0; i < str.length; i++) {
     
        if(str[i] === "A") {
    
          let array2 = [];
          array2.push(str[i]);
          array2.push("T");
          array.push(array2);
    
        } else if (str[i] === "T") {
    
          let array2 = [];
          array2.push(str[i]);
          array2.push("A");
          array.push(array2);
    
        } else if (str[i] === "G") {
    
          let array2 = [];
          array2.push(str[i]);
          array2.push("C");
          array.push(array2);
    
        } else {
    
          let array2 = [];
          array2.push(str[i]);
          array2.push("G");
          array.push(array2);
          
        }
      }
    
    
    
      return array;
    }
    
    console.log(pairElement("GCG"));


/*

    This function returns an multi-dimensional array that matches the base pairs for the provided DNA string.

    1. If the current index = A
        push current index and "T" to an array, then push that array to the array to be returned.
    2. If the current index = T
        push current index and "A" to an array, then push that array to the array to be returned.
    3. If the current index = C
        push current index and "G" to an array, then push that array to the array to be returned.
    4. If the current index = G
        push current index and "C" to an array, then push that array to the array to be returned.

    The above function call returns:
        [['G', 'C'], ['C', 'G'], ['G','C']]
*/