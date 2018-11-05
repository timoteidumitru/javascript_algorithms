s = "ceoydefthf5iyg5h5yts"
t = "codefights"

function convertString(s, t) {
  let word = ""
  let indexVal = 0
  s = s.split("")

  for(let i = 0; i < s.length; i++) {
    if(s[i] === t[indexVal]) {
      word = word.concat(s[i])
      indexVal++

      if(word === t) {
        return true
      }
    }
  }

  return false
}

console.log(convertString(s, t))


