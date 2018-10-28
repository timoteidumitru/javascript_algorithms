inputArray = [2, 7, 1, 3]

function arrayMaximalAdjacentDifference( inputArray ) {
  let maxDiff = Math.abs( inputArray[0] - inputArray[1] );

  for (let i = 1; i < inputArray.length; i++) {
      let absoluteDiff = Math.abs( inputArray[i - 1] - inputArray[i] );

      if ( absoluteDiff > maxDiff ) {
          maxDiff = absoluteDiff;
      }
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference(inputArray))