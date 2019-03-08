let code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let publicDataHeader = {
  "status": "ok",
  "code": 200,
  "data": [
  ]
}
function randomCode(n) {
  let randomCode = '',
      index
  for (let i = 0; i < n; i++) {
    index = Math.floor(Math.random() * code.length)
    randomCode += code[index]
  }
  // console.log(randomCode)
  return randomCode
}
// randomCode(4)
module.exports = { randomCode, publicDataHeader }