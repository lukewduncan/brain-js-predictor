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
router.post('/', function(req, res, result) {

	var teams = req.body.teams;
	var individual = teams.split(',');

	var net = new brain.NeuralNetwork(); 

			var scores = [{input: { Arsenal: 1, CrystalPalace: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 0.5, ManchesterCity: 0.5 }, output: {Tie: 1} },
						 {input: { Arsenal: 0.5, Tottenham: 0.5 }, output: {Tie: 1} },
						 {input: { Arsenal: 1, Burnely: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 0, ManchesterUnited: 1 }, output: {ManchesterUnited: 1} },
						 {input: { Arsenal: 1, Southampton: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, Newcastle: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, QPR: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, StokeCity: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 0.5, Hull: 0.5 }, output: {Tie: 1} },
						 {input: { Arsenal: 1, AstonVilla: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, Leicester: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, Everton: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, WestHam: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 1, Liverpool: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
						 {input: { Arsenal: 0, Swansea: 1 }, output: {Swansea: 1} },
						 {input: { Arsenal: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
						 {input: { Arsenal: 1, WestBrom: 0 }, output: {Arsenal: 1} },
						 {input: { AstonVilla: 0.5, Newcastle: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
						 {input: { AstonVilla: 0, Tottenham: 1 }, output: {Tottenham: 1} },
						 {input: { AstonVilla: 0, Burnley: 1 }, output: {Burnley: 1} },
						 {input: { AstonVilla: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 0.5, Southampton: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 0.5, CrystalPalace: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 0.5, QPR: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 0, StokeCity: 1 }, output: {StokeCity: 1} },
						 {input: { AstonVilla: 1, Hull: 0 }, output: {AstonVilla: 1} },
						 {input: { AstonVilla: 1, AstonVilla: 0 }, output: {AstonVilla: 1} },
						 {input: { AstonVilla: 1, Leicester: 0 }, output: {AstonVilla: 1} },
						 {input: { AstonVilla: 1, Everton: 0 }, output: {AstonVilla: 1} },
						 {input: { AstonVilla: 1, WestHam: 0 }, output: {AstonVilla: 1} },
						 {input: { AstonVilla: 0, Liverpool: 1 }, output: {Liverpool: 1} },
						 {input: { AstonVilla: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { AstonVilla: 0, Swansea: 1 }, output: {Swansea: 1} },
						 {input: { AstonVilla: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
						 {input: { AstonVilla: 1, WestBrom: 0 }, output: {AstonVilla: 1} },
						 {input: { Burnley: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Burnley: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 0, WestHam: 1 }, output: {WestHam: 1} },
						 {input: { Burnley: 0, Everton: 1 }, output: {Everton: 1} },
						 {input: { Burnley: 1, Hull: 0 }, output: {Burnley: 1} },
						 {input: { Burnley: 0.5, AstonVilla: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 0.5, Newcastle: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 1, Southampton: 0 }, output: {Burnley: 1} },
						 {input: { Burnley: 0, Liverpool: 1 }, output: {Liverpool: 1} },
						 {input: { Burnley: 1, QPR: 0 }, output: {Burnley: 1} },
						 {input: { Burnley: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
						 {input: { Burnley: 0.5, WestBrom: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 0, Swansea: 1 }, output: {Swansea: 1} },
						 {input: { Burnley: 1, ManchesterCity: 0 }, output: {Burnley: 1} },
						 {input: { Burnley: 0.5, Tottenham: 0.5 }, output: {Tie: 1} },
						 {input: { Burnley: 0, Arsenal: 1 }, output: {Swansea: 1} },
						 {input: { Burnley: 0, Leicester: 1 }, output: {Leicester: 1} },
						 {input: { Burnley: 0.5, StokeCity: 0.5 }, output: {Tie: 1} },
						 {input: { Chelsea: 1, Leicester: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, Swansea: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, AstonVilla: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, Arsenal: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, QPR: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, WestBrom: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, Tottenham: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, Hull: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, WestHam: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, Newcastle: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 0.5, ManchesterCity: 0.5 }, output: {Tie: 1} },
						 {input: { Chelsea: 1, Everton: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
						 {input: { Chelsea: 0.5, Southampton: 0.5 }, output: {Tie: 1} },
						 {input: { Chelsea: 1, StokeCity: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, ManchesterUnited: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 1, CrystalPalace: 0 }, output: {Chelsea: 1} },
						 {input: { Chelsea: 0.5, Liverpool: 0.5 }, output: {Tie: 1} },
						 {input: { Chelsea: 1, Sunderland: 0 }, output: {Chelsea: 1} },
						 {input: { CrystalPalace: 0, WestHam: 1 }, output: {WestHam: 1} },
						 {input: { CrystalPalace: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
						 {input: { CrystalPalace: 1, Leicester: 0 }, output: {CrystalPalace: 1} },
						 {input: { CrystalPalace: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { CrystalPalace: 0, Sunderland: 1 }, output: {Sunderland: 1} },
						 {input: { CrystalPalace: 1, Liverpool: 0 }, output: {CrystalPalace: 1} },
						 {input: { CrystalPalace: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
						 {input: { CrystalPalace: 0.5, StokeCity: 0.5 }, output: {Tie: 1} },
						 {input: { CrystalPalace: 0, Southampton: 1 }, output: {Southampton: 1} },
						 {input: { CrystalPalace: 1, Tottenham: 0 }, output: {CrystalPalace: 1} },
						 {input: { CrystalPalace: 0, Everton: 1 }, output: {Everton: 1} },
						 {input: { CrystalPalace: 0.5, Newcastle: 0.5 }, output: {Tie: 1} },
						 {input: { CrystalPalace: 0, Arsenal: 1 }, output: {Arsenal: 1} },
						 {input: { CrystalPalace: 1, QPR: 0 }, output: {CrystalPalace: 1} },
						 {input: { CrystalPalace: 1, ManchesterCity: 0 }, output: {CrystalPalace: 1} },
						 {input: { CrystalPalace: 0, WestBrom: 1 }, output: {WestBrom: 1} },
						 {input: { CrystalPalace: 0, Hull: 1 }, output: {Hull: 1} },
						 {input: { CrystalPalace: 0.5, ManchesterUnited: 0.5 }, output: {ManchesterUnited: 1} },
						 {input: { CrystalPalace: 1, Swansea: 0 }, output: {CrystalPalace: 1} },
						 {input: { Everton: 0.5, Arsenal: 0.5 }, output: {Everton: 1} },
						 {input: { Everton: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Everton: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
						 {input: { Everton: 1, AstonVilla: 0 }, output: {Everton: 1} },
						 {input: { Everton: 0.5, Swansea: 0.5 }, output: {Tie: 1} },
						 {input: { Everton: 1, WestHam: 0 }, output: {Everton: 1} },
						 {input: { Everton: 0.5, Hull: 0.5 }, output: {Tie: 1} },
						 {input: { Everton: 1, QPR: 0 }, output: {Everton: 1} },
						 {input: { Everton: 0, StokeCity: 1 }, output: {StokeCity: 1} },
						 {input: { Everton: 0.5, ManchesterCity: 0.5}, output: {Tie: 1} },
						 {input: { Everton: 0.5, WestBrom: 0.5 }, output: {Tie: 1} },
						 {input: { Everton: 0.5, Liverpool: 0.5 }, output: {Tie: 1} },
						 {input: { Everton: 0.5, Leicester: 0.5 }, output: {Tie: 1} },
						 {input: { Everton: 1, Newcastle: 0 }, output: {Everton: 1} },
						 {input: { Everton: 1, Southampton: 0 }, output: {Everton: 1} },
						 {input: { Everton: 1, Burnley: 0 }, output: {Everton: 1} },
						 {input: { Everton: 1, ManchesterUnited: 0 }, output: {Everton: 1} },
						 {input: { Everton: 0, Sunderland: 1 }, output: {Sunderland: 1} },
						 {input: { Everton: 0, Tottenham: 1 }, output: {Tottenham: 1} },
						 {input: { Hull: 0, StokeCity: 1 }, output: {WestHam: 1} },
						 {input: { Hull: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
						 {input: { Hull: 1, ManchesterCity: 0 }, output: {Hull: 1} },
						 {input: { Hull: 0, CrystalPalace: 1 }, output: {Chelsea: 1} },
						 {input: { Hull: 0, Southampton: 1 }, output: {Sunderland: 1} },
						 {input: { Hull: 1, Tottenham: 0 }, output: {Hull: 1} },
						 {input: { Hull: 0, WestBrom: 1 }, output: {AstonVilla: 1} },
						 {input: { Hull: 0.5, Swansea: 0.5 }, output: {Tie: 1} },
						 {input: { Hull: 0, Leicester: 1 }, output: {Southampton: 1} },
						 {input: { Hull: 1, Everton: 0 }, output: {Hull: 1} },
						 {input: { Hull: 0, Newcastle: 1 }, output: {Hull: 1} },
						 {input: { Hull: 0.5, AstonVilla: 0.5 }, output: {Tie: 1} },
						 {input: { Hull: 0, QPR: 1 }, output: {Arsenal: 1} },
						 {input: { Hull: 1, Sunderland: 0 }, output: {Hull: 1} },
						 {input: { Hull: 1, Chelsea: 0 }, output: {Hull: 1} },
						 {input: { Hull: 0, Liverpool: 1 }, output: {WestBrom: 1} },
						 {input: { Hull: 0, Arsenal: 1 }, output: {Hull: 1} },
						 {input: { Hull: 0.5, Burnley: 0.5 }, output: {ManchesterUnited: 1} },
						 {input: { Hull: 1, ManchesterUnited: 0 }, output: {Hull: 1} }];

	var x = individual[0];
  var y = individual[1];

  for (var i = 0; i < scores.length; i++) {
  	console.log(Object.keys(scores[i].input));
  }

	net.train([
	            ]);

	var output = net.run({ x: 0.5, y: 0 });

	console.log(x, y);
	console.log(output)



	// // save prediction to db eventually
	// newUserlist.save(function(err) {
	// 	if (err) console.log(err);
	// 	res.send("hello");
	// })
});

module.exports = router;