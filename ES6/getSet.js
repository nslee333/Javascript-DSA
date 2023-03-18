class Thermostat {

    constructor(startTemp) { // constructor that initializes the value of temp when the object 
        // is initialized.

        // This is set in Fahrenheit.
      this.temp = startTemp;
    }
  
    get temperature() { // This converts the temperature into Celsius, then returns that
        // Value to the caller.
      return (5/9) * (this.temp - 32);
    }
  
    set temperature(celsiusTemp) { // This takes in a celsius temperature and converts it into
        // Fahrenheit, then sets the number that has just be converted.
      this.temp = (celsiusTemp * 9.0) / 5 + 32;
    }
  
  
  }
  
  
  
  
  
  
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius