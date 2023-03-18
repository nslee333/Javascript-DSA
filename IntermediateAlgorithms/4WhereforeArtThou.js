function whatIsInAName(collection, source) {
    let arr = [];
  
    const sourceKeys = Object.keys(source);
  
  
    return collection.filter(obj => {
      for(let i = 0; i < sourceKeys.length; i++) {
        if(!obj.hasOwnProperty(sourceKeys[i]) || 
          obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
            return false;
          }
      }
      return true;
    });
  }
  
  console.log(whatIsInAName(
      [
          { first: "Romeo", last: "Montague" }, 
          { first: "Mercutio", last: null }, 
          { first: "Tybalt", last: "Capulet" }
      ], 
        { last: "Capulet" }
    )
  );


  console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" }, 
        { first: "Mercutio", last: null }, 
        { first: "Tybalt", last: "Capulet" }
    ], 
      { last: "Chuck" }
  ), "should return an empty array"
);






/*

This function takes in an array of objects, and a test object, and returns an array of objects that match the test object.

    If the object has no objects that match the test object, then it will return an empty array.

    



*/