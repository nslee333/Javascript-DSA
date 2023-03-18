const Person = function(firstAndLast) {

    let array = [];
  
    array = firstAndLast.split(" ")
    console.log(array);
  
    this.getFirstName = function(){
      return array[0]
    };
  
    this.getLastName = function(){
      return array[1];
    };
  
    this.getFullName = function() {
      return array.join(" ");
    };
  
    this.setFirstName = function(first){
      array[0] = first; 
    };
  
    this.setLastName = function(last){
      array[1] = last;
    };
  
    this.setFullName = function(firstAndLast){
      array = firstAndLast.split(" ");
    };
  
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  
  console.log(bob.getFullName());

  

/*

This is a constructor function that creates a new Person object with the methodology defined.



*/