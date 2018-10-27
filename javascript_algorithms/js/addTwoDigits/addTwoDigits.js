function addTwoDigits(n) {
  //Conver number to a string, break into a single character array, add values together
  return n.toString().split("").reduce((a,b)=> {
         return parseInt(a) + parseInt(b); 
      });
  }