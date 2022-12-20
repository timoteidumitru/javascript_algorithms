function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val % 2 === 0) return;
    sum += val;
  }
  return sum;
}

const sumEvenNumbersTotal = sumEvenNumbers([1, 2, 31, 4, 15, 16, 17]);
console.log(sumEvenNumbersTotal);
// which code line had a bug that is causing the wrong value to be returned from this function?
// andwer 5
