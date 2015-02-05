exports.view = function(req, res){
  res.render('template', {
    'header': "Awesome!"
  });
};