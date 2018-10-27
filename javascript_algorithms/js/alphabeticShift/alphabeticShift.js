inputString = "ilovejavascript"

function alphabeticShift(inputString) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  inputString = inputString.split("");

  for (var i = 0; i < inputString.length; i++) {
      var indexVal = 0;
      if (inputString[i] !== 'z') {
          indexVal = alphabet.indexOf(inputString[i]) + 1;
      }
      inputString[i] = alphabet[indexVal];
  }

  return inputString.join("");
}

console.log(alphabeticShift(inputString))
