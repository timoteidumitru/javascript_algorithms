inputArray = [1, 4, 5, -2, -4, 7, 3]

function adjacentElementsProduct(inputArray) {
  //Initialize product holder to first values and not 0 if you use 0 will not work if all results are negative
  var product = inputArray[0] * inputArray[1];
  //Compares the current product with adjacent multiplying elements and sets it if it is greator
  for (var i = 0; i < inputArray.length - 1; i++) {
      if ( product <= inputArray[i] * inputArray[i + 1]) {
          product = inputArray[i] * inputArray[i + 1];
      }
  }
  return product;
}

console.log(adjacentElementsProduct(inputArray))