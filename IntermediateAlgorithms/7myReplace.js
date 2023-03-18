function myReplace(str, before, after) {
  
    let letter = before[0];
    let testUpper = letter.toUpperCase();
    let testLower = letter.toLowerCase();
    let string = "";
  
  
  
    if(before[0] === testUpper) {
      let afterUpper = after[0].toUpperCase() + after.slice(1);
      return string = str.replace(before, afterUpper);
  
    } else if(before[0] === testLower) {
      let afterLower = after[0].toLowerCase() + after.slice(1);
      return string = str.replace(before, afterLower);
    } else {
      return string = str.replace(before, after);
    }
  
     
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/*

This function performs a search and replace on a sentence using the arguments provided.

  1. If the first letter of the before is an uppercase letter.
    - the convert the first letter of the replacement to uppercase.
    - Then perform a str.replace with the updated arguments.
  2. If the first letter of the before is a lowercase letter,
    - Then convert the first letter of the replacement word to lowercase.
    - Then perform a str.replace with the updated arguments.
  3. Else:
    - Perform a str.replace with the arguments provided.

*/