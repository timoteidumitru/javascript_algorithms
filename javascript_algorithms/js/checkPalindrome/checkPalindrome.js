inputString = "Madam"
function checkPalindrom(inputString){
  const initialWord = inputString.toLowerCase();
  const reverseWord = initialWord.split('').reverse().join('');

  return initialWord === reverseWord;
}

console.log(checkPalindrom(inputString));
