function randomRange(myMin, myMax) {

    let randomNum = Math.random();
    console.log(randomNum);

    console.log(Math.floor(randomNum * (myMax - myMin + 1)) + myMin, "Correct Function");

    console.log(Math.floor(randomNum * (myMax - myMin + 1)), "My Function");

}

randomRange(1, 10);