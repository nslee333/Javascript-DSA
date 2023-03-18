function arrayToList(array) {
    let arr = array.reverse();

    let number = arr[0];

    

    function recursion(number) {
        if(number === 0) {
            let obj2 = {
                value: number,
                list: null,
            }
            return obj2;
            
        } else {
            let obj2 = {
                value: number,
                list: recursion(number - 1),
            }

            return obj2;
        }

    }


    let obj = recursion(number);
    console.log(number, 'he');



    return obj;

}

console.log(arrayToList([1, 2, 3]), "HI");