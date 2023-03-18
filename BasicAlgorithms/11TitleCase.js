function titleCase(str) {
    let newString = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[0]){
          newString += str[i].toUpperCase();
          console.log("c 1")
  
        } else if (str[i] === " ") { // Could be an issue if tabs are inlcuded in the string.
          newString += " ";
          console.log("ca 2")
  
        } else if (str[i - 1] === " ") { // Would this be bulletproof if there was two spaces??
          newString += str[i].toUpperCase();
          console.log("cas 3", str[i].toUpperCase(), newString)
        } else {
          newString += str[i].toLowerCase();
          console.log("case 4")
        }
    }
    
    
    return newString;
  }
  
  console.log(titleCase("I'm a little tea pot"));

/* 
*/