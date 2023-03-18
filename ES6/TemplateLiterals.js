const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
  
  for (let i = 0; i < result.failure.length; i++) {
    
  failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
  
  }
  
  
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  
  console.log(failuresList); 

/* This code looks through each element in the result.failure array.

    Then it uses a template literal to push a list elements for each element in the failure array, then it 
    uses the ${} syntax and enters the element in the text section of the list elements.

  The failuresList array should log the below result.

    [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
    ]


 */

 





