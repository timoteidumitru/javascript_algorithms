inputArray = [2, 3, 5, 1, 6, 7, 1, 9, 4]
k = 2

function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
      sum += inputArray[i];
  }
  
  max = sum;

  for (let j = k; j < inputArray.length; j++) {
      sum -= inputArray[j - k];
      sum += inputArray[j];
      if (sum > max) {
          max = sum;
      }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum(inputArray, k))