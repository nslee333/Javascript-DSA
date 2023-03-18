function randomRange(myMin, myMax) {

  return Math.floor(randomNum * (myMax - myMin + 1)) + myMin ;

};

console.log(randomRange(1, 10), "Correct Function");