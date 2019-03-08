const fs = require('fs')
let { randomCode, publicDataHeader } = require('./common')
// let publicTitle = require('../json/public/public-title')
// const userUrl =  '../json/reg/user.json'
function hasReg( path, id ) {
  let user = readFile(path)
  if (user.data.length === 0) {
    addUser(user,id)
    writeFile(path, user)
    console.log(user.data[0].checkCode,'-----------user.data.checkCode')
    let _publicDataHeader = publicDataHeader
    _publicDataHeader.data.length = 0
    _publicDataHeader.data.push({
      checkCode: user.data[0].checkCode
    })
    return _publicDataHeader
  }
  else {
    for(let item of user.data){
      if (id === item.userId) {
        console.log( id , item.userId,'--------id === item.userId------')
        return {
          msg: '此账号已被注册，请选择重新注册或登录此账号'
        }
      }
      else if (id !== item.userId) {
        addUser(user,id)
        // 写入json
        writeFile(path, user)
        console.log(addUser(user,id),'--------id !== item.userId------')
        let _publicDataHeader = publicDataHeader
        _publicDataHeader.data.length = 0
        _publicDataHeader.data.push({
          checkCode: item.checkCode
        })
        return _publicDataHeader
      }
    }
    // user.data.forEach((item,index) => {
    //
    // })
  }

}
// hasReg( userUrl, 111 )
function addUser(user, id) {
  user.data.push({
    userId: id,
    checkCode: randomCode(4)
  })
}
function readFile( path ) {
  let jsonStr = fs.readFileSync(path, 'utf8')
  console.log('--------------读取成功---------------')
  let json = JSON.parse(jsonStr)
  return json
}
function writeFile( path, obj ) {
  let jsonStr = JSON.stringify(obj, null, 2)
  fs.writeFileSync(path, jsonStr, err => {
    if (err)
      throw err
    // {
    //   console.error(err)
    // }
    console.log('--------------写入成功---------------')
  })
  console.log(obj)
}

module.exports = { hasReg, writeFile }