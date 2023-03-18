const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    const userOnline = 0;
     for(let user in usersObj) {
       if (user.online) {
         userOnline++;
       }
     } return userOnline;
    // Only change code above this line
  }
  
  console.log(countOnline(users));