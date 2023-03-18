function confirmEnding(str, target) {
  
    return str.slice(str.length - target.length) === target;
 
 }
 
 confirmEnding("Bastian", "n");

 // Checks a string to see if it ends with the target passed in.