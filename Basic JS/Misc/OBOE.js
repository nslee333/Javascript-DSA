let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i], "1");
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j], "2");
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k], "3");
}

/*

    9. Off by one errors
        - Sometimes called OBOE crop up when you're trying to target a specific index of a string or array, or when looping over indices of them.
            - JS indexing starts at zero, not one.
                - Which means that the last index is always one less than the length of the item.
                - If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.
                - When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive ( the item at the given index is part of what's returned) or not. 
        - Take a look at the above code for example:
            
            - The first for loop will loop too many times, producing an 'undefined' at the end of the alphabet.
            - The second one will loop too little times, since JS indexing starts at 0. 
            - The third is correct.

*/