var express = require('express');
var router = express.Router();

// 注册信息
const { hasReg } = require('../../public/javascripts/reg')

// 验证码
const { randomCode } = require('../../public/javascripts/common')

/* GET home page  */
router.get('/', function(req, res, next) {
  res.send('注册信息后台首页' );
})
/* POST reg */
const userPath = 'public/json/reg/user.json'
router.post('/reg', function(req, res, next) {
  let userId = req.body
  console.log(userId.userId)
  // hasReg(userPath, userId.userId)
  let checkCode = hasReg(userPath, userId.userId)
  const user = require('../../public/json/reg/user')
  console.log(checkCode,'--------------checkCode-------')
  res.json(checkCode)
})

// 验证码
router.post('/checkCode', function(req, res, next) {
  let checkCode = {
    checkCode: randomCode
  }
  res.json(checkCode);
})
module.exports = router;
