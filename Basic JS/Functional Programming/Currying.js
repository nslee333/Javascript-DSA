function add(x) {
    // Only change code below this line
    return function addY(y) {
      return function addZ(z) {
        return x + y + z
      }
    }
  
    // Only change code above this line
  }
  
  console.log(add(10)(20)(30));

  /*
  
  the 'arity' of a function is the number of arguments that it requires.

  Currying a function means to convert a function of N arity into N functions of arity 1.

  In other words, Currying a function restructures a function so it takes one argument,
    then returns another function that takes the next argument and so on.

    In the above example, we took a function add(x, y, z); and then restructured it into the
    function above.

  
  */