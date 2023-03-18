const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++) {
      if(name == contacts.firstName) {
        for(let j = 0; j < contacts[i].length; j++) {
          if(prop === contacts[i][j]) {
            const value = contacts[i][j];
            return value;
          } else {
            return "No such property";
          }
        }
  
      } else {
        return "No such contact";
      }
    }
  }

  lookUpProfile("Kristian", "lastName")




  console.log(lookUpProfile("Akira", "likes"));
