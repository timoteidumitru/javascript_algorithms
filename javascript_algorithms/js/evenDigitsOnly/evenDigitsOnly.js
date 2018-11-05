n = 248622;

function evenDigits(n){
  const digits = n.toString().split('');

  return digits.every( digit => parseInt(digit) % 2 === 0 )
}

console.log(evenDigits(n))

