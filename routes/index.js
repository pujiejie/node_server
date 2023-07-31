var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log(req.session);
  res.end('Hello World');
});

module.exports = router;
