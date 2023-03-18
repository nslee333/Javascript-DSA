function factorialize(num) {
    let product = 1;
    for(let i = 1; i <= num; i++) {
      product *= i; 
      console.log(product);
    }
    
    return product;
  }
  
  console.log(factorialize(5), "should return 120");