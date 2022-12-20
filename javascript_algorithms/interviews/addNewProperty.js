// add new property called dob to staffMembers
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

for (let i in stafMembers) {
  stafMembers[i].dob = Date.now();
}

console.log(stafMembers);
