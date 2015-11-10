var express = require('express');
var router = express.Router();
var Player = require('../models/player');
var Team = require('../models/team');
var brain = require('brain');


/* GET home page. */
router.get('/', function (req, res) {

	var team = function(){
  	Team.find(function(err, team, count){
  		if(err){
				var team = null;
				res.redirect("/");
			} else {
				Team.find({}, function(err, teams){
					res.render('index', { teams: teams });
				})
			}
  	});
  }
  team();

   

});


// create a route for post ajax 
router.post('/', function(req, res) {

	var teams = req.body.teams;
	var individual = teams.split(',');

	var net = new brain.NeuralNetwork(); 

	var x = individual[0];
  var y = individual[1];

	net.train([{input: { Liverpool: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Arsenal: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
						 {input: { Arsenal: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
	           ]);

	var output = net.run({ x: 0, y: 0 });

	console.log(x, y);
	console.log(output);

	// // save prediction to db eventually
	// newUserlist.save(function(err) {
	// 	if (err) console.log(err);
	// 	res.send("hello");
	// })
});

router.get('/', function (req, res) {
	console.log(req.body.individual);

});

module.exports = router;