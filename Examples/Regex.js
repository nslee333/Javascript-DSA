let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); 

"Hello, world!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);


let testStr2 = "Repeat, Repeat, Repeat";
let ourRegex2 = /Repeat/;
testStr.match(ourRegex);


let repeatRegex = /Repeat/g;
testStr.match.match(repeatRegex);


let soccerWord = "goooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

let firstString = "Ricky is the first and can be found";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

let theEnding = "This is a never ending story";
let storyRegex = /story&/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);


let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);


let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

let repeatStr = "row row row your boat";


let repeatRegex2 = /(\w+) \1 \1/;
repeatRegex2.test(repeatStr); 
repeatStr.match(repeatRegex); 


let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");


"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
