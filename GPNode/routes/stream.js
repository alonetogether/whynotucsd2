var accomplishments = require('../accomplishments.json');

exports.view = function(req, res){
	res.render('stream', accomplishments);
};