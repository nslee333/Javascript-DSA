// Sum of a range.

function range(start, end, step) {
    let arr = [];
    console.log(step===undefined);

    if(step === undefined) {
        step = 1;
    } 
    
    if(start > end) {
        for(let i = start; i >= end; i += step) {
            arr.push(i);
        }
    } else {
        
    for(let i = start; i <= end; i += step) {
        arr.push(i);
    }  
    }

    return arr;

}

console.log(range(1, 10));

function sumRange(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

console.log(sumRange(range(1, 10)));

