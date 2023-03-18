function truthCheck(collection, pre) {

    let trueCount = 0;
    let result;
  
    for(let i = 0; i < collection.length; i++) {
      console.log(!!collection[i][pre] === true, "hello"  )
      if(!!collection[i][pre]) {
        trueCount++;
      } 
    }
  
  
    if(trueCount === collection.length) {
      return result = true;
    } else {
      return result = false
    }
  
  return result;
  
};
  
console.log(truthCheck(
[
    {name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false}, 
    {name: "Camperbot", role: "Bot", isBot: true}
], 

"name"));



/*

This function's purpose is to return a boolean value, if all of the [pre] properties inside of the collection are truthy values.

This is code I wrote on my own.


*/