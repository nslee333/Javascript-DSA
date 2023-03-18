function spinalCase(str) {

    let spacesRegex = /\s+|_+/g;
  
    let camelRegex = /([a-z])([A-Z])/g
  
    str = str.replace(camelRegex, "$1 $2");
  
    let spinalString = str.replace(spacesRegex, "-");
  
    return spinalString.toLowerCase();
  
  
  }
  
  spinalCase("This Is Spinal Tap") 
  console.log(spinalCase("thisIsSpinalTap")) 
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("Teletubbies say Eh-oh")
  spinalCase("AllThe-small Things") 



  /*
  
  This function takes in a string, and returns a spinal string which looks like this. 'all-lowercase-string'.

  
  
  
  
  */