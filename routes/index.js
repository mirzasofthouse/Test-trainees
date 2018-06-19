var express = require('express');
var router = express.Router();
var countByName = require('../utils/countByName');

/* GET home page. */
router.get('/', function (req, res, next) {
  // TODO 
  // Handle call here
  // Check util function and return expected result
  res.status(200).send("Ok");
});

module.exports = router;
