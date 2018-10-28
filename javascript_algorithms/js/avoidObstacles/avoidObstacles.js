inputArray = [5, 8, 6, 15, 17, 7, 9, 11, 14, 21]

function avoidObstacles(inputArray) {
  //Sort array numerically to get the largets value
  inputArray = inputArray.sort((a, b) => a - b);
  console.log(inputArray)
  //Stores largest value in sorted array
  const largestArrayVal = inputArray[inputArray.length - 1];
  //Iterates from 1 to the largest number + 1
  //+1 incease on values work between the entire set
  for (let i = 1; i <= largestArrayVal + 1; i++) {
      //If all the numbers % iterater dont return 0 it works
      if (inputArray.every( element => element % i !== 0)) {
          return i;
      }
  }
}

console.log(avoidObstacles(inputArray))