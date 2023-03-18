function truncateString(str, num) {
    if(str.length > num) {
  
      let string = "";
  
      for(let i = 0; i < num; i++) {
        string += str[i];
        console.log(string);
      }
      
      string += "...";
      str = string
    
    } else {
    return str;
    }

    return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8), "1");

/*

This algorithm truncates a string.

It takes in a string (str) and a max string length (num).

if the string.length is larger than the max string length, it is truncated.

At the end of the for loop, it adds a "..." to the end of the string.

Otherwise it returns the string unmodified.

*/