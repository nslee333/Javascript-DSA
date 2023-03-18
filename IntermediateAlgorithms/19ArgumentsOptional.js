function addTogether(arg1, arg2) {

    const [first, second] = arguments;
    
    if(typeof(first) !== "number") {
      return undefined;
    } else if (second === undefined) {
      return (second) => addTogether(first, second);
    } else if (typeof(second) !== "number") {
      return undefined;
    }
    
    
      return first + second;
     
    }
    
    
    
    
    console.log(addTogether(5)(7));




/*

The purpose of this function is to sum two arguments together, if the first or second argument aren't numbers, return undefined,

    If the second argument is not given, then return a function expects one argument and returns the sum.




*/