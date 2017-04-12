/**
 * Created by bradw on 4/9/2017.
 */
var express = require('express');
var router = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyWebApi = new SpotifyWebApi({
    clientId : 'e0fbdca0cc564551af75b6390c86462e',
    clientSecret : '8f8e9f3dd9464faebd59f97d1164c598',
});

var scopes = ['playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'playlist-modify-private'];
var state = '';

var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

router.get('/', function(req, res, next) {
    res.send('song data');
});

module.exports = router;