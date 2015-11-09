var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
	teamname: String,
	logourl: String,
});

var Team = mongoose.model('Team', teamSchema);

// Make this available to our other files
module.exports = Team;