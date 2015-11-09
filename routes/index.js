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


  var net = new brain.NeuralNetwork(); 

	net.train([{input: { Liverpool: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 1, Chelsea: 0 }, output: {Liverpool: 1} },
						 {input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Arsenal: 0, Chelsea: 1 }, output: {Chelsea: 1} },
						 {input: { Arsenal: 1, Chelsea: 0 }, output: {Arsenal: 1} },
						 {input: { Arsenal: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
	           ]);

	var output = net.run({ Liverpool: 0.5, Chelsea: 0.5 });
	console.log(output);

});



// router.get('/pick', function(req, res) {
// 	var player = function(){
//   	Player.find(function(err, player, count){
//   		if(err){
// 				var player = null;
// 				res.redirect("/");
// 			} else {
// 				Player.find({}, function(err, players){
// 					res.render('pick', { players: players });
// 				})
// 			}
//   	});
//   }
//   player();
// })

module.exports = router;
