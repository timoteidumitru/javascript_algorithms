arry = [50, 60, 60, 45, 70]

function alternatingSums(arry) {
  var even = 0;
  var odd = 0;
  
  arry.forEach((elem, index) => {
    if (index % 2 === 0) {
      even += elem;
    }
    else {
      odd += elem;
    }
  });
  return [even, odd];
  
}

console.log(alternatingSums(arry))