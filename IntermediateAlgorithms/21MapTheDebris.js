function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArray = [];
  
  
  
    for (let i = 0; i < arr.length; i++) {
      let result = Math.round((2 * Math.PI) * (Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM)));
      let obj = arr[i];
      delete obj.avgAlt;
      obj.orbitalPeriod = result;
  
      newArray.push(obj);
  
    }
    return newArray;
    
  }
  
  console.log(orbitalPeriod
  (
    [
      {name : "sputnik", avgAlt : 35873.5553}
    ]
  ));
  
  console.log(orbitalPeriod(
    [
      {name: "iss", avgAlt: 413.6}, 
      {name: "hubble", avgAlt: 556.7}, 
      {name: "moon", avgAlt: 378632.553}
    ]
  ));




  /*
  
  Okay I know this formula is hard to read, but it works, consider refactoring  this code
  
  
  
  */