function testElseIf(value) {
    if(value > 10) {
        return "Greater than 10";
    }

    else if (value < 5) {
        return "Smaller than 5";
    }

    else {
        return "between 5 and 10";
    }

}

testElseIf(7);

switch(lowercaseLetter) {
    case "a":
        console.log('A');
        break;
    case "b":
        console.log("B");
        break;
    default:
        defaultStatement;
        break;
}

let result = "";
switch(value) {
    case 1:
    case 2:
    case 3:
    result = '1, 2, or 3.'
    break;
    case 4:
        result = "4 Alone";
}


function isEqual(a, b) {
    return a === b;
}


function isEqualIf(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

function findGreater(a, b) {
    return a < b ? "A is greater": "B is greater or equal";
}

function findGreaterOrEqual(a, b) {
    return (a === b) ? "A and B are equal"
    : (a > b) ? "A is greater"
    : "B is greater";
}