// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];

  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });


  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);



/*

This function works just like Array.prototype.filter();

It takes in a callback function, for each element in an array that .filter is called upon, it checks if callback(x) [this is the element that is being filtered for]
    is equal to true, if so, it pushes the element to a new array which is returned to the caller.


*/