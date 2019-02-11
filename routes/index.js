var express = require('express');
var router = express.Router();

/* GET nav img. */
const nav = require('../public/json/index/nav')
router.get('/nav', function(req, res, next) {
    res.json(nav);
})
/* GET banner img. */
const banner = require('../public/json/index/banner')
router.get('/banner', function(req, res, next) {
    res.json(banner);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
