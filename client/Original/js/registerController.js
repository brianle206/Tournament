myModule.controller('registerController', function(registerFactory, $location){
	this.create = function(user){
			console.log(user)
		registerFactory.create(user, function(){
			$location.path('/dashboard');
		});
	}
})