/**
 * Created by bradw on 4/9/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'test' });
});

module.exports = router;