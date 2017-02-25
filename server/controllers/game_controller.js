var express = require('express');
var Hangperson = require('../lib/hangperson');
var GameModel = require('../models/Game');

var router = express.Router();
/*
POST /new
GET /current
POST /guess
    - letter=<letter>
*/
var WORD_LIST = [
	"space",
	"earth",
	"planet",
	"star",
	"rocket",
	"exhaust"
];


router.post('/new', (req, res) => {
	var word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
	var newGame = new Hangperson(word);
	console.log("Starting new game! [" + word + "]");

	GameModel.create({
		savedGame: newGame.serialize(),
		startDate: (new Date()).getTime()
	}, function() {
		res.json(newGame.present());
	})
});

module.exports = router;
