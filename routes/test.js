var express = require('express');
var router = express.Router();
var svg_captcha = require("svg-captcha");

router.get('/captcha', function (req, res) {
    var captcha = svg_captcha.create();
    console.log(req.session);
    res.type('svg');
    res.status(200).end(captcha.data);
});

module.exports = router;
