inputArray = [1, 2, 3]
elemToReplace = 2
substitutionElem = 8

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((element, index) => {
      if (element === elemToReplace) {
          inputArray[index] = substitutionElem;
      }
  });

  return inputArray;
}

console.log(arrayReplace(inputArray, elemToReplace, substitutionElem))