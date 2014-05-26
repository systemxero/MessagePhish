
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home');
};

/*
 * GET about page
 */
exports.about = function(req, res){
  res.render('about');
};

 /*
  * GET user page
  */
exports.user = require("./user.js").user;
