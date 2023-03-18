function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
  
  console.log(urlSlug(" Winter Is Coming"))


/*

This function takes a string, removes all of the white space characters, and hyphenates the
  string just like in URLs.

  .trim() removes all white space characters at the beginning and the end of the string.

  .split() 
    the .split() method takes a pattern and divides a string into an order list of substrings
    by searching for that pattern, it puts the strings into an array then returns the array.
        - The pattern is what the 'break' between one string and another.
  .join() 
    - creates and returns a new string by concatenating all of the elements in an array.
        - you can pass in a separator like above, and it inserts it between array elements
            into the string.
*/