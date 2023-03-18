function translatePigLatin(str) {
    let pigLatin = "";
    let regex = /[aeiou]/gi;
    
      if(str[0].match(regex)) {
        pigLatin = str + "way";
      } else if (str.match(regex) === null) {
        pigLatin = str + "ay"
      } else {
        var vowelIndice = str.indexOf(str.match(regex)[0]);
    
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay"
      }
    
      return pigLatin;
      
    }
    
    console.log(translatePigLatin("consonant"));
    console.log(translatePigLatin("paragraphs"));
    console.log(translatePigLatin("algorithm"));

    
/*

This function converts any word into the pig latin translation.

    1. If the first letter of the word is a vowel, add way to the string and return it.
    2. If the string doesn't have any consonants at all, add "ay" to the end of the string and return it.
    3. Grab the index of the first vowel in the string,
        - Then put the substring following the first vowel at the beginning.
        - Add the substring 0 to the vowel index, 
        - Then add "ay" at the end.

*/