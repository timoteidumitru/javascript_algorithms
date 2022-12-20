// calculate average age of staffMembers
const stafMembers = [
  {
    name: "John Cena",
    travelToWorkBy: "bus",
    age: 47,
  },
  {
    name: "Mike Brown",
    travelToWorkBy: "car",
    age: 37,
  },
  {
    name: "John Deer",
    travelToWorkBy: "tube",
    age: 27,
  },
  {
    name: "Mihai Tim",
    travelToWorkBy: "bike",
    age: 21,
  },
];

const meanAge =
  stafMembers.reduce((acc, curr) => curr.age + acc, 0) / stafMembers.length;

console.log(meanAge);
