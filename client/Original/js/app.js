var myModule = angular.module("myApp", ["ngRoute"]);

myModule.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: "/Original/partials/home.html"

  })

  .when("/register", {
    templateUrl: "/Original/partials/register.html",
    controller: 'registerController',
    controllerAs: 'registerCtrl'
  })

  .when('/about', {
    templateUrl: '/Original/partials/about.html'
  })

  .when("/dashboard", {
    templateUrl: "/partials/dashboard.html",
    controller: "bucketsController",
    controllerAs: "bucketsCtrl"
  })
  
})