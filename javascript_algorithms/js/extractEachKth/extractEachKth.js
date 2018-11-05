inputArray = [1,2,3,4,5,6,7,8,9,10];
k = 4;

function extractEachKth(inputArray, k) {
  return inputArray.filter((e, i) => (i + 1) % k !== 0)
}

console.log(extractEachKth(inputArray, k))
