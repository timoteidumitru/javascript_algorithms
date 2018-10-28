year = 2090

function centuryFromYear(year) {
  //Breaks down into century floating point
  const century = year / 100;
  //If perfect century return the value
  if (year % 100 === 0) {
          return century;
  }
  //If imperfect century example: 1705 remove floating points and add 1 for logic
  return Math.floor(century) + 1;
}

console.log(centuryFromYear(year))