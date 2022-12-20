// create new array that store numbers in arrayValues and sort it randomly without change the value of arrayValues
const arrayValues = [1, 2, 2, 2, 3, 4, 5, 5, 5, 8, 9];

const randomiseArray = arrayValues.slice().sort((a, b) => {
  if (a > b) return Math.random() > 0.5 ? -1 : 1;
  if (a < b) return Math.random() < 0.5 ? -1 : 1;
  if (a === b) return 0;
});

console.log(
  `Initial Array: ${[arrayValues]} \nNew Array Val: ${randomiseArray}`
);
