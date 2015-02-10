var ltg = require('../ltg.json');

exports.view = function(req, res){
	res.render('goals', ltg);
};
// var wgs = require('../ltg.json');

// exports.view = function(req, res){
// 	res.render('description', wgs);
// };