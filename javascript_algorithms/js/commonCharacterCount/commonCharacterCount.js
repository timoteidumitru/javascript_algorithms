s1 = "zzccddfffsdd";
s2 = "fffrcczz"

function commonCharacterCount(s1, s2) {
  //Split up strings into an array of chars
  s1 = s1.split("");
  s2 = s2.split("");
  //Objects to keep track of char param counts
  const s1Object = getCharList(s1);
  const s2Object = getCharList(s2);
  let total = 0;
  //Iterate through one object
  for (const prop in s1Object) {
      //Does our second object have the same property?
      if (s2Object.hasOwnProperty(prop) === true) {
          //Add the smaller common ammount to total
          if (s2Object[prop] < s1Object[prop]) {
              total += s2Object[prop];
          } else {
              total += s1Object[prop];
          }
      }
  }

  return total;
}

function getCharList(word) {
  const wordCount = {};

  for (let i = 0; i < word.length; i++) {
      if (wordCount.hasOwnProperty(word[i]) === false) {
          wordCount[word[i]] = 1;
      } else {
          wordCount[word[i]]++;
      }
  }

  return wordCount;
}

console.log(commonCharacterCount(s1, s2));