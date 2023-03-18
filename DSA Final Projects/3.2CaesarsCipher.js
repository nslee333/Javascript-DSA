function rot13(str) {

    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let string = "";

    let regex1 = /\s/;
    let regex2 = /\?/;
    let regex3 = /!/;
    let regex4 = /\./;
    
    for(let i = 0; i < str.length; i++) {
      let value = arr.indexOf(str[i]);
      
      if(regex1.test(str[i])) {
        let result = " ";
        string += result;
    
      } else if (regex2.test(str[i])) {
        let result = "?";
        string += result;
    
      } else if (regex3.test(str[i])) {
        let result = "!";
        string += result;
    
      } else if (regex4.test(str[i])) {
        let result = ".";
        string += result;
    
      } else {

            if(value > 12) {

                let temp = value - 13;
                let result = arr[temp];
                
                string += result;

            } else {
                
                let result = arr[value + 13];
                string += result;

            }
        }
    }

    return string;
}

console.log(rot13("SERR PBQR PNZC!?."));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));





    /*

    Alright this is my second version of the Caesar Cipher.

    This second version differs on how it finds the decoded value of a character, if the index is larger than 12.
        ( if we just added 13 to an index with the value of 13( or above ), it would give us undefined, because 13 + 13(+) would equal 26 (+), which is larger than the array length.)

        I just defined a traditional alphabet, A-Z 
            To find a decoded value of a character with an index larger than 12, I would subtract 13 from the index, to get the decoded value position.

        Also, at line 33, value has to be greater than 12, (13 and above) and not greater than or equal to 12, because if we did, Z would be undefined, since
            12 - 13 would equal index position of -1, which is undefined.
    */