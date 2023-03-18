function repeatStringNumTimes(str, num) {
    let string = "";
    
      if(num < 0) {
    
        return string = "";
    
      } else {
    
        for (let i = 0; i < num; i++) {
            string += str;
            console.log(string);
          }
        str = string;
    
      }
      
      
      console.log(str,"1");
      return str;
    }
    
    repeatStringNumTimes("abc", 3);

/*

    This algorithm takes in a string and a number,
        - if num is is smaller than a zero, it returns an empty string.
        - otherwise it creates a new string that contains the argument string repeated num times, and returns the new string to the 
            caller.

*/