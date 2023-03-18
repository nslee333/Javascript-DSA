function truthCheck(collection, pre) {
    return collection.every(function (element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  
  truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");


  /*
  
  This is a different solution to the algorithm challenge that I solved on my own.
  
  
  
  */