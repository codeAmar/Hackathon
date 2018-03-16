require('dotenv').config();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    'accessId':process.env.ACESSS_ID,
    'secretKey':process.env.SECRET_KEY,
    'botName':process.env.BOT_NAME
   });
});

module.exports = router;
