function telephoneCheck(str) {

    const validPatterns = [
      /^\d{3}-\d{3}-\d{4}$/,
  
      /^1 \d{3}-\d{3}-\d{4}$/,
  
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      /^\d{10}$/,
  
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      /^1 \d{3} \d{3} \d{4}$/,
  
      /^1\(\d{3}\)\d{3}-\d{4}$/
  
    ];
  
  
  
  return validPatterns.some((pattern) => pattern.test(str));
  
  
  
  
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("5555555555"));
  console.log(telephoneCheck("1 (757) 622-7382"));


  /*
  
  This function returns a boolean depending upon if the phone number is a US valid phone number.
  
  
  */