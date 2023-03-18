function uniteUnique(...arr) {

    const args = [...arguments];
    let resultArray = [];
    
      for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
          if(!resultArray.includes(args[i][j])) {
            resultArray.push(args[i][j])
          }
        }
      }
      return resultArray;
    }
    
    
    
    
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*

    The purpose of this function is to take multiple arrays, and sort them into a single array with no duplicates.

    const args = [...arguments];
        This is creating a nested array of all the argument arrays.

        The conditional in other words is saying:
            If our result Array DOES NOT contain the current element, push the current element.


*/