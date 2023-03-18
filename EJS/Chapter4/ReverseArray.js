// Reverse the elements in the array.
    // The first returns a new array, unmodifying the original array.
    // The second intentionally modified the original array.

function reverseArray(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }

    array = newArray;

    return array;
}

console.log(reverseArray([1, 2, 3, 4]));

console.log(reverseArrayInPlace([1, 2, 3, 4]));