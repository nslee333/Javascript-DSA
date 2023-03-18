function rot13(str) {

    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
    
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
        let result = arr[value + 13];
        string += result;
      }
    
    }
    
      return string;
    }
    
    
    console.log(rot13("SERR PBQR PNZC"));
    console.log(rot13("SERR CVMMN!"));
    console.log(rot13("SERR YBIR?"));
    console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));





    /*
    
    This function is a Caesar Cipher Decoder.

    Also known as a Shift Cipher, the strings are encoded using ROT13, which means that the letters have been encoded by shifting the values 13 places over.

    One of the hurdles here is that if the letter to be converted is at the end of the alphabet array, then how do we shift 13 places forward?
        - I solved this problem by including the first half of the alphabet at the end of the alphabet array.
            - 1/2 because 13 positions from Z ( N ) is the farthest position that that it can possibly go to with ROT13.

        I think that they're a more elegant solution to this problem so I'm going to see if I can find it.


    
    
    
    */