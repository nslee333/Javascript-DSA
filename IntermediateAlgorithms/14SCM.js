function smallestCommons(arr) {

    let lowerNum = Math.min(...arr);
    let higherNum = Math.max(...arr);
      
      let range = getRange(lowerNum, higherNum);
      
      let multiple = 1;
      
      while (multiple < 1000000) {
        let higherCommonMultiple = (lowerNum * multiple) * higherNum;
       
        let trueCount = 0;
        for(let i = 0; i < range.length; i++) {
      
          if(higherCommonMultiple % range[i] === 0) {
            trueCount ++;
            if(trueCount === range.length ) {
              return higherCommonMultiple;
            }
          }
        }
        multiple += 1;
      }
    }
      
console.log(smallestCommons([2, 10]));


function getRange(lowN, highN) {
let resultRange = [];
for(let i = lowN; i <= highN; i++) {
    resultRange.push(i);
}
return resultRange;
}

/*

This function is used to find the smallest common multiple of the range of numbers between the two numbers.


- Since we don't know what orders the numbers will be in, we first spread the array and pass it into a Math.min/max functions.

Then we created a function getRange, that takes in two numbers, and returns a range of all the numbers between those numbers.

Then we assigned range to that function call.

  We created a loop to 1mil.

  Then we created higherCommonMultiple, which multiplies a counter, by the lowerNum and the higherNum,

  Then we loop through every element in our range.

  if higherCommonMultiple is evenly divisible by the current element, 
    Then increment the trueCount.
    If the trueCount value is the equal to the range.length, then return higherCommonMultiple.

  For every loop iteration, add to the multiple.
    - this helps us to check through all of the common possibilities for the higherCommonMultiple.

    



*/