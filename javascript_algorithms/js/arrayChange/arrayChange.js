inputArray = [2, 6, 1]

function arrayChange(inputArray) {
  let count = 0;
  
  for ( let i = 0; i < inputArray.length - 1; i++ ) {
      if ( inputArray[i] >= inputArray[i + 1] ) {
          const difference = ( inputArray[i] + 1 ) - inputArray[i + 1];
          inputArray[i + 1] = inputArray[i] + 1;
          count += difference;
      }
  }

  return count;
}

console.log(arrayChange(inputArray))