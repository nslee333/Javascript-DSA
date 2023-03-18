function booWho(bool) {
    if (bool === true||bool === false) {
      return true;
    } else {
      return false;
    }
    
  }
  
  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho(1));
  console.log(booWho("true"));

  // Checks if the argument is a boolean value.
