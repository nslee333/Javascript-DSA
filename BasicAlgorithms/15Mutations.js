function mutation(arr) {

    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
  
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
     
  }
  
  console.log(mutation(["hello", "HEY"]));
  

  
/*

  This program takes in an array of two strings, and it checks if the first element's characters are in the second string. 

  If all of the characters from the first string are in the second string, then it returns true, otherwise false.


  Note:
    - We first convert both strings into lower case.

    - Then we loop through the the test characters and if any of them aren't in the target array, the we return false.

    - If we get to the end of the array, and the first condition hasn't been triggered, then we return true.

*/