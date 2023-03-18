function sumPrimes(num) {

    function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) 
          return false;
    }
          return true;
        }
          
    
    
    
    
    let result = 0;
    
    for(let i = 2; i <= num; i++) {
      if(isPrime(i)) {
        result += i;
      }
    }
      return result;
    }
    
    console.log(sumPrimes(10));


    
/*

This function takes a number, and returns the sum of all the prime numbers up to that number.



*/