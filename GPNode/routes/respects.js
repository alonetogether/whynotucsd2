var respectstream = require('../respectstream.json');

exports.view = function(req, res){
	res.render('stream', respectstream);
};