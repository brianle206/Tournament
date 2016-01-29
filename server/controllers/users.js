var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = (function(){
	return {
		create: function(req, res){
			
			User.findOne({username: req.body.username}, function(err, user){
				if(err){
					res.send(err)
				}else{
					var user = new User(req.body);
					user.save(function(err, user){
						console.log(user)
						if(err){
							res.send(err);
						}else{
							res.json(user)
						}
					})
				}
			})
		},
		index: function(req,res){
			User.findOne({username: req.body.username}, function(err,user){
				if(err){
					res.send(err);
				}else{
					res.json(user);
				}
			})
		}
	// show: function(req,res){
	// 	User.findOne({username: req.body.username}, function())
	}	// }
})();