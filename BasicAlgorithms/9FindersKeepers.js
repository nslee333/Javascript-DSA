function findElement(arr, func) {
    let num = 0;

    for(let i = 0; i < arr.length; i++) {

        if(func(arr[i])) {

        return num = arr[i];
        } else {

        num = undefined;

        }
    }

    return num;
    }

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));


    /* 

        This function takes in an array and a function, and returns the first element of the array that passes the function test.

        The only piece of code that changes the for loop from finding the largest last element and the first element that passes the function, is the
            return keyword, which tells the loop that once we find the an element that passes, we end the loop.

        If there is no element that passes the function test, then return undefined.




    */