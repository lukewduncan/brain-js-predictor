var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
	name: String,
	team: String,
	position: String,
	pic_url: String
});

var Player = mongoose.model('Player', playerSchema);

// Make this available to our other files
module.exports = Player;