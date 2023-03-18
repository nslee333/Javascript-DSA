function palindrome(str) {

    let string = str.toLowerCase();
    let regex = /[a-zA-Z0-9]/;
    let arr = [];
    let newArr = [];
    
    arr = string.split("")
    .filter(element => 
      regex.test(element)
    );
    
    
    for(let i = 0; i < arr.length; i++) {
    
      if(regex.test(arr[i])) {
      newArr.unshift(arr[i]);
      }
    
    }
    
    let newString = newArr.join("");
    let string1 = arr.join("");
    

    if(string1 === newString) {
      return true;
    } else {
      return false;
    }
    
    
}
    
console.log(palindrome("EYE"));
console.log(palindrome("_eye"));
    
/*

This function checks if the word is a palindrome, it returns a boolean depending upon the result.





*/