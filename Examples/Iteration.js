const ourArray = [];

let i = 0;

while (i < 5) {
    ourArray.push(i);
    i++;
}

const ourArray2 = [];

for (let i = 0; i < 5; i++) {
    ourArray2.push(i);
}

const ourArray3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < ourArray3.length; i++) {
    console.log(ourArray3[i]);
};

const ourArray4 = [
    [1, 2][3, 4][4, 5]
];

for (let i = 0; i < ourArray4.length; i++) {
    for (let j = 0; j < ourArray4[i].length; j++) {
        console.log(ourArray4[i][j]);
    }
}

const ourArray5 = [];
let k = 5;

do {
    ourArray5.push(k);
    k++;
} while (k < 5);

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

function multiplyRe(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiplyRe(arr, n -1) * arr[n - 1];
    }
}

