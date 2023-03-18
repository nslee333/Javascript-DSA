// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {

  let newBookList = [];

  bookList.forEach(element => newBookList.push(element));

  newBookList.push(bookName);

  return newBookList;
  
}

function remove(bookList, bookName) {
  
  let newBookList = [];

  bookList.forEach(element => newBookList.push(element));

  
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);


    return newBookList;

    }
}

console.log(add(bookList, "The Martian"));
console.log(remove(bookList, "The Hound of the Baskervilles"))

/*

    This program was used to refractor global variables out of the both the remove and the add functions. 

    bookList.forEach(element => newBookList.push(element)); 
        - This is used to take the contents of the original array and push it to a new array for our use.
        - This keeps our function from modifying the global array bookList.


*/

  