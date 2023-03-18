// Math.floor(Math.random() * 20);




function randomRange(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(10, 20));