var express = require('express');
var router = express.Router();
var svg_captcha = require("svg-captcha");
var Mongo = require('../db');
var mongoClient = new Mongo();

router.post('/login', async (req, res) => {
    let captcha_data = req.session;
    let { username, password, text } = req.body;
})
router.get('/user', async (req, res) => {
    const collection = await mongoClient.getCollection('users');
    const result = await collection.find({}).toArray();
    res.json(result);
})

router.get('/captcha', function (req, res) {
    var captcha = svg_captcha.create();
    req.session.captcha_data = {
        text: captcha.text,
        expires: Date.now() + (1000 * 60)
    }
    console.log(req.session);
    res.type('svg');
    res.status(200).end(captcha.data);
});

module.exports = router;
