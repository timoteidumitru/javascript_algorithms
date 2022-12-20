// get the the highest and lowest values of a string
let theStr = "31,56,6,72,-4,10,23,a,41";
let strArr = theStr.split(",");
let newArr = [];

for (let i = 0; i < strArr.length; i++) {
  if (!isNaN(strArr[i])) {
    newArr.push(+strArr[i]);
  }
}

const highestValue = newArr.sort().at(-1);
const lowestValue = newArr.sort()[0];

console.log(`Highest value: ${highestValue} \nLowest value: ${lowestValue}`);
