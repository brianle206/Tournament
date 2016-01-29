myModule.factory('registerFactory', function($http){
	var factory = {};
	factory.user = {};
	factory.create = function(user, callback){
		console.log(user)
		$http.post('/users', user).success(function(user){
			console.log("it did something")
		});
	}
	return factory;
})