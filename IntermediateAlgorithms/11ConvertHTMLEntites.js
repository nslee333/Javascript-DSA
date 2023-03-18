function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    
  
    return str
      .split("") // seperate it to an array of characters.
      .map(entity => htmlEntities[entity] || entity)
      .join(""); // join the array together.
  }
  
  convertHTML("Dolce & Gabbana");

/*

This function takes in a string, if it sees a special character, it will convert it to the html entity.



*/