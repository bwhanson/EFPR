/**
 * Created by bradw on 4/11/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({title: 'title2 now playing', album: 'album now playing', artist: 'artist now playing', votes: 0, id: 1000});
});

module.exports = router;