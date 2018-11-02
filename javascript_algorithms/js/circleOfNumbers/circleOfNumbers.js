n = 200;
startNumber = 0;

function circleOfNumber(n, startNumber) {
  // make a variable to store some value in later on
  const numArray = [];
  // variable to store half way point
  const middleNumber = n / 2;
  // add the circle of numbers to the array
  for(let i = 0; i < n; i++){
    numArray.push(i);
  }

  if(startNumber < middleNumber){
    return numArray[startNumber + middleNumber]
  }

  return numArray[startNumber - middleNumber]
}

console.log(circleOfNumber(n, startNumber))