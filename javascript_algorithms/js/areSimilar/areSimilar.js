a = [1, 1, 3];
b = [1, 2, 2];


function areSimilar(a, b) {
  //Compare the arrays
  //Must convert to strings to compare as a==b will return false
  if (a.toString() == b.toString()) {
      return true;
  }
  //Create two arrays to store changed values
  var c = [];
  var d = [];
  //Iterate through arrays
  for (var i = 0; i < a.length; i++) {
      //If a value is not the same in a or b
      //Add the value of each to the array
      if (a[i] != b[i]) {
          c.push(a[i]);
          d.push(b[i]);
      }
  }
  //Reverse the array to compare later
  d = d.reverse();
  //c.length means 1 swap occured as two values didnt add up
  //compare the reversed d array to c array for the same values meanigng we can 
  if (c.length === 2 && (c.toString() == d.toString())) {
      return true;
  }
  return false;
}

console.log(areSimilar(a, b))